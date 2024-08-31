import { makeRequest, HttpMethods, ApiResponse } from '@/services/apiServices'
import { productParent } from '@/models/product';


export const fetchProduct = async (productid: string): Promise<productParent | null> => {
  const response: ApiResponse | null = await makeRequest(
       HttpMethods.GET,
            `/products/getProductsTNP?tnp=${productid}`
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

export const fetchStoreByTN = async (tn: string): Promise<any> => {
  const response: ApiResponse | null = await makeRequest(
       HttpMethods.GET,
            `/products/getStoreByTN?tn=${tn}`
  );
  if (response.error && response.error.message &&  0 < response.error.message.length) {
    console.log(response.error.message ?? 'Error desconocido al obtener el Producto');
    return null;
  } else {
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