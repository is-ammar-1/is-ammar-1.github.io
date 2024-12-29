export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface StoreLocation {
  id: string;
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  hours: string;
  phone: string;
}

export interface CheckoutFormData {
  email: string;
  name: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export interface MobilePaymentData {
  payeeName: string;
  phoneNumber: string;
  email: string;
  paymentProof: File | null;
  paymentMethod: 'jazzcash' | 'easypaisa';
}

export type PaymentMethod = 'card' | 'jazzcash' | 'easypaisa';