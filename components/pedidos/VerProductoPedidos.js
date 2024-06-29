import MoverPedido from "./MoverPedido";
import distritos from "@/json/distritos.json";
import provincias from "@/json/provincias.json";
import departamentos from "@/json/departamentos.json";
import { useEffect, useState } from "react";

export default function VerPedidos({ productView }) {
  const [allValues, setAllValues] = useState({
    departamento: productView?.departamento,
    provincia: productView?.provincia,
    distrito: productView?.distrito,
  });
  const [ubigeoDepartamento, setUbigeoDepartamento] = useState(0);
  const [departamento, setDepartamento] = useState([]);
  const [provincia, setProvincia] = useState([]);

  useEffect(() => {
    let resultDep = departamentos?.find(
      (el) => el.nombre_ubigeo === `${allValues.departamento}`
    );
    let ubig = Number(resultDep?.id_ubigeo) + 1;

    setProvincia(distritos[String(ubig)]);
    let resultDepartamento = departamentos?.find(
      (el) => el.nombre_ubigeo === `${allValues.departamento}`
    );
    setUbigeoDepartamento(resultDepartamento?.id_ubigeo);
    setDepartamento(provincias[resultDepartamento?.id_ubigeo]);
    setProvincia(distritos[allValues?.provincia]);
  }, [
    allValues.departamento,
    ubigeoDepartamento,
    departamento,
    allValues.provincia,
  ]);

  return (
    <div className="border-b-2 block md:flex cursor-text w-3/4 h-3/4  z-[999]">
      <div className="relative w-full md:w-5/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
        <div className="flex justify-between">
          <span className="text-xl font-semibold block">Productos</span>
        </div>
        <span className="text-gray-600">Información de Productos</span>
        <div className="w-full p-8 mx-2 flex flex-col overflow-y-scroll h-3/4 ">
          {productView.productos.map((info) => (
            <div
              key={info.id}
              className="flex flex-col py-6  sm:flex-row sm:justify-between items-center"
            >
              <div className="flex w-full space-x-2 sm:space-x-4 items-center">
                <img
                  className="flex-shrink-0 object-cover w-24 h-24 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                  src={info.picture_url ? info.picture_url : ""}
                  alt="Polaroid camera"
                />
                <div className="flex justify-center items-center w-full h-full">
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <div className="2xl:text-lg xl:text-sm font-bold text-xs   sm:pr-8">
                          {info.name}
                        </div>
                        <div className="text-sm dark:text-gray-400">
                          <div className="text-sm font-bold">
                            Cantidad : ({info.cantidad})
                          </div>
                          <div className="text-sm font-bold">
                            Talla : {info.talla}
                          </div>
                          <div className="text-sm font-bold">
                            Sku : {info.sku}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="xl:text-lg text-base font-semibold">
                          S/{info.unit_price}
                        </span>
                      </div>
                    </div>
                    <div className="flex text-sm divide-x"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full absolute bottom-3">
          <div className="flex justify-around items-center w-full">
            <span className="text-xl font-semibold block">
              <span className="text-gray-600 font-normal">Total:</span> S/
              {productView.cart_total}
            </span>

            <div className=" flex justify-around">
              {(() => {
                switch (productView.estado) {
                  case "pagado":
                    return (
                      <>
                        <MoverPedido
                          value={"devuelto"}
                          text={"Devolver"}
                          identidicador={productView._id}
                        />
                        <MoverPedido
                          value={"porentrega"}
                          text={"Pedido Por Entregar"}
                          identidicador={productView._id}
                        />
                      </>
                    );

                  case "porentrega":
                    return (
                      <>
                        <MoverPedido
                          value={"entregado"}
                          text={"Pedido Entregado"}
                          identidicador={productView._id}
                        />
                      </>
                    );
                }
              })()}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-5/5 p-8 bg-white lg:ml-4 shadow-md">
        <div className="rounded  shadow p-6 overflow-y-scroll h-full">
          <div className="flex gap-1">
            <div className="pb-6 w-full">
              <label
                for="name"
                className="font-semibold text-gray-700 block pb-1"
              >
                Código de Pago
              </label>
              <div className="flex">
                <input
                  disabled
                  id="username"
                  className=" cursor-text border-[1px] border-gray-300  rounded-r px-4 py-2 w-full"
                  type="text"
                  value={productView.id_mercado_pago}
                />
              </div>
            </div>
            {productView.comprobante === "Factura" && (
              <div className="pb-4 w-full">
                <label
                  for="about"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  RUC
                </label>
                <input
                  disabled
                  id="email"
                  className="border-[1px] border-gray-300  cursor-text  rounded-r px-4 py-2 w-full"
                  type="email"
                  value={productView.ruc}
                />
              </div>
            )}
          </div>

          <div className="pb-4">
            <label
              for="about"
              className="font-semibold text-gray-700 block pb-1"
            >
              Razon Social
            </label>
            <input
              disabled
              id="email"
              className=" cursor-text border-[1px] uppercase font-bold border-gray-300  rounded-r px-4 py-2 w-full"
              type="email"
              value={productView.razon}
            />
          </div>

          <div className="pb-4">
            <label
              for="about"
              className="font-semibold text-gray-700 block pb-1"
            >
              Tipo de Entrega
            </label>
            <input
              disabled
              id="email"
              className=" cursor-text border-[1px] font-bold uppercase border-gray-300  rounded-r px-4 py-2 w-full"
              type="email"
              value={productView.tipoEntrega}
            />
          </div>
          <div className="pb-6">
            <label
              for="name"
              className="font-semibold text-gray-700 block pb-1"
            >
              Nombres
            </label>
            <div className="flex">
              <input
                disabled
                id="username"
                className=" cursor-text border-[1px] border-gray-300  rounded-r px-4 py-2 w-full"
                type="text"
                value={productView.nombres}
              />
            </div>
          </div>
          <div className="pb-6">
            <label
              for="name"
              className="font-semibold text-gray-700 block pb-1"
            >
              Apellidos
            </label>
            <div className="flex">
              <input
                disabled
                id="username"
                className=" cursor-text border-[1px] border-gray-300  rounded-r px-4 py-2 w-full"
                type="text"
                value={productView.apellidos}
              />
            </div>
          </div>
          <div className="pb-4">
            <label
              for="about"
              className="font-semibold text-gray-700 block pb-1"
            >
              Documento de Identidad
            </label>
            <input
              disabled
              id="email"
              className=" cursor-text border-[1px] border-gray-300  rounded-r px-4 py-2 w-full"
              type="email"
              value={productView.documento}
            />
          </div>
          <div className="pb-4">
            <label
              for="about"
              className="font-semibold text-gray-700 block pb-1"
            >
              Email
            </label>
            <input
              disabled
              id="email"
              className="border-[1px] border-gray-300 cursor-text  rounded-r px-4 py-2 w-full"
              type="email"
              value={productView.email}
            />
          </div>
          <div className="pb-4">
            <label
              for="about"
              className="font-semibold text-gray-700 block pb-1"
            >
              Teléfono
            </label>
            <input
              disabled
              id="email"
              className="border-[1px] border-gray-300  cursor-text  rounded-r px-4 py-2 w-full"
              type="email"
              value={productView.telefono}
            />
          </div>
          <div className="pb-4">
            <label
              for="about"
              className="font-semibold text-gray-700 block pb-1"
            >
              Departamento
            </label>
            <input
              disabled
              id="email"
              className="border-[1px] border-gray-300   cursor-text  rounded-r px-4 py-2 w-full"
              type="email"
              value={productView.departamento}
            />
          </div>
          <div className="pb-4">
            <label
              for="about"
              className="font-semibold text-gray-700 block pb-1"
            >
              Provincia
            </label>
            <input
              disabled
              id="email"
              className="border-[1px] border-gray-300  cursor-text  rounded-r px-4 py-2 w-full"
              type="email"
              value={
                departamento?.find(
                  (el) => el.id_ubigeo === productView.provincia
                )?.nombre_ubigeo
                  ? departamento?.find(
                      (el) => el.id_ubigeo === productView.provincia
                    )?.nombre_ubigeo
                  : productView.provincia
              }
            />
          </div>

          <div className="pb-4">
            <label
              for="about"
              className="font-semibold text-gray-700 block pb-1"
            >
              Distrito
            </label>
            <input
              disabled
              id="email"
              className="border-[1px] border-gray-300  cursor-text  rounded-r px-4 py-2 w-full"
              type="email"
              value={
                provincia?.find((el) => el.id_ubigeo === productView.distrito)
                  ?.nombre_ubigeo
                  ? provincia?.find(
                      (el) => el.id_ubigeo === productView.distrito
                    )?.nombre_ubigeo
                  : productView.distrito
              }
            />
          </div>

          <div className="pb-4">
            <label
              for="about"
              className="font-semibold text-gray-700 block pb-1"
            >
              Dirección
            </label>
            <input
              disabled
              id="email"
              className="border-[1px] border-gray-300  cursor-text  rounded-r px-4 py-2 w-full"
              type="email"
              value={productView.direccion}
            />
          </div>
          <div className="pb-4">
            <label
              for="about"
              className="font-semibold text-gray-700 block pb-1"
            >
              Información Adicional
            </label>
            <input
              disabled
              id="email"
              className="border-[1px] border-gray-300  cursor-text  rounded-r px-4 py-2 w-full"
              type="email"
              value={productView.info_adicional}
            />
          </div>
          <div className="pb-4">
            <label
              for="about"
              className="font-semibold text-gray-700 block pb-1"
            >
              Tipo de Comprobante
            </label>
            <input
              disabled
              id="email"
              className="border-[1px] border-gray-300  cursor-text  rounded-r px-4 py-2 w-full"
              type="email"
              value={productView.comprobante}
            />
          </div>

          <div className="pb-4">
            <label
              for="about"
              className="font-semibold text-gray-700 block pb-1"
            >
              Monto Total
            </label>
            <input
              disabled
              id="email"
              className="border-[1px] border-gray-300  cursor-text  rounded-r px-4 py-2 w-full"
              type="email"
              value={productView.cart_total}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
