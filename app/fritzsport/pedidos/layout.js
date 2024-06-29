import NavPedidos from "@/components/pedidos/NavPedidos";


import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <NavPedidos>{children}</NavPedidos>
    </div>
  );
}
