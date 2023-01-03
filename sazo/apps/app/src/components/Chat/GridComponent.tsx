import { AVATAR_FALLBACK } from "@sazo/configuration";
import { useGetAllChats } from "@sazo/core";
import { Avatar, LargeTitle, Title1, UIText } from "@sazo/ui";
import { useState } from "react";
import { Title } from "../SettingsSection";
import { MessagesComponent } from "./MessagesComponent";

export function ChatGridComponent() {
    const getChats = useGetAllChats()
    const chats = getChats.data?.pages.map((page) => page.data).flat(2)
    console.log(chats)
    const [selectedChat, setSelectedChat] = useState(null)

    return (
        <>
            <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
                <aside className="hidden xl:col-span-3 xl:block border border-gray-200 rounded-md">
                    <div className="flex items-center justify-between w-full bg-gray-50 p-2">
                        <Title1>
                            Chats
                        </Title1>
                    </div>
                    <ul className="mt-4 px-2">
                        {chats && chats.map((chat) => (
                            <>
                                <div className="flex items-center gap-2" onClick={() => setSelectedChat(chat)}>
                                    <Avatar
                                        src={chat.members[0].avatar_url ? chat.members[0].avatar_url  : AVATAR_FALLBACK}
                                        size={32}
                                    />
                                    <div className="grid">
                                        <UIText>{chat.members[0].full_name}</UIText>
                                        <UIText>{chat.latest_message.content}</UIText>
                                    </div>
                                </div>
                            </>
                        ))}
                    </ul>
                </aside>
                <main className="lg:col-span-9 xl:col-span-9">
                    {selectedChat && (
                        <MessagesComponent chat={selectedChat} />
                    )}
                </main>
            </div>
        </>
    )
}
