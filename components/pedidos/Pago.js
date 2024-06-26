import { XCircle } from "lucide-react";
import ActivarVerPagos from "./ActivarVerPagos";
import VerProductoPedidos from "./VerProductoPedidos";
import distritos from "@/json/distritos.json";
import provincias from "@/json/provincias.json";
import departamentos from "@/json/departamentos.json";
import { useEffect, useState } from "react";
// import { urlForImage } from "@/sanity/lib/image";
export default function Pago({ product }) {
  const [allValues, setAllValues] = useState({
    departamento: product?.departamento,
    provincia: product?.provincia,
    distrito: product?.distrito,
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
    <>
      <tr
        key={product.id}
        className=" bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
      >
        <td className="px- py-3 text-sm">
          <div className="flex justify-center w-2/4 ">
            <ActivarVerPagos>
              <VerProductoPedidos productView={product}></VerProductoPedidos>
            </ActivarVerPagos>
          </div>
        </td>
        <td className="px-4 py-3">
          <div className="flex items-center text-sm">
            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
              <img
                className="object-cover w-full rounded-full"
                src={
                  product.productos[0].picture_url
                    ? product.productos[0].picture_url
                    : "http://via.placeholder.com/2000x2000"
                }
                alt="test"
                loading="lazy"
              />
              <div
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              ></div>
            </div>

            <div>
              <p className="font-semibold">{product.nombres}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {product.apellidos}
              </p>
            </div>
          </div>
        </td>

        <td className="px-4 py-3 text-sm">{product.telefono}</td>

        <td className="px-4 py-3 text-sm">{product.documento}</td>
        <td className="px-4 py-3 text-sm">{product.departamento}</td>
        <td className="px-4 py-3 text-sm">
          {departamento?.find((el) => el.id_ubigeo === product.provincia)
            ?.nombre_ubigeo
            ? departamento?.find((el) => el.id_ubigeo === product.provincia)
                ?.nombre_ubigeo
            : product.provincia}
        </td>
        <td className="px-4 py-3 text-sm">
          {provincia?.find((el) => el.id_ubigeo === product.distrito)
            ?.nombre_ubigeo
            ? provincia?.find((el) => el.id_ubigeo === product.distrito)
                ?.nombre_ubigeo
            : product.distrito}
        </td>

        <td className="px-4 py-3 text-xs">
          <span
            class={`px-2 py-1 font-semibold leading-tight   rounded-full dark:text-black  `}
          >
            {product.estado}
          </span>
        </td>
        <td className="px-4 py-3 text-sm">
          S/{Number(product.cart_total).toFixed(2)}
        </td>
        <td className="text-sm w-[10rem]">
          {product._createdAt.split("T")[0]}
        </td>
      </tr>
    </>
  );
}
