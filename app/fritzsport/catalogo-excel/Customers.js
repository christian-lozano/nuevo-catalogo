import React from "react";

// 3. create customers table component
const Customers = ({ customers }) => {
  // table header
  const TableHeader = (
    <thead class="bg-black flex text-white w-full sticky top-32">
      <tr class="flex w-full mb-4 ">
        <th class="p-4 w-1/4">#</th>
        <th class="p-4 w-1/4">Sku</th>
        <th class="p-4 w-1/4">Image</th>
        <th class="p-4 w-1/4">Nombre</th>
        <th class="p-4 w-1/4">Genero</th>
        <th class="p-4 w-1/4">P.Retail</th>

        <th class="p-4 w-1/4">P.Emprendedor</th>
        <th class="p-4 w-1/4">P.Mayorista</th>
        <th class="p-4 w-1/4">R. Social</th>

        <th class="p-4 w-1/4">Tallas</th>
        <th class="p-4 w-1/4">Marca</th>
        <th class="p-4 w-1/4">Tipo De Producto</th>
        <th class="p-4 w-1/4">Precio Manual</th>
    
      </tr>
    </thead>
  );

  // table row construction
  const CustomerRow = (customer, index) => (
    <tr key={index} class="flex w-full mb-4">
      <td class="p-4 w-1/4 border-b-[1px] border-slate-500">{index + 1}</td>
      <td class="p-4 w-1/4 border-b-[1px] border-slate-500">{customer.sku}</td>
      <td class="p-4 w-1/4 border-b-[1px] border-slate-500  ">
        {customer.imgcatalogomain && "URL IMAGE"}
      </td>
      <td class="p-4 w-1/4 border-b-[1px] border-slate-500 ">
        {customer.name}
      </td>
      <td class="p-4 w-1/4 border-b-[1px] border-slate-500">
        {customer.genero}
      </td>
      <td class="p-4 w-1/4 border-b-[1px] border-slate-500">
        S/{customer.priceecommerce}
      </td>
      <td class="p-4 w-1/4 border-b-[1px] border-slate-500">
        S/{customer.priceemprendedor}
      </td>
      <td class="p-4 w-1/4 border-b-[1px] border-slate-500">
        S/{customer.pricemayorista}
      </td>
      <td class="p-4 w-1/4 border-b-[1px] border-slate-500">
   {String(customer.razonsocial)}
      </td>
      <td class="p-4 w-1/4 border-b-[1px] border-slate-500">
        {customer.tallascatalogo}
      </td>
      <td class="p-4 w-1/4 border-b-[1px] border-slate-500">
        {customer.marca}
      </td>
      <td class="p-4 w-1/4 border-b-[1px] border-slate-500">
        {customer.tipoproducto}
      </td>
      <td class="p-4 w-1/4 border-b-[1px] border-slate-500">
        {customer.preciomanual}
      </td>
    </tr>
  );

  // render customers's items
  const CustomerTable = customers.map((cust, index) =>
    CustomerRow(cust, index)
  );

  return (
    <table class=" w-full text-center">
      {TableHeader}
      <tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full">
        {CustomerTable}
      </tbody>
    </table>
  );
};

export default Customers;
