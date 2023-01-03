import React, {createContext, useCallback, useContext, useEffect, useReducer} from "react";
import toast from "react-hot-toast";
import { FileRejection, useDropzone } from "react-dropzone";
import { Post, TransformedFile } from "@sazo/types";
import { MAX_FILE_NUMBER, MAX_FILE_SIZE, VALID_MIMETYPES } from "@sazo/configuration";
import { transformFile, useFileUploadMutation } from "@sazo/core";

export enum ComposerDialogActionType {
    open = "open",
    openCategorySelect = "openCategorySelect",
    close = "close",
    closeCategorySelect = "closeCategorySelect",
    setDescription = "set-description",
    setFiles = "set-files",
    reorderFiles = "reorder-files",
    removeFile = "remove-file",
    setParent = "set-parent",

    setWorkArea = "set-workarea",
    setCareer = "set-career",

    setTags = "set-tags",
    reset = "reset",
    fileUploadComplete = "file-upload-complete",
    fileUploadError = "file-upload-error"
}

type FileUploadCompleteType = {
    file: TransformedFile;
    file_path: string | null;
    property: "key" | "preview_file_path"
}

type FileUploadErrorType = {
    file: TransformedFile;
    error: Error;
}

type Action =
    | { type: ComposerDialogActionType.open }
    | { type: ComposerDialogActionType.openCategorySelect }
    | { type: ComposerDialogActionType.close }
    | { type: ComposerDialogActionType.closeCategorySelect }
    | { type: ComposerDialogActionType.setDescription; payload: string }
    | { type: ComposerDialogActionType.setWorkArea; payload: Option }
    | { type: ComposerDialogActionType.setCareer; payload: Option }
    | { type: ComposerDialogActionType.setFiles; payload: TransformedFile[] }
    | { type: ComposerDialogActionType.reorderFiles; payload: TransformedFile[] }
    | { type: ComposerDialogActionType.removeFile; payload: TransformedFile }
    | { type: ComposerDialogActionType.setParent; payload: Post }
    | { type: ComposerDialogActionType.reset }
    | { type: ComposerDialogActionType.setTags; payload: string[] }
    | {
        type: ComposerDialogActionType.fileUploadComplete;
        payload: FileUploadCompleteType;
      }
    | {
        type: ComposerDialogActionType.fileUploadError;
        payload: FileUploadErrorType;
      };

type Dispatch = (action: Action) => void;

type Option = {
    value: string;
    label: string;
}

type State = {
    description: string;
    files: TransformedFile[];
    open: boolean;
    tags: string[];
    draft: boolean;
    workArea?: Option,
    career?: Option,
    categorySelectOpen: boolean;
}

type ComposerDialogProviderProps = {
    children: React.ReactNode;
}

const ComposerContext = createContext<
    | {
    state: State;
    dispatch: Dispatch;
    dropzone: any;
    uploadFiles: (files: File[]) => void;
}
    | undefined
>(undefined);

