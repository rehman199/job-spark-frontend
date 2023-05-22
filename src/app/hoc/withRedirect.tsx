"use client";
import { useRouter } from "next/navigation";
import { authCookiesArePresent } from "../utils/cookies-helper";
import Loader from "../components/loading";

export default function withRedirect<T>(Component: React.ComponentType<T>) {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    const { push } = useRouter();

    if (authCookiesArePresent()) {
      // TODO: Give appropriate constant path to push function later
      push("/jobs");
      return <Loader loading />;
    }

    return <Component {...props} />;
  };
}
