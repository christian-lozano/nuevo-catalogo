"use client";

import { useEffect, useState } from "react";

import Pago from "./Pago";
import ExportPedidos from "./Export-pedidos";
function TablaPedidos({ children }) {
  return (
    <div className="mt-4 mx-4">
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3"></th>

                <th className="px-4 py-3">Cliente</th>

                <th className="px-4 py-3">Teléfono</th>
                <th className="px-4 py-3">DNI</th>
                <th className="px-4 py-3">Departamento</th>
                <th className="px-4 py-3">Provincia</th>
                <th className="px-4 py-3">Distrito</th>

                <th className="px-4 py-3">Estado</th>
                <th className="px-4 py-3">Monto Total</th>

                <th className="px-4 py-3">Fecha</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y  dark:divide-gray-700 dark:bg-gray-800">
              {children}
            </tbody>
          </table>
        </div>
        <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
          {/* <span className="flex items-center col-span-3"> Showing 21-30 of 100 </span>
        <span className="col-span-2"></span> */}
          {/* <!-- Pagination --> */}
          {/* <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
          <nav aria-label="Table navigation">
            <ul className="inline-flex items-center">
              <li>
                <button className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
                  <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
                  </svg>
                </button>
              </li>
              <li>
                <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">1</button>
              </li>
              <li>
                <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">2</button>
              </li>
              <li>
                <button className="px-3 py-1 text-white dark:text-gray-800 transition-colors duration-150 bg-blue-600 dark:bg-gray-100 border border-r-0 border-blue-600 dark:border-gray-100 rounded-md focus:outline-none focus:shadow-outline-purple">3</button>
              </li>
              <li>
                <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">4</button>
              </li>
              <li>
                <span className="px-3 py-1">...</span>
              </li>
              <li>
                <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">8</button>
              </li>
              <li>
                <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">9</button>
              </li>
              <li>
                <button className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next">
                  <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                    <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </span> */}
        </div>
      </div>
    </div>
  );
}

export default function Pagos({ data }) {
  let hash = {};
  let pedidos = data.filter(function (current) {
    let exists = !hash[current.id_payer];
    hash[current.id_payer] = true;
    return exists;
  });

  const articlesShown = 10;
  const [loadMore, setLoadMore] = useState(articlesShown);
  const showMoreArticles = () => {
    setLoadMore(loadMore + articlesShown);
  };

  const [search, setSearch] = useState("");
  const [dataSearch, setDataSearch] = useState([]);
  useEffect(() => {
    if (search.length > 0) {
      setDataSearch(
        pedidos.filter(
          (el) =>
            el.nombres.toUpperCase() === search.toUpperCase() ||
            el.documento === search ||
            el.apellidos.toUpperCase() === search.toUpperCase()
        )
      );
    } else {
      setDataSearch(pedidos);
    }
  }, [search]);
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);

  console.log(dataSearch);
  return (
    <div>
      <div class=" text-white flex justify-end ">
        <div class="flex items-center p-5">
          {/* <ExportPedidos data={dataSearch}></ExportPedidos> */}
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            class="w-full rounded-lg border border-gray-400 p-2 focus:outline-none text-black"
            placeholder="Buscar ..."
          />
        </div>
      </div>
      <TablaPedidos>
        {search.length > 0 ? (
          <>
            {dataSearch.slice(0, loadMore).map((el, i) => (
              <Pago key={i} product={el} />
            ))}
          </>
        ) : (
          <>
            {dataSearch.slice(0, loadMore).map((el, i) => (
              <Pago key={i} product={el} />
            ))}
          </>
        )}
        <tr>
          <td>
            <div className="flex flex-col w-[95%] justify-center absolute">
              <div className="flex justify-center">
                {loadMore < dataSearch?.length ? (
                  <button
                    type="button"
                    className="group relative overflow-hidden rounded-lg bg-black px-2 py-3 text-sm md:text-base mt-5"
                    onClick={showMoreArticles}
                  >
                    <div className="duration-[350ms] absolute inset-0  w-3  bg-[var(--color-naranja)] transition-all ease-out group-hover:w-full"></div>
                    <span className="relative text-white ">
                      Ver Mas Pedidos
                    </span>
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
              <div className="mt-5 flex justify-center">
                {loadMore > dataSearch?.length ? dataSearch?.length : loadMore}{" "}
                de {dataSearch?.length} Productos
              </div>
            </div>
          </td>
        </tr>
      </TablaPedidos>
    </div>
  );
}
