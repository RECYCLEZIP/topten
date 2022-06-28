import { toast } from "react-toastify";

export const customTostify = (type: string, message: string) => {
  if (type === "success") toast.success(message);
  if (type === "error") toast.error(message);
  if (type === "warn") toast.warn(message);
};
