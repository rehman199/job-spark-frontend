import { ChangeEvent, FormEvent } from "react";

export interface ISigninValues {
  email: string;
  password: string;
}

export interface ISignupValues extends ISigninValues {
  name: string;
  password_confirmation?: string;
  confirm_success_url: string;
}

export interface IUseAuth {
  values: ISignupValues | ISigninValues;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent) => Promise<void>;
}

export interface IUseAuthProps {
  initialValues: ISignupValues | ISigninValues;
  formType: "register" | "login";
}
