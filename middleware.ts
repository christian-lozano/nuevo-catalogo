import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const publicPaths = path === "/" || path === "/signup";

  if (publicPaths && token) {
    return NextResponse.redirect(new URL("/fritzsport/pedidos", req.nextUrl));
  }
  if (!publicPaths && !token) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
}

export const config = {
  matcher: [
    "/",
    "/signup",
    "/fritzsport/pedidos",
    "/fritzsport",
    "/fritzsport/pedidos/pendientes",
    "/fritzsport/pedidos/porentregar",
    "/fritzsport/pedidos/entregado",
    "/fritzsport/pedidos/devuelto",
    "/fritzsport/catalogo",
    "/fritzsport/catalogo-edit",
    "/fritzsport/catalogo-pdf",
    "/fritzsport/update-price",
  ],
};
