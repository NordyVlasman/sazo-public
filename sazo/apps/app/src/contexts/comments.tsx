import { useQueryClient } from "@tanstack/react-query";
import React, { createContext, useContext, useReducer } from "react";
import { Post } from "@sazo/types";

export enum CommentsDialogActionType {
    open = "open",
    close = "close",
}

type Action = { type: CommentsDialogActionType; payload?: any };
type Dispatch = (action: Action) => void;
type State = { post: Post | undefined };
type CommentsDialogProviderProps = {
    children: React.ReactNode;
};

const CommentsContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

export function CommentsDialogProvider({ children }: CommentsDialogProviderProps) {
    const queryClient = useQueryClient();

    function dialogReducer(state: State, action: Action) {
        switch (action.type) {
            case "open": {
                return { ...state, post: action.payload };
            }
            case "close": {
                if (state.post) {
                    queryClient.invalidateQueries([
                        `/api/v1/post/${state.post.id}/comment`,
                        state.post.id,
                    ]);
                }
                return { ...state, post: undefined };
            }
            default: {
                throw new Error(`Unhandled action type: ${action.type}`);
            }
        }
    }

    const [state, dispatch] = useReducer(dialogReducer, { post: undefined });

    const value = { state, dispatch };

    return (
        <CommentsContext.Provider value={value}>
            {children}
        </CommentsContext.Provider>
    );
}

export function useCommentsDialog() {
    const context = useContext(CommentsContext);

    if (context === undefined) {
        throw new Error(
            "useCommentsDialog must be used within a CommentsDialogProvider"
        );
    }

    return context;
}
