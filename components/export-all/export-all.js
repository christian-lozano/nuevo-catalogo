import React, { useState } from "react";
import useLocalStorage from "@/app/hooks/localStorage";
import { precioProduct } from "@/config/precio-product";
import { useCart } from "react-use-cart";
export default function ExportAll({ products, tipoprecio }) {
  const [emprendedor, setEmprendedor] = useLocalStorage("emprendedor", "");
  const [mayorista, setMayorista] = useLocalStorage("mayorista", "");
  const [retail, setRetail] = useLocalStorage("retail", "");
  const { addItem } = useCart();
  const [descuentoEmprendedor, setDescuentoEmprendedor] = useState(emprendedor);
  const [descuentoMayorista, setDescuentoMayorista] = useState(mayorista);
  const [descuentoRetail, setDescuentoRetail] = useState(retail);

  const saveToLocalStorage = (e) => {
    e.preventDefault();
    setEmprendedor(descuentoEmprendedor);
    setMayorista(descuentoMayorista);
    setRetail(descuentoRetail);

    alert("Cambios Guardados Exitosamente");
  };
  const addToCatalogo = () => {
    // test
    
    // toast({
    //   title: `${products.name})`,
    //   description: "Producto Agregado al Catalogo",
    //   action: (
    //     <Link href={"/catalogo"}>
    //       <Button variant={"link"} className="gap-x-5 whitespace-nowrap">
    //         <span>Ver Catalogo Editable</span>
    //         <ArrowRight className="h-5 w-5" />
    //       </Button>
    //     </Link>
    //   ),
    // });
    products
      .filter((product) => product.stock > 0)
      .map((products) =>
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
          ? precioProduct(emprendedor, products.priceecommerce)
          : precioProduct(mayorista, products.priceecommerce),
        })
      );
  };
  return (
    <div className="flex w-full justify-center items-center p-5  flex-col ">
      <div className="container mx-auto w-2/3 flex flex-col gap-y-5 mb-20">
        <form onSubmit={saveToLocalStorage} className="gap-y-5 flex-col flex">
          <div className="py-5 text-center uppercase">
            Descuentos
          </div>
          <div class="relative h-10 w-full min-w-[200px]">
            <input
              onChange={(e) => setDescuentoEmprendedor(e.target.value)}
              onWheel={(event) => event.currentTarget.blur()}
              class="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              type="number"
              value={descuentoEmprendedor}
            />
            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gborder-gray-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Emprendedor
            </label>
          </div>
          <div class="relative h-10 w-full min-w-[200px]">
            <input
              onChange={(e) => setDescuentoMayorista(e.target.value)}
              class="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              onWheel={(event) => event.currentTarget.blur()}
              type="number"
              value={descuentoMayorista}
            />
            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gborder-gray-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Mayorista
            </label>
          </div>
          <div class="relative h-10 w-full min-w-[200px]">
            <input
              onChange={(e) => setDescuentoRetail(e.target.value)}
              class="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              onWheel={(event) => event.currentTarget.blur()}
              type="number"
              value={descuentoRetail}
            />
            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gborder-gray-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Retail
            </label>
          </div>
          <div className="flex w-full justify-center">
            <button className="uppercase bg-slate-700 text-white p-1 rounded-sm">
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
      <button
        className="uppercase bg-black text-white p-3  rounded-none"
        onClick={addToCatalogo}
      >
        Agregar Todo
      </button>
    </div>
  );
}
