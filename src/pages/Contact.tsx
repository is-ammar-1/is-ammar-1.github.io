import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-black min-h-screen text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-800 focus:border-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-800 focus:border-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-800 focus:border-white focus:outline-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-400">contact@akattire.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-400">123 Fashion Street</p>
                  <p className="text-gray-400">New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}