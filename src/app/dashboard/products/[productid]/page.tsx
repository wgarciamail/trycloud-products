import {FC} from 'react';
import { usePathname, useRouter } from 'next/navigation';
import ProductParent from '@/app/UI/product/productParent';


const ProductGrid: FC<{ params: { productid: string, searchParams : { query : string, sizeName : string} } }> = ({ params }) => {
  console.log(params);
  const sizeName = params.searchParams;
  console.log(sizeName); 
    return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <ProductParent TNP={params.productid} />

      {/* Información del Cliente Section */}
      <div className="col-span-3 md:col-span-1">
        <h2 className="text-xl font-bold mb-4">Información del Cliente</h2>
        <p><strong>Cliente:</strong> {"customerInfo.name"}</p>
        <p><strong>Email:</strong> {"customerInfo.email"}</p>
        <p><strong>Teléfono:</strong> {"customerInfo.phone"}</p>
        <p><strong>Dirección:</strong> {"customerInfo.address"}</p>
        <p><strong>Método de Pago:</strong> {"customerInfo.paymentMethod"}</p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4">Ver Historial de Órdenes</button>
      </div>

      {/* Detalles Section */}
      <div className="col-span-3 mt-4 border rounded-lg p-2">
        <h2 className="text-xl font-bold mb-4">Detalles</h2>
        <p><strong>Factura:</strong> {"orderDetails.invoiceNumber"}</p>
        <p><strong>Balance Anterior:</strong> {"orderDetails.previousBalance"}</p>
        <p><strong>Descuento:</strong> {"orderDetails.discount"}</p>
        <p><strong>Cupones Usados:</strong> {"orderDetails.couponsUsed"}</p>
        <p><strong>Total:</strong> {"orderDetails.totalAmount"}</p>
      </div>
    </div>
  );
};


export default ProductGrid;
