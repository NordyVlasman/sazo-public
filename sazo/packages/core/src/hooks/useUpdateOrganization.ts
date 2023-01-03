import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUrl, putJSON } from "../utils";

type UpdateOrgProps = {
  id: string;
  avatar_path?: string | null;
  name?: string;
  website_url?: string;
  description?: string;
  country?: string;
  address_street_1?: string;
  city?: string;
  state?: string;
  zip?: string;
  phone?: string;
};

export function useUpdateOrganization() {
  const queryClient = useQueryClient()

  return useMutation(
    async (data: UpdateOrgProps) => {
      return await putJSON(apiUrl(`/api/v1/organization/${data.id}`), data)
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData([apiUrl(`/api/v1/organization`)], data)
      }
    }
  )
}
