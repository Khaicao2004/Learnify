import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/outline";
import axiosInstance from "../../api/axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  console.log(cartItems);

  useEffect(() => {
    axiosInstance.get(`cart`)
      .then(response => {
        const items = response.data?.cart_items ?? [];
        setCartItems(items);
        setTotal(response.data.cart_items.reduce((sum, item) => sum + parseFloat(item.course.price), 0));
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">My Cart</h2>
      {cartItems.length == 0 ? (
        <div className="text-center text-gray-400 text-lg">Your cart is empty.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2">Course</th>
                    <th className="py-2">Teacher</th>
                    <th className="py-2">Price</th>
                    <th className="py-2">Quantity</th>
                    <th className="py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.id} className="border-b hover:bg-slate-50">
                      <td className="py-2 flex items-center gap-3">
                        <img src={item.course.thumbnail} alt={item.course.title} className="w-16 h-12 object-cover rounded" />
                        <span className="font-semibold">{item.course.title}</span>
                      </td>
                      <td className="py-2">{item.course.teacher.name}</td>
                      <td className="py-2">${item.course.price}</td>
                      <td className="py-2">{item.quantity}</td>
                      <td className="py-2">
                        <button className="text-red-500 hover:text-red-700">
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col gap-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;