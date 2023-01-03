export type TransformedFile = {
    id: string;
    raw: File;
    key: string | null;
    type: string;
    preview_file_path: string | null;
    error: Error | null;
}

export interface PresignedPostFields {
    acl: string;
    content_type: string;
    expires: string;
    key: string;
    policy: string;
    success_action_status: string;
    url: string;
    x_amz_algorithm: string;
    x_amz_credential: string;
    x_amz_date: string;
    x_amz_signature: string;
}
