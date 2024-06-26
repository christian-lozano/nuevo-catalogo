import React, { useEffect, useState } from "react";

import { urlForImage } from "@/sanity/lib/image";
import { useCart } from "react-use-cart";
import useLocalStorage from "@/app/hooks/localStorage";
import { precioProduct } from "@/config/precio-product";
export default function Product({ products, generoSku = false, tipoprecio }) {
  const [emprendedor, setEmprendedor] = useLocalStorage("emprendedor", "");
  const [mayorista, setMayorista] = useLocalStorage("mayorista", "");
  const [retail, setRetail] = useLocalStorage("retail", "");

  const [stock, setStock] = useState();
  const { addItem } = useCart();
  const [cliente, setCliente] = useState(false);
  useEffect(() => {
    setCliente(true);
    if (!products.tallas) {
      setStock(false);
    } else {
      setStock(products.tallas.every((el) => el.stock === 0));
    }
  }, []);

  const addToCart = () => {
    console.log(retail);
    addItem({
      id: products._id,
      price: products.price,
      products,
      tipoprecio: tipoprecio,
      priceecommerce: precioProduct(retail, products.priceecommerce),
      priceecommerceSinDesc: products.priceecommerce,
      precioSinDescuento:
        tipoprecio === "emprendedor"
          ? products.priceemprendedor
          : products.pricemayorista,
      descuentoEmprendedor: emprendedor,
      descuentoMayorista: mayorista,
      descuentoRetail: retail,
      pricemayorista:
        tipoprecio === "emprendedor"
          ? emprendedor
            ? precioProduct(emprendedor, products.priceecommerce)
            : products.priceemprendedor
          : mayorista
          ? precioProduct(mayorista, products.priceecommerce)
          : products.pricemayorista,
    });
  };

  return (
    <>
      <div className="p-1 border-[1px] border-gray-300">
        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg     group-hover:opacity-75 ">
          {products.imgcatalogomain && (
            <img
              width={2000}
              height={2000}
              className="relative"
              src={urlForImage(
                products.imgcatalogomain && products.imgcatalogomain?.asset._ref
              ).url()}
              alt=""
            />
          )}

          {products.images && (
            <img
              width={100}
              height={100}
              className="relative"
              src={urlForImage(
                products.images && products.images[0]?.asset._ref
              ).url()}
              alt=""
            />
          )}

          {products.descuento && (
            <div className="absolute right-0 top-4 bg-black px-3 py-1">
              <div className=" mt-1 text-xs text-white ">
                {stock ? (
                  <div>Agotado</div>
                ) : (
                  <span> -{products.descuento} %</span>
                )}
              </div>
            </div>
          )}
        </div>
        {generoSku && (
          <div className="flex items-center justify-between ">
            <h2 className="mt-4 font-medium capitalize">
              {products.marca} - {products.genero}
            </h2>
            <h5 className="mt-4 text-xs font-medium">Sku: {products.sku}</h5>
          </div>
        )}
        <h3 className="mt-2 text-sm font-extrabold uppercase xl:text-base">
          {products.name}
        </h3>
        <h3 className="mt-2 text-sm font-medium uppercase xl:text-sm">
          Categoría:{products.categories ? products.categories : ""}
        </h3>
        <p className="mt-2 font-semibold">
          Tallas:
          {products.tallascatalogo}
        </p>
        <div className="flex">
          {/* <span className="mr-2 mt-2 font-semibold text-[#767677] line-through">
            S/{products.priceecommerce}
          </span> */}
          <p className="mt-2 font-semibold">
            Precio Retail: S/
            {products.priceecommerce && products.priceecommerce.toFixed(2)}
          </p>
        </div>
        <p className="mt-2 font-semibold">
          Precio {tipoprecio === "emprendedor" ? "Emprendedor" : "Mayorista"}:
          S/
          {tipoprecio === "emprendedor"
            ? products.priceemprendedor && products.priceemprendedor.toFixed(2)
            : products.pricemayorista && products.pricemayorista.toFixed(2)}
        </p>
        <div
          className={`w-full flex justify-center mt-3 bg-black ${
            products.stock <= 0 ? "bg-slate-700" : "bg-black"
          } text-white`}
        >
          {cliente && (
            <button
              type="button"
              className="w-full p-3"
              disabled={products.stock <= 0}
              onClick={addToCart}
            >
              {products.stock <= 0 ? "Agotado" : "Agregar al Catalogo"}
            </button>
          )}
        </div>
      </div>

      {/* <p className="mt-2 font-medium">S/{products.descuento}</p> */}

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
