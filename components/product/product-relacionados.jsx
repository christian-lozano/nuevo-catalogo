import React, { useState } from "react";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

export default function ProductRelacionados({ products }) {
  const precio = products.priceecommerce;

  const operation = (Number(products.descuento) / 100) * Number(precio);
  const resultado = Number(precio) - operation;
  return (
    <>
      <Link
        key={products.id}
        href={`/products/${products.slug}/${products.sku}`}
        className="group z-10 text-sm"
      >
        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg    group-hover:opacity-75 ">
          {products.images && (
            <img
              width={800}
              height={800}
              className="relative "
              src={urlForImage(products.images[0].asset._ref).url()}
              alt=""
            />
          )}

          {products.descuento && (
            <div className="absolute right-0 top-4 bg-black px-3 py-1">
              <h4 className=" mt-1 text-xs text-white ">
                -{products.descuento}%
              </h4>
            </div>
          )}
        </div>
        <h3 className="mt-4 font-medium capitalize ">
          {products.marca} - {products.genero}
        </h3>
        <h3 className="mt-4 font-medium uppercase ">{products.name}</h3>

        <div className="flex">
          <span className="mr-2 mt-2 font-semibold text-[#767677] line-through">
            S/{products.priceecommerce}
          </span>
          <p className="mt-2 font-semibold">S/{resultado.toFixed(2)} </p>
        </div>
        {/* <p className="mt-2 font-medium">S/{products.descuento}</p> */}
      </Link>
      {/* <button
        onClick={() => alert("producto")}
        className="button-0 absolute z-50 flex items-center justify-center rounded-full  text-center"
      >
        <svg
          className=" icon icon--plus"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.125 10.875V18H10.375V10.875H18V9.625H10.375V2H9.125V9.625H2V10.875H9.125Z"
          ></path>
        </svg>
      </button> */}
    </>
  );
}
