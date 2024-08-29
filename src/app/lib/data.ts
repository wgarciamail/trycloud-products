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
  console.log(response);
  if (response.error && response.error.message &&  0 < response.error.message.length) {
    console.log(response.error.message ?? 'Error desconocido al obtener el Producto');
    return null;
  } else {
    return response.data;
  }
}
