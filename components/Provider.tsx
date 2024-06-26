"use client";

import { SessionProvider } from "next-auth/react";
import { CartProvider } from "react-use-cart";

type Props = {
  children: React.ReactNode;
};

function AuthProvider({ children }: Props) {
  return (
    <CartProvider>
      <SessionProvider>{children}</SessionProvider>
    </CartProvider>
  );
}

export default AuthProvider;
