import { AVATAR_FALLBACK } from "@sazo/configuration";
import { useGetCurrentUser, useGetMessages, useSendMessage } from "@sazo/core";
import { Chat } from "@sazo/types";
import { Avatar, Button, LoadingSpinner, TextField, Title2, Title3 } from "@sazo/ui";
import classNames from "classnames";
import { useState } from "react";
import { toast } from "react-hot-toast";
import MarkdownEditor from "../MarkdownEditor";

interface Props {
    chat: Chat
}

export function MessagesComponent({ chat }: Props) {
    const sendMessage = useSendMessage(chat.id)
    const { data: messages } = useGetMessages(chat.id)
    const { data: currentUser } = useGetCurrentUser()

    const [message, setMessage] = useState("")

    function handleSubmit(event: any) {
        event.preventDefault()

        sendMessage.mutate({
            message
        }, {
            onSuccess: async () => {
                setMessage("")
            },
            onError: (error: any) => {
                toast.error(error.message)
            }
        })
    }

    if (!messages) return <LoadingSpinner />

    return (
        <div className="w-full border border-gray-200 rounded-md">
            <div className="w-full bg-gray-100 rounded-t-md flex p-2 items-center gap-2">
                <Avatar
                    src={chat.members[0].avatar_url ? chat.members[0].avatar_url : AVATAR_FALLBACK}
                    size={36}
                />
                <Title3>{chat.members[0].full_name}</Title3>
            </div>
            <div className="p-2 flex flex-col flex-grow h-auto w-full overflow-auto">
                {messages && messages?.map((message) => (
                    <div key={message.id} className={classNames("flex w-full mt-2 space-x-3", {
                        "justify-end": message.author_id.toString() == currentUser.id
                    })}>
                        <div className={classNames({
                            "bg-gray-300 p-3 rounded-r-lg rounded-bl-lg": message.author_id.toString() != currentUser.id,
                            "bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg": message.author_id.toString() == currentUser.id,
                        })}>
                            {message.content}
                        </div>
                    </div>
                ))}
            </div>
            <form
                className="relative flex space-x-3 items-center p-2 border-t border-gray-200 bg-gray-50"
                onSubmit={handleSubmit}
            >
                <div>
                    <Avatar size={32} src={currentUser.avatar_url ? currentUser.avatar_url : AVATAR_FALLBACK} className={"rounded-full mt-1"} />
                </div>
                <div className="flex items-center justify-between flex-1 px-3 py-2 text-black transition-shadow bg-white rounded-md shadow-sm hover:shadow ring-1 ring-black ring-opacity-5">
                    <input
                        placeholder="Write a comment..."
                        className="w-full border-none ring-0 focus:ring-0"
                        type={"text"}
                        onChange={(event) => setMessage(event.target.value)}
                        autoFocus
                    />
                    <Button
                        disabled={message.trim().length === 0}
                        submit
                        onClick={() => null}
                    >
                        Stuur
                    </Button>
                </div>
            </form>
        </div>
    )
}
