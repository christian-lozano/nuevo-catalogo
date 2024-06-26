import { getPedidos } from "@/actions/ProductosPagados/getProductosPagados";
import Pagos from "@/components/pedidos/Pagos";
import { XCircle } from "lucide-react";

export default async function page() {
  const pedidos = await getPedidos("pendiente");

  if (pedidos.length === 0) {
    return (
      <tr className="w-full absolute mt-10 flex justify-center">
        <td>
          <div className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
            <div>
              <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
              <h1 className="mt-2 p-5 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
                No se encontraron Pedidos
              </h1>
            </div>
          </div>
        </td>
      </tr>
    );
  } else {
    return <Pagos data={pedidos}></Pagos>;
  }
}
