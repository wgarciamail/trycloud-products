import Image from 'next/image';
import { FC } from 'react';

const Product: FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="flex flex-col md:flex-row">
        {/* Columna de Imágenes Pequeñas */}
        <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4">
          <Image src="https://trcmnbco.s3.amazonaws.com/WRCELCT4_1.jpg" alt="Vista 1" width={100} height={100} />
          <Image src="https://trcmnbco.s3.amazonaws.com/WRCELCT4_2.jpg" alt="Vista 2" width={100} height={100} />
          <Image src="https://trcmnbco.s3.amazonaws.com/WRCELCT4_3.jpg" alt="Vista 2" width={100} height={100} />
          <Image src="https://trcmnbco.s3.amazonaws.com/WRCELCT4_4.jpg" alt="Vista 2" width={100} height={100} />
        </div>
        {/* Imagen Principal */}
        <div className="flex-1 mt-4 md:mt-0">
          <Image src="https://trcmnbco.s3.amazonaws.com/WRCELCT4_1.jpg" alt="Producto" width={500} height={600} className="w-full h-auto" />
        </div>
        {/* Información del Producto */}
        <div className="flex-1 p-4">
          <h1 className="text-xl md:text-2xl font-bold">Vestido Preston</h1>
          <p className="text-lg">$475</p>
          <div className="mt-4">
            <label className="block text-sm font-medium">Talla (US):</label>
            <div className="flex space-x-2">
              <button className="border p-2">0</button>
              <button className="border p-2">2</button>
              <button className="border p-2">4</button>
              {/* Añade más tallas según sea necesario */}
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium">Color:</label>
            <div className="flex space-x-2">
              <span className="border p-2">Egyptian Blue</span>
              <span className="border p-2">Egyptian Blue</span>
              <span className="border p-2">Egyptian Blue</span>
              <span className="border p-2">Egyptian Blue</span>
              <span className="border p-2">Egyptian Blue</span>
              {/* Añade más opciones de color según sea necesario */}
            </div>
          </div>
          <div className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <button className="bg-blue-500 text-white p-2">Añadir a mi cesta</button>
            <button className="bg-green-500 text-white p-2">Comprar ahora</button>
          </div>
          <div className="mt-4">
            <a href="#" className="text-blue-500">+ Agregar a Mis listas</a>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-bold">Descripción</h2>
            <ul className="list-disc pl-5">
              <li>Peaux Fax acetato, 25% poliester</li>
              <li>Forro: 97% poliester, 2% spandex</li>
              <li>Fabricado en China</li>
              <li>Se recomienda lavar en tintorería</li>
              <li>Totalmente forrado</li>
              <li>Claro posterior oculto</li>
              <li>Estilo con un solo hombro</li>
              <li>Tejido satinado grueso con abertura en la costura lateral</li>
            </ul>
          </div>
          <div className="mt-4">
            <p>Nº articulo Revolve SLEE-WDI74</p>
            <p>Nº de esto de fabricante W22002</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
