import type { ReactNode } from "react";

export function Head({ children }: { children: ReactNode }) {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {children}
    </>
  );
}
