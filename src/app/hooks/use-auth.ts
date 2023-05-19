import { ChangeEvent, FormEvent, useState } from "react";
import { signUp } from "../api/auth";
import { errorToast, successToast } from "../utils/toast";

interface ISignupValues {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  confirm_success_url: string;
}

const useAuth = (initialValues: ISignupValues) => {
  const [signupValues, setSignupValues] =
    useState<ISignupValues>(initialValues);

  const onSignupValuesChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    setSignupValues((prev) => ({ ...prev, [name]: value }));
  };

  const register = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const { data } = await signUp<ISignupValues>(signupValues);
      successToast("User signed up successfully");
    } catch (error: any) {
      errorToast(error.response.data.errors.full_messages.join());
    }
  };

  return {
    signupValues,
    onSignupValuesChange,
    register,
  };
};

export default useAuth;
