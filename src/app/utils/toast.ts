import { toast } from "react-hot-toast";

type TMakeToastInput = {
  message: string;
  type: "success" | "error";
};

export const makeToast = ({ message, type }: TMakeToastInput): void => {
  toast[type](message);
};

export const successToast = (message: string): string => toast.success(message);

export const errorToast = (message: string): string => toast.error(message);
