import NavPedidos from "@/components/pedidos/NavPedidos";
import TablaPedidos from "@/components/pedidos/TablaPedidos";

import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <NavPedidos />
      <TablaPedidos>{children}</TablaPedidos>
    </div>
  );
}
