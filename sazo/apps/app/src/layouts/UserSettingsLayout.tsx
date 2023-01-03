import { SubNavigationbar } from "../components/NavigationBar/Subnavigation/SubNavigationbar";
import { useRouter } from "next/router";
import { AppLayout } from "./AppLayout";
import { LargeTitle } from "@sazo/ui";

type Props = {
    children: React.ReactNode;
}

export function UserSettingsLayout(props: Props) {
    const { children } = props
    const router = useRouter()

    const navLinks = [
        {
            label: "Algemeen",
            href: "/me/settings",
            active: router.pathname === "/me/settings"
        },
        {
            label: "Notificaties",
            href: "/me/settings/notifications",
            active: router.pathname === "/me/settings/notifications"
        }
    ]

    return (
        <AppLayout>
            <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
                <aside className="col-span-2">
                    <SubNavigationbar navLinks={navLinks} />
                </aside>
                <main className="lg:col-span-9 xl:col-span-7">
                    <LargeTitle weight="font-semibold" className="w-full px-4 pb-3 mx-auto leading-none sm:pb-5">
                        Instellingen
                    </LargeTitle>
                    <div className="flex flex-col flex-1 w-full px-4">
                        <div className="space-y-4 sm:space-y-8">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </AppLayout>
    )
}
