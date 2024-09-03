"use client";

import Image from 'next/image';

const ProductImages = ({ variationsColor }: { variationsColor: any }) => (
    <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 overflow-x-auto md:overflow-y-auto scrollbar-hide">
        {variationsColor.map((variation: any) => (
        <Image className='border' key={variation.image} src={variation.image} alt="Vista 1" width={100} height={100} />
        ))}
    </div>
    );

export default ProductImages;