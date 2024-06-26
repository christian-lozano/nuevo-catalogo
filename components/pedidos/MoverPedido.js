"use client";

import { UpdateProductDevolver } from "@/actions/ProductosPagados/getProductosPagados";
import { useRouter } from "next/navigation";

export default function MoverPedido({ identidicador, text, value }) {
  const router = useRouter();
  const handleMover = async (id) => {
    if (confirm(`Desea Guardar los cambios?`)) {
      try {
        let resultado = await UpdateProductDevolver(id, value);

        console.log(resultado);
        router.refresh();
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <button
      onClick={() => handleMover(identidicador)}
      className=" mr-2 2xl:text-md xl:text-xs font-bold text-white bg-gray-700 rounded-full xl:px-2 2xl:px-5 px-5 py-2 hover:bg-gray-800"
    >
      {text}
    </button>
  );
}
