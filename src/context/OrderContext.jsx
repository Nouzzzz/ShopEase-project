import { createContext, useState, useEffect } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("shopeaseOrders")) || [];
    setOrders(savedOrders);
  }, []);

  const addOrder = (cart) => {

    const newOrder = {
      id: Date.now(),
      date: new Date(),
      items: cart,
      status: "Placed",
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    };

    const updatedOrders = [...orders, newOrder];

    setOrders(updatedOrders);
    localStorage.setItem("shopeaseOrders", JSON.stringify(updatedOrders));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;