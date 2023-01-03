import { CursorPagination } from "./api.types";

export interface NotificationPagination extends CursorPagination {
  data: Notification[];
}

export interface Notification {
  id: string;
  message: string;
  notification_type: string;
}
