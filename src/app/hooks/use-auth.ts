import { ChangeEvent, FormEvent, useState } from "react";
import { errorToast, successToast } from "../utils/toast";
import { signIn, signUp } from "../api/auth";
import {
  ISigninValues,
  ISignupValues,
  IUseAuth,
  IUseAuthProps,
} from "../interfaces/use-auth";
import { useRouter } from "next/navigation";
import { LoginPath } from "../constants/routes";
import { SignupSuccess } from "../constants/messages";
import { useAppDispatch } from "./use-store";
import { addUser } from "../store/user";
import { useLoading } from "./use-loading";

const useAuth = ({ initialValues, formType }: IUseAuthProps): IUseAuth => {
  const [values, setValues] = useState<ISigninValues | ISignupValues>(
    initialValues
  );
  const { push } = useRouter();
  const loginUser = useAppDispatch();
  const { loading, setLoading } = useLoading();

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    setLoading(true);

    if (formType === "register") {
      try {
        await signUp<ISignupValues>(values as ISignupValues);
        successToast(SignupSuccess(values.email));
        await push(LoginPath);
      } catch (error: any) {
        debugger;
        errorToast(error?.response?.data?.errors?.full_messages?.join());
      }
    } else {
      try {
        const {
          data: { data },
        } = await signIn<ISigninValues>(values as ISigninValues);
        loginUser(addUser(data));
        // TODO: Give appropriate constant path to push function later
        await push("/");
      } catch (error: any) {
        errorToast(error?.response?.data?.errors);
      }
    }
    setLoading(false);
  };

  return {
    values,
    onChange,
    onSubmit,
    loading,
  };
};

export default useAuth;
