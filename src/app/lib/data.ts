import { makeRequest, HttpMethods, ApiResponse } from '@/app/lib/apiServices'
import { productParent, searchFacet } from '@/app/lib/definitions';
import { AuthService } from './authService';


export const fetchProduct = async (TNP: string): Promise<productParent | null> => {
  const response: ApiResponse | null = await makeRequest(
       HttpMethods.GET,
            `/products/getProductsTNP?tnp=${TNP}`
  );
  //console.log(`response fetchProduct(${TNP}): `,response);
  if (response.error && response.error.message &&  0 < response.error.message.length) {
    console.log(response.error.message ?? 'Error desconocido al obtener el Producto');
    return null;
  } else {
    return response.data;
  }
}

export const fetchProductByTN = async (tn: string): Promise<any> => {
  const response: ApiResponse | null = await makeRequest(
       HttpMethods.GET,
            `/products/getStoreByTN?tn=${tn}`
  );
  //console.log(`response fetchProductByTN(${tn}): `,response);
  if (response.error && response.error.message &&  0 < response.error.message.length) {
    console.log(response.error.message ?? 'Error desconocido al obtener el Producto');
    return null;
  } else {
    return response.data;
  }
}

export const fetchSearchProducts = async (providerName?: string | null, keword?: string | null, pageToken?: string | null, pageDirection?: string | null): Promise<Array<any> | null> => {
  const searchParameters = new URLSearchParams();
  if (keword !== undefined && keword !== '' && keword !== null) {
    searchParameters.append('search', keword);
  }
  if (providerName !== undefined && providerName !== '' && providerName !== null) {
    searchParameters.append('providerName', providerName);
  }
  if (pageToken !== undefined && pageToken !== '' && pageToken !== null) {
    searchParameters.append('paginationToken', pageToken);
  }
  if (pageDirection !== undefined && pageDirection !== '' && pageDirection !== null) {
    searchParameters.append('paginationDirection', pageDirection);
  }
  const response: ApiResponse | null = await makeRequest(
       HttpMethods.GET,
            `/products/productsSearch?${searchParameters.toString()}`
  );
  //console.log(`response fetchSearchProducts(${providerName}, ${keword}): `,response);
  if (response.error && response.error.message &&  0 < response.error.message.length) {
    console.log(response.error.message ?? 'Error desconocido al obtener la lista de productos.');
    return null;
  } else {
    return Array.isArray(response.data) ? response.data : [];
  }
}

export const fetchSearchFacetProducts = async (providerName?: string | null, keword?: string | null, pageToken?: string | null, pageDirection?: string | null): Promise<searchFacet | null> => {
  const searchParameters = new URLSearchParams();
  if (keword !== undefined && keword !== '' && keword !== null) {
    searchParameters.append('search', keword);
  }
  if (providerName !== undefined && providerName !== '' && providerName !== null) {
    searchParameters.append('providerName', providerName);
  }
  if (pageToken !== undefined && pageToken !== '' && pageToken !== null) {
    searchParameters.append('paginationToken', pageToken);
  }
  if (pageDirection !== undefined && pageDirection !== '' && pageDirection !== null) {
    searchParameters.append('paginationDirection', pageDirection);
  }
  const response: ApiResponse | null = await makeRequest(
       HttpMethods.GET,
            `/products/productsSearcFacet?${searchParameters.toString()}`
  );
  //console.log(`response fetchSearchProducts(${providerName}, ${keword}): `,response);
  if (response.error && response.error.message &&  0 < response.error.message.length) {
    console.log(response.error.message ?? 'Error desconocido al obtener la lista de productos.');
    return null;
  } else {
    return  response.data;
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

export const fetchCustomerData = async (): Promise<any> => {
  if (!AuthService.validateSession()){
    console.log('No hay datos de usuario');
    return null;
  }
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

export const fetchLoginPhone = async (phone: string): Promise<any> => {
  const response: ApiResponse | null = await makeRequest(
       HttpMethods.POST,
            `/customer/loginWithPhoneNumber`,
            {phoneNumber: phone}
  );
  if (response.error && response.error.message &&  0 < response.error.message.length) {
    console.log(response.error.message ?? 'Error desconocio al enviar el teléfono.');
    return null;
  } else {
    return true;
  }
}

export const fetchLoginPin = async (phone: string, pin: string): Promise<any> => {
  const response: ApiResponse | null = await makeRequest(
       HttpMethods.POST,
            `/customer/validateOTPForLogin`,
            {phoneNumber: phone, codeOTP: pin}
  );

  if (response.error && response.error.message &&  0 < response.error.message.length) {
    console.log(response.error.message ?? 'Error desconocido al enviar el PIN.');
    return null;
  } else {
    const {data} = response;
    AuthService.setAuthModel({
      token: data.accessToken,
      refreshToken: data.refreshToken,
      isAnonimo:false
  })
    return true;
  }
}