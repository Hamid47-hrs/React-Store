import { useEffect, useState } from "react";
import Loading from "../../components/ui/Loading";
import Card from "../../components/ui/Card";
import type { IOrder } from "../../types";
import { getOrders } from "../../services/orderServices";
import OrdersProduct from "../../components/OrdersProduct";

function OrdersDashboard() {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (err) {
        console.error("Error fetching orders: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="p-4 space-x-4">
      <h1 className="text-2xl font-bold">Submited Orders</h1>
      {orders.length == 0 ? (
        <p>There are no orders!</p>
      ) : (
        orders.map((item) => (
          <Card key={item.id}>
            <div className="flex items-center justify-between">
              <p>
                <strong>Order Code: {item.id}</strong>
              </p>
              <p>
                <strong>Customer: {item.userId}</strong>
              </p>
              <p>
                <strong>Date: {new Date(item.date).toDateString()}</strong>
              </p>
              <p>
                <strong>Items: {item.products.length}</strong>
              </p>
            </div>
            <div className="flex gap-5 mt-4 p-2">
              {item.products.map((product, index) => (
                <OrdersProduct
                  key={index}
                  productId={product.productId}
                  quantity={product.quantity}
                />
              ))}
            </div>
          </Card>
        ))
      )}
    </div>
  );
}

export default OrdersDashboard;
