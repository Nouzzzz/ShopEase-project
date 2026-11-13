import React, { useContext } from "react";
import OrderContext from "../context/OrderContext";

const OrderHistory = () => {

  const { orders } = useContext(OrderContext);

  return (
    <div className="p-5 text-2xl">

      <h2>Order History</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500 text-base mt-4">
          No orders found
        </p>
      ) : (

        orders.map((order) => (

          <div key={order.id} className="border p-4 rounded-lg mt-4 text-base">

            <p>Order ID: {order.id}</p>
            <p>Date: {order.date}</p>
            <p>Status: {order.status}</p>

            <hr className="my-3" />

            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between mt-2">
                <p>{item.title} x {item.quantity}</p>
                <p>₹{item.price * item.quantity}</p>
              </div>
            ))}

            <hr className="my-3" />

            <p className="font-bold text-right">
              Total: ₹{order.total}
            </p>

          </div>

        ))

      )}

    </div>
  );
};

export default OrderHistory;