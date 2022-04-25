import Head from 'next/head'
import axios from 'axios'
import Image from 'next/image'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'
import dbConnect from '../util/mongo'


export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learning App</title>
        <meta name="description" content="Showing what i got" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList pizzaList={pizzaList}/>
    </div>
  )
}


export const getServerSideProps = async() =>{
await dbConnect();
 const res = await axios.get("/api/products")
 return{
   props:{
     pizzaList: res.data,
   }
 }
};