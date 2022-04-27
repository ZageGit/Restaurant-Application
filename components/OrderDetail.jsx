import styles from "../styles/OrderDetail.module.css"
import { useState } from "react";
import Link from "next/link";


const OrderDetail = ({ total, createOrder }) => {
    const [customer, setCustomer] = useState("");
    const [address, setAdress] = useState("");
    const handleClick = () => {
        createOrder({ customer, address, total, method: 0 });
    };

    return (
        <div className={styles.container} >
            <div className={styles.wrapper} >
                <h1 className={styles.title}>You will pay €12 after delivery.</h1>
                <div className={styles.item}>
                    <label htmlFor="">Name Surname</label>
                    <input type="text" placeholder="John Doe" className={styles.input} onChange={(e) => setCustomer(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label htmlFor="">Phone number</label>
                    <input type="text" placeholder="+1 234 567 89" className={styles.input} />
                </div>
                <div className={styles.item}>
                    <label htmlFor="">Address</label>
                    <textarea type="text" rows={5} placeholder="Stephansplatz 1, 1010 Vienna" className={styles.input} onChange={(e) => setAdress(e.target.value)} />
                </div>
                <button className={styles.button} onClick={handleClick}>
                    Order
                </button>
                <Link href={`/cart`} passHref>
                    <button className={styles.button}>
                        Back to cart
                    </button>
                </Link>
            </div>
        </div >

    )
}
export default OrderDetail