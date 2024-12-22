import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { toggleCart, removeFromCart, updateQuantity } from '../../store/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPreview() {
  const { items, isOpen } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

interface CartItem {
    product: {
        id: string;
        name: string;
        image: string;
        price: number;
    };
    selectedSize: string;
    selectedColor: {
        name: string;
    };
    quantity: number;
}


const total: number = items.reduce((sum: number, item: CartItem) => sum + item.product.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed right-0 top-0 h-full w-96 bg-gray-900 shadow-xl z-50"
        >
          <div className="p-4 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Shopping Cart</h2>
              <button
                onClick={() => dispatch(toggleCart())}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <ShoppingBag className="w-12 h-12 mb-2" />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item: CartItem, index: number) => (
                    <motion.div
                      key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.name}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-800 p-4 rounded-lg"
                    >
                      <div className="flex gap-4">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium">{item.product.name}</h3>
                          <p className="text-sm text-gray-400">
                            Size: {item.selectedSize} | Color: {item.selectedColor.name}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <select
                              value={item.quantity}
                              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => dispatch(updateQuantity({ 
                                item, 
                                quantity: parseInt(e.target.value) 
                              }))}
                              className="bg-gray-700 rounded px-2 py-1"
                            >
                              {[1, 2, 3, 4, 5].map((num: number) => (
                                <option key={num} value={num}>{num}</option>
                              ))}
                            </select>
                            <button
                              onClick={() => dispatch(removeFromCart(item))}
                              className="text-red-400 hover:text-red-300"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-gray-800 pt-4 mt-4">
              <div className="flex justify-between mb-4">
                <span>Total</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
              <Link
                to="/cart"
                onClick={() => dispatch(toggleCart())}
                className="block w-full bg-white text-black text-center py-3 rounded hover:bg-gray-200 transition-colors"
              >
                Checkout
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}