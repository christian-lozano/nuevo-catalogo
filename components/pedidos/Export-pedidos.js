"use client";
import React, { useEffect, useState } from "react";

import ExportCSV from "./ExportCSV";

// generate customer objects

const ExportPedidos = ({ data }) => {
  let resultado = data.map((el) => {
    let data = {
      nombres: el.nombres,
      apellidos: el.apellidos,
      total: el.cart_total,
      _rev: el._rev,
      tipoEntrega: el.tipoEntrega,
      telefono: el.telefono,
      _updatedAt: el._updatedAt,
    };

    return data;
  });

  const [customers, setCustomers] = useState(resultado);

  const headers = [
    { label: "nombres", key: "nombres" },
    { label: "apellidos", key: "apellidos" },
    { label: "Monto Total", key: "cart_total" },
    { label: "Tipo de entrega", key: "tipoEntrega" },
    { label: "Teléfono", key: "telefono" },
    { label: "_updatedAt", key: "_updatedAt" },
  ];

  // function customersData() {
  //   const custs = [];

  //   for (let i = 0; i <= items.length; i++) {
  //     custs[i] = {
  //       firstName: `${i}`,
  //       lastName: `lastname${i}`,
  //       email: `mail${i}@mail.com`,
  //       address: `#${i}, block name, floor #${i} street name, city name, state name`,
  //       postcode: `${i}0000`,
  //     };
  //   }
  //   return custs;
  // }

  const wscols = [
    {
      wch: Math.max(...data.map((customer) => customer.nombres.length)),
    },
    {
      wch: Math.max(...data.map((customer) => customer.apellidos.length)),
    },
    {
      wch: Math.max(...data.map((customer) => customer.cart_total.length)),
    },
    {
      wch: Math.max(...data.map((customer) => customer.tipoEntrega.length)),
    },
    {
      wch: Math.max(...data.map((customer) => customer.telefono.length)),
    },
    {
      wch: Math.max(...data.map((customer) => customer._updatedAt.length)),
    },
  ];

  // console.log(
  //   Math.max(...customers.map((customer) => customer.address.length))
  // );
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <>
      {client && (
        <div className="App">
          <div className="row">
            <div className="col-md-4 center ">
              <ExportCSV
                csvData={data}
                fileName="catalogo_fritz_sport"
                wscols={wscols}
              />
              {/* <ExportReactCSV
            csvHeaders={headers}
            csvData={customersData()}
            fileName="Customers_Infomations_csv.csv"
          /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExportPedidos;
