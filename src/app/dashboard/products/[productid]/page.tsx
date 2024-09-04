import ProductParent from '@/app/UI/product/productParent';
import ProductDetail from '@/app/UI/product/ProductDetail';

const ProductGrid  = ({params, searchParams}:{
  params: {productid: string},
  searchParams: {
    tn: string,
    sizeName: string,
  }
}) => {
    return (
    <div className="grid grid-cols-4 gap-4 p-2">
      <div className="col-span-4 md:col-span-4">
        <ProductParent TNP={params.productid} TN={searchParams.tn} />
      </div>
      <div className="col-span-4 md:col-span-4">
        <ProductDetail TN={searchParams.tn} sizeName={searchParams.sizeName} name='customer' price={0} description='description' />
      </div>
    </div>
  );
};


export default ProductGrid;
