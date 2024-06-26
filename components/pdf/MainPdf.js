"use client";
import PDF from "./Pdf";
import {PDFDownloadLink} from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

export default function MainPdf({ catalogo, cliente = false }) {
  const { items } = useCart();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <div>
        {isClient && (
          <PDFDownloadLink
            document={<PDF catalogo={catalogo} items={items} cliente={cliente}/>}
            fileName={`${catalogo.name}.pdf`}
          >
            {({ loading, url, error, blob }) =>
              loading ? (
                <div className="fixed top-0 w-[100vw] bg-white/70 h-[100vh] z-[999] flex justify-center items-center">
                  <div className="flex items-center justify-center w-full h-full">
                    <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
                      <svg
                        fill="none"
                        className="w-6 h-6 animate-spin"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                          fill="currentColor"
                          fill-rule="evenodd"
                        />
                      </svg>

                      <div>Generando PDF ...</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-[50vh] w-[100vw] flex justify-center items-center">
                  <button>Descargar! </button>
                </div>
              )
            }
          </PDFDownloadLink>
        )}


          
      </div>
    </>
  );
}
