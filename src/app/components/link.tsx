import Link from "next/link";
import React, { FC, ReactNode } from "react";

type TLinkWrapper = {
  children: ReactNode;
  href: string;
  key?: string | number;
};
const LinkWrapper: FC<TLinkWrapper> = ({ children, href, key }) => {
  return (
    <Link href={href} key={key} style={{ textDecoration: "none" }}>
      {children}
    </Link>
  );
};

export default LinkWrapper;
