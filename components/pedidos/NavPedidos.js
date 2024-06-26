"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function NavPedidos() {
  const [activeNav, setActiveNav] = useState();

  const dataNav = [
    {
      title: "Todos",
      url: `/fritzsport/pedidos`,
    },
    {
      title: "Pendientes",
      url: `/fritzsport/pedidos/pendientes`,
    },
    {
      title: "Por Entregar",
      url: `/fritzsport/pedidos/porentregar`,
    },
    {
      title: "Entregados",
      url: `/fritzsport/pedidos/entregado`,
    },
    {
      title: "Devolución",
      url: `/fritzsport/pedidos/devuelto`,
    },
  ];
  return (
    <nav
      className="z-0 relative"
      x-data="{open:false,menu:false, lokasi:false}"
    >
      <div className="relative z-10 bg-white shadow">
        <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-8">
          <div className="relative flex items-center justify-center h-16">
            <div className="flex items-center px-2 lg:px-0">
              <div className=" md:block lg:block lg:ml-2">
                <div className="flex">
                  {dataNav.map((el, i) => (
                    <Link
                      key={i}
                      href={el.url}
                      onClick={() => setActiveNav(i)}
                      class={`${
                        i === activeNav && "bg-black text-white"
                      } ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-slate-800 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white `}
                    >
                      {" "}
                      {el.title}{" "}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
