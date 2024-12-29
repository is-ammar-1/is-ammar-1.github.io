import React, { useState } from 'react';
import { CheckoutFormData, PaymentMethod, MobilePaymentData } from '../../types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MobilePaymentForm from './MobilePaymentForm';

interface Props {
  onSubmit: (data: CheckoutFormData) => Promise<void>;
  onMobilePaymentSubmit: (data: MobilePaymentData) => Promise<void>;
  isProcessing: boolean;
}

export default function CheckoutForm({ onSubmit, onMobilePaymentSubmit, isProcessing }: Props) {
  const [formData, setFormData] = useState<CheckoutFormData>({
    email: '',
    name: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutFormData, string>>>({});
  const [expiryDate, setExpiryDate] = useState<Date | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
      case 'city':
      case 'country':
        if (/\d/.test(value)) {
          return 'This field cannot contain numbers';
        }
        if (!value.trim()) {
          return 'This field is required';
        }
        break;
      
      case 'cardNumber':
        if (!/^\d+$/.test(value)) {
          return 'Card number must contain only digits';
        }
        if (value.length > 11) {
          return 'Card number cannot exceed 11 digits';
        }
        break;
      
      case 'cvv':
        if (!/^\d{3}$/.test(value)) {
          return 'CVV must be exactly 3 digits';
        }
        break;
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const newErrors: Partial<Record<keyof CheckoutFormData, string>> = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value as string);
      if (error) newErrors[key as keyof CheckoutFormData] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (!expiryDate) {
      setErrors(prev => ({ ...prev, expiryDate: 'Please select an expiry date' }));
      return;
    }

    await onSubmit({
      ...formData,
      expiryDate: expiryDate.toISOString(),
    });
  };

  const renderError = (field: keyof CheckoutFormData) => (
    errors[field] ? (
      <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
    ) : null
  );

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-xl font-serif mb-4">Select Payment Method</h2>
        <div className="grid grid-cols-3 gap-4">
          <button
            type="button"
            onClick={() => setPaymentMethod('card')}
            className={`p-3 rounded ${
              paymentMethod === 'card' 
                ? 'bg-gold-500 text-black' 
                : 'bg-neutral-800 text-white'
            }`}
          >
            Credit Card
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod('jazzcash')}
            className={`p-3 rounded ${
              paymentMethod === 'jazzcash' 
                ? 'bg-gold-500 text-black' 
                : 'bg-neutral-800 text-white'
            }`}
          >
            JazzCash
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod('easypaisa')}
            className={`p-3 rounded ${
              paymentMethod === 'easypaisa' 
                ? 'bg-gold-500 text-black' 
                : 'bg-neutral-800 text-white'
            }`}
          >
            EasyPaisa
          </button>
        </div>
      </div>

      {paymentMethod === 'card' ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-serif">Contact Information</h2>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full bg-neutral-800 p-3 rounded"
                onChange={handleChange}
              />
              {renderError('email')}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-serif">Shipping Information</h2>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                pattern="^[A-Za-z\s]+$"
                className="w-full bg-neutral-800 p-3 rounded"
                onChange={handleChange}
              />
              {renderError('name')}
            </div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              required
              className="w-full bg-neutral-800 p-3 rounded"
              onChange={handleChange}
            />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  pattern="^[A-Za-z\s]+$"
                  className="w-full bg-neutral-800 p-3 rounded"
                  onChange={handleChange}
                />
                {renderError('city')}
              </div>
              <div>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  required
                  pattern="^[A-Za-z\s]+$"
                  className="w-full bg-neutral-800 p-3 rounded"
                  onChange={handleChange}
                />
                {renderError('country')}
              </div>
            </div>
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              required
              className="w-full bg-neutral-800 p-3 rounded"
              onChange={handleChange}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-serif">Payment Information</h2>
            <div>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                required
                maxLength={11}
                pattern="\d{11}"
                className="w-full bg-neutral-800 p-3 rounded"
                onChange={handleChange}
              />
              {renderError('cardNumber')}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <DatePicker
                  selected={expiryDate}
                  onChange={(date: Date | null) => setExpiryDate(date)}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                  placeholderText="MM/YY"
                  minDate={new Date()}
                  className="w-full bg-neutral-800 p-3 rounded"
                />
                {errors.expiryDate && (
                  <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  required
                  maxLength={3}
                  pattern="\d{3}"
                  className="w-full bg-neutral-800 p-3 rounded"
                  onChange={handleChange}
                />
                {renderError('cvv')}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className="w-full bg-gold-500 text-black py-3 rounded hover:bg-gold-600 transition disabled:opacity-50"
          >
            {isProcessing ? 'Processing...' : 'Complete Order'}
          </button>
        </form>
      ) : (
        <MobilePaymentForm
          onSubmit={onMobilePaymentSubmit}
          isProcessing={isProcessing}
          paymentMethod={paymentMethod as 'jazzcash' | 'easypaisa'}
        />
      )}
    </div>
  );
}