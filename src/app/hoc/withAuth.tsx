"use client";
import { useRouter } from "next/navigation";
import * as React from "react";
import { authCookiesArePresent } from "../utils/cookies-helper";
import { LoginPath } from "../constants/routes";

export default function withAuth<T>(Component: React.ComponentType<T>) {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    const { push } = useRouter();

    if (!authCookiesArePresent()) {
      push(LoginPath);
      return null;
    }

    return <Component {...props} />;
  };
}
