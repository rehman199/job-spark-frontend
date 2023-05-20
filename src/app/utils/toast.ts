import { toast } from "react-hot-toast";

export const successToast = (message: string): string =>
  toast.success(message, { duration: 5000 });

export const errorToast = (message: string): string =>
  toast.error(message || "Error", { duration: 5000 });
