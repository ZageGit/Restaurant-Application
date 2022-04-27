import styles from "../../styles/Admin.module.css"
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Product from "../../models/Product"
import Orders from "../../models/Order"
import dbConnect from '../../util/mongo'
import resultHandler from "../../helper/resultHelper";


const Index = ({ orders, products }) => {
    const [pizzaList, setPizzaList] = useState(products)
    const [orderList, setOrderList] = useState(orders)
    const status = ["preparing", "on the way", "delivered"]
    const handleStatus = async (id) => {
        const item = orderList.filter(order => order._id === id)[0];
        const currentStatus = item.status;
        try {
            const res = await axios.put("api/orders/" + id, { status: currentStatus + 1 });

            setOrderList([
                res.data,
                ...orderList.filter((order) => order._id !== id),
            ]);

        }
        catch (err) {
            console.log(err)
        }

    }
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete("api/products/" + id);
            setPizzaList(pizzaList.filter(pizza => pizza._id !== id))
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>Products</h1>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Image</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    {pizzaList.map(product => (
                        <tbody key={product._id}>
                            <tr className={styles.trTitle}>
                                <td><Image
                                    src={product.img}
                                    width={50}
                                    height={50}
                                    objectFit="cover"
                                    alt=""
                                /></td>
                                <td>{product._id.slice(0, 5)}...</td>
                                <td>{product.title}</td>
                                <td>€{product.prices[0]}</td>
                                <td>
                                    <button className={styles.button}>Edit</button>
                                    <button className={styles.button} onClick={() => handleDelete(product._id)}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
            <div className={styles.item}>
                <h1 className={styles.title}>Orders</h1>
                <table className={styles.table}>

                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Id</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Total</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>createdAt</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    {orderList.map(order => (
                        <tbody key={order._id}>
                            <tr className={styles.trTitle}>

                                <Link href={`/orders/${order._id}`} passHref>
                                    <td className={styles.orderLink}>{order._id.slice(0, 5)}...</td>
                                </Link>


                                <td>{order.customer}</td>
                                <td>{order.address}</td>
                                <td>€{order.total}</td>
                                <td>{order.method === 0 ? (<span>cash</span>) : (<span>paid</span>)}</td>
                                <td>{status[order.status]}</td>
                                <td>{new Date(order.createdAt)}</td>
                                <td>
                                    {order.status>=2 && (
                                        <button disabled>finished</button>
                                    )}
                                    {order.status < 2 && (
                                        <button onClick={() => handleStatus(order._id)}>Next Stage</button>
                                    )}
                                    
                                </td>
                            </tr>
                        </tbody>
                    ))}

                </table>
            </div>

        </div>
    )
}

export const getServerSideProps = async () => {
    await dbConnect();

    const products = await resultHandler(Product);
    const orders = await resultHandler(Orders);
    

    return {
        props: {
            orders: orders,
            products: products
        }
    }

}
export default Index