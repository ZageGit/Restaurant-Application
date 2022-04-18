import PizzaCard from "./PizzaCard"
import styles from "../styles/PizzaList.module.css"

const PizzaList = () =>{
    return (
        <div className={styles.container}>
            <h1 className={styles.title}> The best pizza in town</h1>
            <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.Error dolore quidem natus in. Ipsum, praesentium assumenda autem
             iusto labore fugit voluptatem atque voluptas, molestias rerum natus possimus corporis, totam minus?
            </p>
            <div className={styles.wrapper}>
             <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>
        </div>
    )
}
export default  PizzaList