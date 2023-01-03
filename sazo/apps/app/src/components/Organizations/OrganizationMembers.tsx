import { useRouter } from "next/router";
import { Avatar, Button, Title3, UIText } from "@sazo/ui";
import { FullPageLoading } from "../Loaders/FullPageLoading";
import { Organization } from "@sazo/types";
import { useGetOrganizationMembers } from "@sazo/core/src/hooks/useGetOrganizationMembers";
import { AVATAR_FALLBACK } from "@sazo/configuration";

type Props = {
    organization: Organization;
}


export function OrganizationMembers({ organization }: Props) {
    const router = useRouter()
    const { data: members } = useGetOrganizationMembers(organization.id)

    return (
        <>
            <div className="mt-12">
                <Title3>Werknemers</Title3>

                <div className="grid grid-cols mt-4">
                    {members && members.map((member, index) => (
                        <>
                            <div className="inline-flex justify-between align-center divide-gray-300">
                                <div className={"inline-flex"}>
                                    <Avatar
                                        className={"rounded-full"}
                                        size={42}
                                        src={member.avatar_url ? member.avatar_url : AVATAR_FALLBACK}
                                    />
                                    <div className="grid grid-row ml-4">
                                        <UIText size={"text-md"}>{member.full_name}</UIText>
                                        <UIText tertiary>{member.tagline}</UIText>
                                    </div>
                                </div>
                                <Button>Contact</Button>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}