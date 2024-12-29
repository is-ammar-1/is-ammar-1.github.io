import React, { useState, useRef } from 'react';
import { MobilePaymentData } from '../../types';

interface Props {
  onSubmit: (data: MobilePaymentData) => Promise<void>;
  isProcessing: boolean;
  paymentMethod: 'jazzcash' | 'easypaisa';
}

export default function MobilePaymentForm({ onSubmit, isProcessing, paymentMethod }: Props) {
  const [formData, setFormData] = useState<MobilePaymentData>({
    payeeName: '',
    phoneNumber: '',
    email: '',
    paymentProof: null,
    paymentMethod
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validatePhoneNumber = (phone: string) => {
    const pakistaniPhoneRegex = /^(\+92|0)?[0-9]{10}$/;
    return pakistaniPhoneRegex.test(phone);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, paymentProof: file }));
      // Create preview URL for the selected image
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid Pakistani phone number';
    }
    if (!formData.paymentProof) {
      newErrors.paymentProof = 'Please upload payment proof';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Format message for WhatsApp with order details
    const message = `*New ${paymentMethod.toUpperCase()} Payment Order*
    
Payee: ${formData.payeeName}
Phone: ${formData.phoneNumber}
Email: ${formData.email}

*Note: Payment proof image will be sent in the next message*

Please send the payment proof image in your next message.`;

    // Open WhatsApp with the formatted message
    window.open(
      `https://api.whatsapp.com/send/?phone=+923267780677&text=${encodeURIComponent(message)}`,
      '_blank'
    );

    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-serif text-white mb-4">
        Pay with {paymentMethod === 'jazzcash' ? 'JazzCash' : 'EasyPaisa'}
      </h2>

      <div className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Payee Name"
            required
            className="w-full bg-neutral-800 p-3 rounded text-white"
            onChange={e => setFormData(prev => ({ ...prev, payeeName: e.target.value }))}
          />
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full bg-neutral-800 p-3 rounded text-white"
            onChange={e => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full bg-neutral-800 p-3 rounded text-white"
            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Upload Payment Proof
          </label>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            required
            className="hidden"
            onChange={handleImageUpload}
          />
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="w-full bg-neutral-800 p-3 rounded cursor-pointer hover:bg-neutral-700 transition"
          >
            {selectedImage ? (
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Payment proof"
                  className="w-full max-h-48 object-contain"
                />
                <p className="text-sm text-gray-400 mt-2">Click to change image</p>
              </div>
            ) : (
              <div className="text-center text-gray-400">
                <p>Click to upload payment proof</p>
                <p className="text-sm mt-1">Supported formats: JPG, PNG</p>
              </div>
            )}
          </div>
          {errors.paymentProof && (
            <p className="text-red-500 text-sm mt-1">{errors.paymentProof}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isProcessing}
        className="w-full bg-gold-500 text-black py-3 rounded hover:bg-gold-600 transition disabled:opacity-50"
      >
        {isProcessing ? 'Processing...' : 'Submit Payment'}
      </button>
    </form>
  );
}
