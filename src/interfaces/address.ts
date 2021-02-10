export interface IAddressData {
    firstName: string;
    lastName: string;
    company: string;
    country: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    postcode: string;
    email: string;
    phone: string;
}

export interface IAddress extends IAddressData {
    id: number;
    default: boolean;
}
