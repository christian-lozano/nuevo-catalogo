"use client";

import { useState } from "react";
import { XCircle } from "lucide-react";

import { SanityProduct } from "@/config/inventory";

import Product from "./product/product";

import ExportAll from "./export-all/export-all";

interface Props {
  products: SanityProduct[];
  generoSku: boolean;
  tipoprecio: string | undefined;
}

export function ProductGrid({ products, generoSku, tipoprecio }: Props) {
  const articlesShown = 6;
  const [loadMore, setLoadMore] = useState(articlesShown);
  const showMoreArticles = () => {
    setLoadMore(loadMore + articlesShown);
  };
  if (products.length === 0) {
    return (
      <div className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
        <div>
          <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
          <h1 className="mt-2 p-5 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
            No se encontraron productos
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <ExportAll products={products} tipoprecio={tipoprecio}></ExportAll>
      <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
        {products.slice(0, loadMore).map((product, i) => (
          <Product
            key={i}
            products={product}
            generoSku={generoSku}
            tipoprecio={tipoprecio}
          />
        ))}
      </div>
      <div className="flex justify-center">
        {loadMore < products?.length ? (
          <button
            type="button"
            className="group relative overflow-hidden rounded-lg bg-black px-2 py-3 text-sm md:text-base mt-5"
            onClick={showMoreArticles}
          >
            <div className="duration-[350ms] absolute inset-0  w-3  bg-[var(--color-naranja)] transition-all ease-out group-hover:w-full"></div>
            <span className="relative text-white ">Ver Mas Productos</span>
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
        {loadMore} de {products?.length} Productos
      </div>
    </div>
  );
}
