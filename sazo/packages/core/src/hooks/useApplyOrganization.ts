import {useMutation, useQueryClient} from "@tanstack/react-query";
import { apiUrl, postJSON } from "../utils";
import toast from "react-hot-toast";

type CreateOrganizationProps = {
    name: string;
    email: string;
}

export function useApplyOrganization() {
    const queryClient = useQueryClient();

    return useMutation(
        async (data: CreateOrganizationProps) => {
            return await postJSON(apiUrl(`/api/v1/organization/apply`), data);
        },
        {
            onSuccess: async () => {
              toast.success("Je aanvraag is ontvangen")
            },
        }
    );
}