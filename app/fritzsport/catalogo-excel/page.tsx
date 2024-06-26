"use client";
import React, { useEffect, useState } from "react";

import Customers from "./Customers";
import ExportCSV from "./ExportCSV";
import ExportReactCSV from "./ExportReactCSV";
import { useCart } from "react-use-cart";
import { urlForImage } from "@/sanity/lib/image";

// generate customer objects

const App = () => {
  const { items, removeItem } = useCart();

  let resultado = items.map((el) => {
    let data = {
      sku: el.products?.sku,
    imgcatalogomain: el.products?.imgcatalogomain && urlForImage(el.products.imgcatalogomain.asset._ref).url(),
      genero: el.products?.genero,
      name: el.products?.name,
      priceemprendedor: el.products?.priceemprendedor,
      pricemayorista: el.products?.pricemayorista,
      razonsocial: el.products?.razonsocial,
      tallascatalogo: el.products?.tallascatalogo,
      marca: el.products?.marca,
      priceecommerce: el.products?.priceecommerce,
      tipoproducto: el.products?.tipoproducto,
      preciomanual: el.products?.preciomanual,
      
    };

    return data;
  });

  const [customers, setCustomers] = useState(resultado);

  const headers = [
    { label: "sku", key: "sku" },
    { label: "genero", key: "genero" },
    { label: "name", key: "name" },
    { label: "priceecommerce", key: "priceecommerce" },
    { label: "priceemprendedor", key: "priceemprendedor" },
    { label: "pricemayorista", key: "pricemayorista" },
    { label: "tipoproducto", key: "tipoproducto" },
    { label: "preciomanual", key: "preciomanual" },
    
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
      wch: Math.max(
        ...customers.map(
          (customer) => customer.sku != null && customer.sku.length
        )
      ),
    },
    {
      wch: Math.max(
        ...customers.map(
          (customer) => customer.genero != null && customer.genero.length
        )
      ),
    },
    {
      wch:
        Math.max(
          ...customers.map(
            (customer) => customer.name != null && customer.name.length
          )
        ) + 3,
    },

    {
      wch: Math.max(
        ...customers.map(
          (customer) =>
            customer.priceecommerce != null && customer.priceecommerce.length
        )
      ),
    },
    {
      wch: Math.max(
        ...customers.map(
          (customer) =>
            customer.priceemprendedor != null &&
            customer.priceemprendedor.length
        )
      ),
    },
    {
      wch: Math.max(
        ...customers.map(
          (customer) =>
            customer.pricemayorista != null && customer.pricemayorista.length
        )
      ),
    },
    {
      wch: Math.max(
        ...customers.map((customer) => customer.razonsocial.length)
      ),
    },
    {
      wch: Math.max(
        ...customers.map(
          (customer) =>
            (customer.tallascatalogo != null &&
              customer.tallascatalogo.length) ||
            customer.marca.length
        )
      ),
    },
    {
      wch: Math.max(
        ...customers.map(
          (customer) => customer.marca != null && customer.marca.length
        )
      ),
    },
    {
      wch: Math.max(
        ...customers.map(
          (customer) =>
            customer.tipoproducto != null && customer.tipoproducto.length
        )
      ),
    },
        {
      wch: Math.max(
        ...customers.map(
          (customer) =>
            customer.preciomanual != null && customer.preciomanual.length
        )
      ),
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
                csvData={resultado}
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
          <Customers customers={customers} />
        </div>
      )}
    </>
  );
};

export default App;