export function ComposerDialogProvider({
    children
}: ComposerDialogProviderProps) {

    const max_file_size = MAX_FILE_SIZE

    const defaultState = {
        description: '',
        files: [],
        open: false,
        tags: [],
        workArea: null,
        career: null,
        draft: false,
        categorySelectOpen: false,
    }

    function matchFile(first: TransformedFile, second: TransformedFile) {
        return first.id === second.id
    }

    function transformFiles(files: File[]) {
        return files.filter(Boolean).map(transformFile);
    }

    function dialogReducer(state: State, action: Action) {
        switch (action.type) {
            case "set-files": {
                return {
                    ...state,
                    files: [...state.files, ...action.payload],
                    draft: true,
                    open: true,
                }
            }
            case "openCategorySelect":
                return {
                    ...state,
                    categorySelectOpen: true,
                }
            case "closeCategorySelect":
                return {
                    ...state,
                    categorySelectOpen: false,
                }
            case "reorder-files": {
                return { ...state, files: action.payload }
            }
            case "remove-file": {
                return {
                    ...state,
                    files: state.files.filter((f) => !matchFile(f, action.payload))
                }
            }
            case "set-parent": {
                const post = action.payload as Post

                return {
                    ...state,
                    parent: post,
                    tags: post.tags.map((tag) => tag.name),
                }
            }
            case "file-upload-complete": {
                const { file, file_path, property } = action.payload

                const newFiles = state.files.map((p: TransformedFile) => {
                    if (matchFile(p, file)) {
                        return {
                            ...p,
                            [property]: file_path
                        }
                    }

                    return p
                })

                return {
                    ...state,
                    files: newFiles
                }
            }
            case "file-upload-error": {
                const { file, error } = action.payload

                const newFiles = state.files.map((p: TransformedFile) => ({
                    ...p,
                    error: matchFile(p, file) ? error : p.error
                }))

                return {
                    ...state,
                    files: newFiles
                }
            }
            case "set-description": {
                return {
                    ...state,
                    description: action.payload,
                    draft: true,
                }
            }
            case "set-workarea": {
                return {
                    ...state,
                    workArea: action.payload
                }
            }
            case "set-career": {
                return {
                    ...state,
                    career: action.payload
                }
            }
            case "set-tags": {
                return {
                    ...state,
                    tags: action.payload
                }
            }
            case "open": {
                return {
                    ...state,
                    open: true,
                }
            }
            case "close": {
                return {
                    ...state,
                    open: false
                }
            }
            case "reset": {
                return defaultState
            }
            default: {
                throw new Error(`Unhandled action type: ${action.type}`)
            }
        }
    }

    const uploadFile = useFileUploadMutation(
        onFileUploadComplete,
        //@ts-ignore
        onFileUploadError,
        "key"
    )

    function onFileUploadComplete(
        file: TransformedFile,
        file_path: string | null,
        property: "key" | "preview_file_path"
    ) {
        dispatch({
            type: ComposerDialogActionType.fileUploadComplete,
            payload: { file, file_path, property }
        })
    }

    function onFileUploadError(
        file: TransformedFile,
        error: Error
    ) {
        dispatch({
            type: ComposerDialogActionType.fileUploadError,
            payload: { file, error }
        })
    }

    async function uploadFiles(localFiles: File[]) {
        const transformedFiles = transformFiles(localFiles)

        dispatch({
            type: ComposerDialogActionType.setFiles,
            payload: transformedFiles
        })

        const uploadPromises = transformedFiles.map((file) =>
            uploadFile.mutate({
                file,
                resource: "Post",
            })
        )

        await Promise.all([...uploadPromises])
    }

    const onDrop = useCallback(
        async (acceptedFiles: File[], fileRejections: FileRejection[]) => {
            uploadFiles(acceptedFiles)

            if (fileRejections?.length) {
                const { errors } = fileRejections[0];
                const error = errors[0]

                switch (error.code) {
                    case "file-too-large": {
                        toast.error(
                            `Files must be smaller than ${Math.floor(
                                max_file_size / 1024 / 1024
                            )}mb.`
                        );
                        break;
                    }
                    default: {
                        toast.error(error.message);
                    }
                }
            }
        },[]
    )

    const dropzone = useDropzone({
        onDrop,
        noClick: true,
        noKeyboard: true,
        maxFiles: MAX_FILE_NUMBER,
        maxSize: MAX_FILE_SIZE,
        useFsAccessApi: false,
        accept: {
            "image/*": [".jpg", ".jpeg", ".png", ".gif"],
            "video/mp4": [".mp4"],
            "video/quicktime": [".mov"],
        },
    })

    const onPaste = useCallback((event: any) => {
        const items = (event.clipboardData || event.originalEvent.clipboardData)
            .items;

        if (!items) return;

        for (const item of items) {
            const isFile = item.kind === "file";
            const isValid = VALID_MIMETYPES.some((type) => type === item.type);
            const uploadable = isFile && isValid;

            if (uploadable) {
                const file = item.getAsFile();

                dispatch({ type: ComposerDialogActionType.open });
                uploadFiles([file]);
                break;
            }
        }
    }, []) // eslint-disable-line

    useEffect(() => {
        document.addEventListener("paste", onPaste)

        return function cleanup() {
            document.removeEventListener("paste", onPaste)
        }
    }, [onPaste])


    const [state, dispatch ] = useReducer(dialogReducer, defaultState)

    useEffect(() => {
        const down = (e: any) => {
            if (e.key === "/" && e.metaKey && !state.open) {
                console.log("hoi")
                dispatch({ type: ComposerDialogActionType.open })
            }
        }

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [state]);

    const value = { state, dispatch, dropzone, uploadFiles };

    return (
        <ComposerContext.Provider value={value}>
            {children}
        </ComposerContext.Provider>
    )
}

export function useComposer() {
    const context = useContext(ComposerContext)

    if (context === undefined) {
        throw new Error(
            "useComposerDialog must be used within a ComposerDialogProvider"
        )
    }

    return context;
}
