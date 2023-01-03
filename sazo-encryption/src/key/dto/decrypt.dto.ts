export class DecryptDto {
  cid: string;
  message: [Message];
}

export interface Message {
  id: number;
  content: string;
  created_at: string;
  updated_at: string;
  chat_id: string;
  author_id: string;
}
