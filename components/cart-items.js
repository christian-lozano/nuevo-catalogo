"use client";

import { useEffect, useState } from "react";
import { urlForImage } from "@/sanity/lib/image";
import { X } from "lucide-react";
import { useCart } from "react-use-cart";

import { Input } from "@/components/ui/input";
import { CartItemsEmpty } from "@/components/cart-items-empty";

export function CartItems() {
  const articlesShown = 6;
  const [loadMore, setLoadMore] = useState(articlesShown);
  const showMoreArticles = () => {
    setLoadMore(loadMore + articlesShown);
  };
  const [clientState, setClientState] = useState(false);
  useEffect(() => {
    setClientState(true);
  }, []);

  const { items, removeItem } = useCart();
  const [buscador, setBuscador] = useState("");

  const [resultados, setResultados] = useState([]);
  useEffect(() => {
    if (buscador.length != "") {
      setResultados(items.filter((el) => el.products.sku === buscador));
    } else {
      setResultados(items);
    }
  }, [buscador]);

  return (
    <>
      <div class="w-full">
        <input
          type="search"
          class="w-full px-4 py-2 text-gray-800 border-[1px] border-black focus:outline-none"
          placeholder="Buscar productos por SKU"
          x-model="search"
          onChange={(e) => setBuscador(e.target.value)}
        />
      </div>
      {clientState && (
        <>
          {resultados.length === 0 && <CartItemsEmpty />}

          <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-500 dark:border-gray-500 grid grid-cols-2">
            {resultados.slice(0, loadMore).map((el) => (
              <div key={"key"} className="flex py-6 sm:py-10 ">
                <div className="shrink-0">
                  {/* <Image
               src={urlForImage(el.image).url()}
                alt={"alt"}
                           width={150}
  
                height={0}
                className="h-24 w-24 rounded-md border-2 border-gray-200 object-cover object-center dark:border-gray-800 sm:h-48 sm:w-48"
              /> */}
                                                 


  
                  {el.products.imgcatalogomain !== null && (
                    <img
                      className="h-24 w-24 rounded-md border-2 border-gray-200 object-cover object-center dark:border-gray-800 sm:h-48 sm:w-48"
                    src={el.products.imgcatalogomain.asset !== undefined &&
                        urlForImage(el.products.imgcatalogomain?.asset._ref).url()
                      }
                      width={150}
                      alt="Polaroid camera"
                    />
                  )}

                <span className="py-2 text-sm">Imagen Ecommerce:</span>
                 {el.products.images !== null && (
                    <img
                      
                    src={el.products.images[0].asset !== undefined &&
                        urlForImage(el.products.images[0]?.asset._ref).url()
                      }
                      width={50}
                      height={50}
                      alt="Polaroid camera"
                    />
                  )}
                </div>

                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div className="relative justify-between pr-9 sm:flex sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm">{el.products.name}</h3>
                      </div>
                      <div className="flex justify-between font-bold">
                        <h4 className="text-sm">sku: {el.products.sku}</h4>
                      </div>
              <p className="mt-1 text-sm font-extrabold">
                        Precio Retail: <br /> S/
                        {el.priceecommerceSinDesc &&
                          el.priceecommerceSinDesc.toFixed(2)}
                      </p>
                      {el.tipoprecio === "emprendedor" ? (
                        <p className="mt-1 text-sm font-extrabold">
                          Precio Emprendedor: S/
                          {el.precioSinDescuento &&
                            el.precioSinDescuento.toFixed(2)}
                        </p>
                      ) : (
                        <p className="mt-1 text-sm font-medium">
                          Precio Mayorista: S/
                          {el.precioSinDescuento &&
                            el.precioSinDescuento.toFixed(2)}
                        </p>
                      )}

                      <p className="mt-1 text-sm font-medium">
                        Categoria:
                        {el.products.categories ? el.products.categories : ""}
                      </p>
                      <p className="mt-1 text-sm font-medium">
                        Genero: {el.products.genero}
                      </p>

                      <p className="mt-1 text-sm font-medium">
                        Talla: {/* @ts-ignore */}
                        <strong>{el.products.tallascatalogo}</strong>
                      </p>
                      <p className="mt-1 text-sm font-extrabold">
                        Precio Retail con descuento: S/
                        {el.priceecommerce && el.priceecommerce.toFixed(2)}
                      </p>
                      {el.tipoprecio === "emprendedor" ? (
                        <p className="mt-1 text-sm font-extrabold">
                          Precio Emprendedor con descuento: S/
                          {el.pricemayorista && el.pricemayorista.toFixed(2)}
                        </p>
                      ) : (
                        <p className="mt-1 text-sm font-extrabold">
                          Precio Mayorista con descuento: S/
                          {el.pricemayorista && el.pricemayorista.toFixed(2)}
                        </p>
                      )}

                      {el.descuentoRetail && (
                        <p className="mt-1 text-sm font-medium">
                          Desc Retail: {/* @ts-ignore */} <br />
                          <strong>{el?.descuentoRetail}%</strong>
                        </p>
                      )}
                      {el.tipoprecio === "emprendedor" ? (
                        <>
                          {el.descuentoEmprendedor && (
                            <p className="mt-1 text-sm font-medium">
                              Desc Emprendedor: {/* @ts-ignore */} <br />
                              <strong>{el?.descuentoEmprendedor}%</strong>
                            </p>
                          )}
                        </>
                      ) : (
                        <>
                          {el.descuentoMayorista && (
                            <p className="mt-1 text-sm font-medium">
                              Desc Mayorista: {/* @ts-ignore */} <br />
                              <strong>{el?.descuentoMayorista}%</strong>
                            </p>
                          )}
                        </>
                      )}
                    </div>

                    <div className="mt-4 flex items-center  sm:mt-0 sm:pr-9">
                  
                      <div className=" right-0 top-0  ">
                        <button
                          onClick={() => removeItem(el.id)}
                          className="-mr-2 inline-flex p-2"
                        >
                          <span className="sr-only">Remove</span>
                          <X className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <p className="mt-4 flex space-x-2 text-sm">
                  <Clock className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>Se envía en 1 semana</span>
                </p> */}
                  <p className="mt-4 flex space-x-2 text-sm">
                    {/* <span>Precio total: S/{el.itemTotal.toFixed(2)} </span> */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="flex justify-center">
        {loadMore < resultados?.length ? (
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
      {clientState && (
        <div className="mt-5 flex justify-center">
          {loadMore} de {resultados?.length} Productos
        </div>
      )}
    </>
  );
}
