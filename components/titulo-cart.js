"use client";

import { useCart } from "react-use-cart";
import { Trash2 } from "lucide-react";
export default function TituloCart() {
  const { emptyCart } = useCart();
  return (
    <div className="mx-auto    w-full">
      <div className="flex justify-around p-10 z-[999] bg-black  w-full">
        {" "}
        <h1 className="text-3xl text-white font-bold  sm:text-4xl">Catalogo</h1>
        <button className="text-white  flex " onClick={() => emptyCart()}>
          <span className="mr-2"> Borrar Todo</span>
          <Trash2 />
        </button>
      </div>
    </div>
  );
}
