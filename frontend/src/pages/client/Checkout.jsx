import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import { useStateContext } from "../../contexts/contextprovider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const {user} = useStateContext();
  const navigate = useNavigate();
  const [phone, setPhone] = useState(user.phone_number);
  
  useEffect(() => {
    axiosInstance.get(`cart`)
      .then(response => {
        setCartItems(response.data.cart_items);
        setTotal(response.data.cart_items.reduce((sum, item) => sum + parseFloat(item.course.price), 0));
      })
      .catch(error => console.error(error))
  }, [])

  const handleCheckout = () => {
    axiosInstance.post(`checkout`, {
      user_id: user.id,
      user_name: user.name,
      user_email: user.email,
      user_phone: user.phone ?? phone,
      total_price: total,
      cart_items: cartItems,
    })
    .then(response => {
        toast.success(response.data.message);
        navigate(`/my-learning`);
      })
      .catch(error => {
        toast.error(error.response.data.message);
      })
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Checkout</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Thông tin đơn hàng */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <ul>
              {cartItems.map(item => (
                <li key={item.id} className="flex items-center gap-4 border-b py-4">
                  <img
                    src={item.course.thumbnail}
                    alt={item.course.title}
                    className="w-20 h-14 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="font-semibold">{item.course.title}</div>
                    <div className="text-sm text-gray-500">by {item.course.teacher.name}</div>
                  </div>
                  <div className="font-semibold">${Number(item.course.price).toFixed(2)}</div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-6 text-lg font-semibold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        {/* Thông tin thanh toán */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
            <input
              type="text"
              className="border rounded px-3 py-2 text-sm"
              placeholder="Full Name"
              value={user.name}
              disabled
            />
            <input
              type="email"
              className="border rounded px-3 py-2 text-sm"
              placeholder="Email"
              value={user.email}
              disabled
            />
            <input
              type="text"
              className="border rounded px-3 py-2 text-sm"
              placeholder="Phone"
              value={user.phone_number ?? phone}
              onChange={e => setPhone(e.target.value)}
              disabled={user.phone_number ? true : false}
            />
            <button
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition mt-4"
              onClick={handleCheckout}
            >
              Pay Now
            </button>
            <div className="text-xs text-gray-400 text-center mt-2">
              By clicking Pay Now, you agree to our Terms & Conditions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 