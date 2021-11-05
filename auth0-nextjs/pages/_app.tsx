import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
    </UserProvider>
  );
}
