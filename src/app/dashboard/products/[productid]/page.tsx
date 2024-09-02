import React from 'react';
import Image from 'next/image';

const ProductGrid = ({ /* product, customerInfo, orderDetails */ }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {/* Productos Section */}
      <div className="col-span-3 md:col-span-2">
        <h2 className="text-xl font-bold mb-4">Titulo del producto</h2>
        <div className='flex flex-row'>
            <div className="flex-1 mt-4 md:mt-0">
                <Image src="https://trcmnbco.s3.amazonaws.com/WS41286-BK_1.jpg" alt="Producto" width={400} height={500} className="w-full h-auto" />
            </div>
            <div className="flex-1 p-4">
                <h1 className="text-xl md:text-2xl font-bold">{ "productParent.name"}</h1>
                <p>TNP:{"productParent.TNP"}</p>
                <p className="text-lg">${"productParent.price"}</p>
                <div className="mt-4">
                   {/*  <ProductColors variationsColor={productParent.variationsColor}/>
                    <ProductSize variationsColor={productParent.variationsColor} setVariation={setVariation} setSuggestion={setSuggestion} /> */}
                </div>
                <div className="mt-4">
                    <p>Merchant: {/* productParent.merchant */}</p>
                </div>
                <div className="mt-4 flex flex-col md:flex-row  md:space-x-4">
                    {/* <ProductDescription productParent={product?.product}/>
                    <ProductStores store={product?.stores} /> */}
                </div>
                <div className="mt-4">
                </div>
            </div>
        </div>
       
      </div>

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
