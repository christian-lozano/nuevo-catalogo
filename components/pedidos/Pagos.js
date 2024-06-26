"use client";

import { useEffect, useState } from "react";

import Pago from "./Pago";

// import { urlForImage } from "@/sanity/lib/image";
// test
export default function Pagos({ data }) {
  let hash = {};
  let pedidos = data.filter(function (current) {
    let exists = !hash[current.id_payer];
    hash[current.id_payer] = true;
    return exists;
  });

  const articlesShown = 10;
  const [loadMore, setLoadMore] = useState(articlesShown);
  const showMoreArticles = () => {
    setLoadMore(loadMore + articlesShown);
  };
  const [cliente, setCliente] = useState(false);
  useEffect(() => {
    setCliente(true);
  }, []);

  return (
    <>
      {pedidos.slice(0, loadMore).map((el, i) => (
        <Pago key={i} product={el} />
      ))}
      <tr>
        <td>
          <div className="flex flex-col w-[95%] justify-center absolute">
            <div className="flex justify-center">
              {loadMore < pedidos?.length ? (
                <button
                  type="button"
                  className="group relative overflow-hidden rounded-lg bg-black px-2 py-3 text-sm md:text-base mt-5"
                  onClick={showMoreArticles}
                >
                  <div className="duration-[350ms] absolute inset-0  w-3  bg-[var(--color-naranja)] transition-all ease-out group-hover:w-full"></div>
                  <span className="relative text-white ">Ver Mas Pedidos</span>
                </button>
              ) : (
                <button
                  type="button"
                  className="cursor-not-allowed rounded-lg bg-[var(--color-naranja)] px-2 py-3 text-sm text-[#FFF] opacity-50 md:text-base"
                  onClick={showMoreArticles}
                  disabled
                >
                  Todos los productos cargados
                </button>
              )}
            </div>
            <div className="mt-5 flex justify-center">
              {loadMore} de {pedidos?.length} pedidos
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}
