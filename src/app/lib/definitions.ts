export interface productParent {
    TNP: string;
    upc: any;
    name: string;
    model: any;
    image: string;
    url: string;
    path: string;
    price: number;
    listPrice: number;
    quantity: number;
    storeId: number;
    categoryId: number;
    brandName: string;
    merchant: string;
    variationsColor: Array<variationsColor>;
}

export interface variationsColor {
    colorName: string;
    image: string;
    variationsSize: Array<variationsSize>;
}

export interface variationsSize {
    TN: string;
    Upc: string;
    sizeName: string;
    price: number;
    listPrice: number;
    stock: number;
    isAvailable: boolean;
    statusGeneric: string;
    source: Array<source>;
}

export interface source {
    quantity: number;
    warehouse: string;
}

export interface productTN {
    product: productParent;
    stores: any;
}

export interface productSuggestion {
    TNP: string,
    TN: string,
    providerName: string,
    productName: string,
    upc: string,
    category: string,
    images: string,
    score: number,
    sizeName: Array<string>,
}


export interface AuthModel {
    token: string;
    refreshToken: string;
    isAnonimo:boolean
}
