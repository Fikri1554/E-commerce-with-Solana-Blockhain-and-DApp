import { PropsWithChildren } from "react";

export default function SiteHeading({ children }: PropsWithChildren<{}>) {
  return <h1 className="text-5xl my-8 font-extrabold self-center text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">{children}</h1>
}
