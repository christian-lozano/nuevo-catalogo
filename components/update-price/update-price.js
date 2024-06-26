"use client";
import { client } from "@/sanity/lib/client";
import pThrottle from "p-throttle";
import React, { useState } from "react";
import * as XLSX from "xlsx";

function ExcelToJsonConverter() {
  const [file, setFile] = useState(null);
  const [jsonData, setJsonData] = useState([]);
  const [productosActualizado, setProductosActualizado] = useState([]);

  const handleConvert = async () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        // setJsonData(JSON.stringify(json, null, 2));
        const res = await fetch(`/api/actualizar-precio`, {
          method: "POST",
          body: JSON.stringify(json, null, 2),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Access-Control-Allow-Headers": "*",
          },
        });

        if (res.status === 200) {
          const deta = await res.json();

          const throttle = pThrottle({
            limit: 20,
            interval: 1000,
            onDelay: () => {
              console.log("Reached interval limit, call is delayed");
            },
          });

          const throttledD = async (dt) => {
            await dt.map((el) => {
              console.log(el);
              const doc = {
                _id: el.sku,
                _type: "test",
                name: "test3",
                sku: "5445asdaaaa test",
                tipo: "ropa",
              };
              client.createOrReplace(doc).then((res) => {
                console.log(`Bike was created, document ID is ${res._id}`);
              });
            });

            throttle(() => {
              console.log("Executing...");
            });
          };

          let batch = [];

          for (let i = 0; i < deta.data.length; i++) {
            batch.push(deta.data[i]);
            if (
              batch.length === 10 ||
              (i === deta.data.length - 1 && batch.length > 0)
            ) {
              throttledD(batch);
              batch = [];
            }
          }
          alert("productos actualizados");
          setProductosActualizado(deta.data);
          //   setFile(null);
          setJsonData([]);
          // setProductosActualizado(deta.data);
          // //   setFile(null);
          // setJsonData([]);

          // alert("Productos Actualizados Exitosamente");
        } else {
          alert("Ocurrio un Error Actualize la pagina e intenta Nuevamente");
        }
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div>
      {/* <!-- component File --> */}
      <div className="flex flex-col justify-center items-center">
        <main className="flex mt-20 items-center justify-center bg-gray-100 font-sans">
          <section>
            <label
              htmlFor="dropzone-file"
              className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>

              <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">
                Actualizar Precios de Productos
              </h2>

              <p className="mt-2 text-gray-500 tracking-wide">
                Sube tu archivo .EXE.
              </p>

              <input
                type="file"
                accept=".xls,.xlsx"
                onChange={(e) => setFile(e.target.files[0])}
                id="dropzone-file"
                className="hidden"
              />
            </label>
          </section>
        </main>
        <div className="mt-10">
          <button
            disabled={file === null ? true : false}
            className={`${
              file === null ? "bg-slate-400 cursor-no-drop" : "bg-black"
            } bg-black py-3 px-3 text-white`}
            onClick={handleConvert}
          >
            ACTUALIZAR
          </button>
        </div>
      </div>

      {/* 
      <input
        type="file"
        accept=".xls,.xlsx"
        onChange={(e) => setFile(e.target.files[0])}
      /> */}

      {/*  */}
      {productosActualizado?.length > 0 && (
        <div className="flex justify-center items-center flex-col mt-20">
          <div className="font-extrabold text-xl">PRODUCTOS ACTUALIZADOS:</div>
          <div className="w-full flex justify-center">
            <div className="flex flex-col container">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-center">
                      <thead className="border-t-[1px] border-x-[1px] border-black">
                        <tr>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4"
                          >
                            SKU
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 border-l-[1px] border-black  "
                          >
                            PRECIO
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 border-l-[1px] border-black  "
                          >
                            STOCK
                          </th>
                          <th
                            scope="col"
                            className="text-sm uppercase font-medium text-gray-900 px-6 py-4 border-l-[1px] border-black  "
                          >
                            Tipo de Producto
                          </th>
                        </tr>
                      </thead>
                      <tbody className="border-t-[1px] border-x-[1px] border-black">
                        {productosActualizado?.map((el, i) => (
                          <tr
                            key={i}
                            className="border-b bg-gray-800 boder-gray-900"
                          >
                            <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                              {el.sku}
                            </td>
                            <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap border-l-[1px] border-white">
                              {el.precio && <>S/ {el.precio}</>}
                            </td>
                            <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap border-l-[1px] border-white">
                              {el.stock && <>S/ {el.stock}</>}
                            </td>
                            <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap border-l-[1px] border-white">
                              {el.tipoproducto && <>S/ {el.tipoproducto}</>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*  */}

      {/* <pre className="grid grid-cols-2">
        <div className="w-full flex justify-center">
          <div>SKU</div>
          <div>PRECIO</div>
        </div>
        {productosActualizado?.map((el) => (
          <div className="flex gap-x-3">
            <div>{el.sku}</div>
            <div>{el.precio}</div>
          </div>
        ))}
      </pre> */}
    </div>
  );
}

export default ExcelToJsonConverter;

