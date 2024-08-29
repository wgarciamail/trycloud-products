import Image from 'next/image';

const brands = [
  { name: 'Newbalance', logoUrl: '/new-balance-logo.png', offerTitle: 'New Balance Athletic Shoe', offerDetails: 'Pruébalo gratis' },
  { name: 'bamers', logoUrl: '/logo-Bamers-negro.png', offerTitle: 'Calzado y accesorios', offerDetails: 'Pruébalo gratis' },
  { name: 'TheNorthFace', logoUrl: '/thenorthface.svg', offerTitle: 'Ropa y accesorios', offerDetails: 'Pruébalo gratis' },
  { name: 'Basico', logoUrl: '/bosico.svg', offerTitle: 'Ropa y accesorios', offerDetails: 'Pruébalo gratis' },
  { name: 'Pilatos', logoUrl: '/pilatos.webp', offerTitle: 'Zapatos, Ropa y accesorios', offerDetails: 'Pruébalo gratis' },
  { name: 'Mali', logoUrl: '/mali.webp', offerTitle: 'Zapatos, Ropa y accesorios', offerDetails: 'Pruébalo gratis' },
  { name: 'superDry', logoUrl: '/superdry.png', offerTitle: 'Zapatos, Ropa y accesorios', offerDetails: 'Pruébalo gratis' },
  { name: 'diesel', logoUrl: '/diesel.png', offerTitle: 'Zapatos, Ropa y accesorios', offerDetails: 'Pruébalo gratis' },
  { name: 'Prochampions', logoUrl: '/prochampions.svg', offerTitle: 'Zapatos, Ropa y accesorios', offerDetails: 'Pruébalo gratis' },
  { name: 'Stevemadden', logoUrl: '/stevemadden.webp', offerTitle: 'Zapatos, Ropa y accesorios', offerDetails: 'Pruébalo gratis' },
  { name: 'Running Balboa', logoUrl: '/runningbalboa.svg', offerTitle: 'Zapatos, Ropa y accesorios', offerDetails: 'Pruébalo gratis' },
  // Add more brand objects here
];

export default function BrandGrid() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-3 gap-4">
        {brands.map((brand) => (
          <div key={brand.name} className="bg-white p-4 rounded-lg shadow-md">
            <Image src={brand.logoUrl} alt={brand.name} width={120} height={64} className="h-16 mx-auto" />
            <p className="mt-2 text-center font-semibold">{brand.offerTitle}</p>
            <p className="text-center text-sm">{brand.offerDetails}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
