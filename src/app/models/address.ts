export interface GPoint {
  lat: string;
  lng: string;
}

export interface AddressInterface {
  id: number;
  userId?: number;
  schoolId?: number;
  street?: string;
  suburb?: string;
  city: string;
  state: string;
  country: string;
  postcode: string;
  latLng?: string;

}

export class Address {
  id: number;
  userId?: number;
  schoolId?: number;
  city: string;
  state: string;
  country: string;
  postcode: string;
  street?: string;
  suburb?: string;
  latLng?: string;

  /**
   *
   */
  constructor(private address?: AddressInterface) {
    if (address) {
      this.id = address.id;
      this.userId = address.userId;
      this.schoolId = address.schoolId;
      this.city = address.city;
      this.state = address.state;
      this.country = address.country;
      this.latLng = address.latLng;
      this.postcode = address.postcode;
      this.suburb = address.suburb;
      this.street = address.street;
    }
  }
}
