import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PresignedPostFields, PresignedResource, TransformedFile } from "@sazo/types";
import Error from "next/error";
import { apiUrl, fetcher } from "../utils";

type PresignedProps = {
    file: TransformedFile;
    resource: PresignedResource;
};

type OnUpload = (
    file: TransformedFile,
    key: string | null,
    property?: string
) => void;

type OnError = (file: TransformedFile, error: Error) => void;

async function handleFile({ file, resource }: PresignedProps) {
    let url;

    if (resource === "User") {
        url = `/api/v1/user/me/avatar/presigned-fields`;
    } else if (resource === "Post") {
        url = `/api/v1/post/presigned-fields`;
    } else if (resource === "Organization") {
      url = `/api/v1/organization/presigned-fields`;
    }

    const params = new URLSearchParams();

    params.set("mime_type", file.type);

    const data = await fetcher<PresignedPostFields>(
        apiUrl(url as string, params)
    );
    const fields = data as PresignedPostFields;

    const formData = new FormData();

    formData.append("key", fields.key);
    // formData.append("expires", fields.expires);
    formData.append("policy", fields.policy);
    formData.append("success_action_status", fields.success_action_status);
    formData.append("x-amz-algorithm", fields.x_amz_algorithm);
    formData.append("x-amz-credential", fields.x_amz_credential);
    formData.append("x-amz-date", fields.x_amz_date);
    formData.append("x-amz-signature", fields.x_amz_signature);
    formData.append("file", file.raw);

    const result = await fetch(fields.url, {
        method: "POST",
        body: formData,
    });

    if (result?.ok) return fields.key;
    return null;
}

export function useFileUploadMutation(
  onUpload: OnUpload,
  onError: (file: TransformedFile, error: Error) => void,
  property?: string
) {
    return useMutation(async (data: PresignedProps) => await handleFile(data), {
        onSuccess(data, variables) {
            onUpload(variables.file, data, property);
        },
        onError(error, variables) {
            onError(variables.file, error as Error);
        },
    });
}
