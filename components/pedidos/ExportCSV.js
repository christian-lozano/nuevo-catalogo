import React from "react";

import FileSaver from "file-saver";
import * as XLSX from "xlsx";

const ExportCSV = ({ csvData, fileName, wscols }) => {
  // ******** XLSX with object key as header *************
  // const fileType =
  //   "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  // const fileExtension = ".xlsx";

  // const exportToCSV = (csvData, fileName) => {
  //   const ws = XLSX.utils.json_to_sheet(csvData);
  //   const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
  //   const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  //   const data = new Blob([excelBuffer], { type: fileType });
  //   FileSaver.saveAs(data, fileName + fileExtension);
  // };

  // ******** XLSX with new header *************
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const Heading = [
    {
      nombres: "nombres",
      apellidos: "apellidos",
      cart_total: "Monto Total",
      tipoEntrega: "Tipo de entrega",
      telefono: "Teléfono",
      _updatedAt: "_updatedAt",
    },
  ];

  const exportToCSV = (csvData, fileName, wscols) => {
    const ws = XLSX.utils.json_to_sheet(Heading, {
      header: ["nombres", "apellidos"],
      skipHeader: true,
      origin: 0, //ok
    });
    ws["!cols"] = wscols;
    XLSX.utils.sheet_add_json(ws, csvData, {
      header: ["nombres", "apellidos"],
      skipHeader: true,
      origin: -1, //ok
    });
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <div className="w-full flex justify-center sticky top-0 my-2">
      <button
        className="bg-black text-white p-3"
        variant="warning "
        onClick={(e) => exportToCSV(csvData, fileName, wscols)}
      >
        Exportar Excel
      </button>
    </div>
  );
};

export default ExportCSV;
