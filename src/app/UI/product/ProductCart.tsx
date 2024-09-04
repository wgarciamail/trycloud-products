import React from "react";
import Image from "next/image";

export interface CartItem {
  upc: string;
  sizeName: string;
  colorName: string;
  quantity: number;
  price: number;
  image: string;
  sources: any;
}

export const CartNavbar = ({
  cartItems,
  title,
  totalAmount,
}: {
  cartItems: Array<CartItem> | [];
  title: string;
  totalAmount: number | 0;
}) => {
  if (!Array.isArray(cartItems)) return [];
  return (
    <div>
      <h2 className="text-lg font-bold mt-2 text-red-600">
        {title} ({cartItems.length})
      </h2>
      {(cartItems as CartItem[]).map((item, index) => (
        <div key={index} className="flex flex-row space-x-2 mb-3">
          <Image
            src={item.image}
            width={100}
            height={100}
            alt="Vista 1"
            className="border h-24 object-cover"
          />
          <div key={index} className="mb-4">
            <div className="font-bold">{item.upc}</div>
            <div className="text-xs">Talla: {item.sizeName}</div>
            <div className="text-xs">Color: {item.colorName}</div>
            <div className="text-xs">${item.price.toFixed(2)}</div>
          </div>
          <div>
            <div className="text-xs  border-t-2">
                {(item.sources as Array<any>).map((source, id) => (
                    <div key={id}>{source.warehouse} ({source.quantity})</div>
                ))}
            </div>
          </div>
        </div>
      ))}
      {totalAmount >0 && (
       <div className="font-bold text-xs">
            Total: ${totalAmount.toFixed(2)}
        </div>
      )}
    </div>
  )
}
