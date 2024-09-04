import { makeRequest, HttpMethods, ApiResponse } from '@/app/lib/apiServices'
import { productParent } from '@/app/lib/definitions';


export const fetchProduct = async (TNP: string): Promise<productParent | null> => {
  console.log("Make request for product: " + TNP)
  const response: ApiResponse | null = await makeRequest(
       HttpMethods.GET,
            `/products/getProductsTNP?tnp=${TNP}`
  );
  if (response.error && response.error.message &&  0 < response.error.message.length) {
    console.log(response.error.message ?? 'Error desconocido al obtener el Producto');
    return null;
  } else {
    return response.data;
  }
}

export const fetchCustomerData = async (): Promise<any> => {
  const response: ApiResponse | null = await makeRequest(
       HttpMethods.GET,
            `/customer/getCustomerData`
  );
  if (response.error && response.error.message &&  0 < response.error.message.length) {
    console.log(response.error.message ?? 'Error desconocido al obtener el Producto');
    return null;
  } else {
    return response.data;
  }
}

export const fetchRelatedEmbedding = async (tn: string, sizeName: string): Promise<any> => {
  const response: ApiResponse | null = await makeRequest(
       HttpMethods.GET,
            `/products/getRelatedEmbedding?TN=${tn}&sizeName=${sizeName}`
  );
  if (response.error && response.error.message &&  0 < response.error.message.length) {
    console.log(response.error.message ?? 'Error desconocido la lista de sugeridos');
    return null;
  } else {
    return response.data;
  }
}

export const fetchProductByTN = async (tn: string): Promise<any> => {
  console.log("Make request for store: " + tn)
  const response: ApiResponse | null = await makeRequest(
       HttpMethods.GET,
            `/products/getStoreByTN?tn=${tn}`
  );
  if (response.error && response.error.message &&  0 < response.error.message.length) {
    console.log(response.error.message ?? 'Error desconocido al obtener el Producto');
    return null;
  } else {
    //console.log(response);
    return response.data;
  }
}

export const fetchProductsByBrand = async (brandName: string): Promise<Array<any> | null> => {
  const response: ApiResponse | null = await makeRequest(
       HttpMethods.GET,
            `/products/productsbrand?brandname=${brandName}`
  );
  if (response.error && response.error.message &&  0 < response.error.message.length) {
    console.log(response.error.message ?? 'Error desconocido al obtener el Producto');
    return null;
  } else {
    return response.data;
  }
}

export const fetchCart = async (): Promise<any> => {
  const response: ApiResponse | null = await makeRequest(
       HttpMethods.GET,
            `/ShoppingCart/getCartWithOutHost`
  );
  if (response.error && response.error.message &&  0 < response.error.message.length) {
    console.log(response.error.message ?? 'Error desconocido al obtener el Carrito');
    return null;
  } else {
    return response.data;
  }
}