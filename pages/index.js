import Head from 'next/head'
import axios from 'axios'
import Image from 'next/image'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'
import Product from "../models/Product"
import dbConnect from '../util/mongo'
import resultHandler from '../helper/resultHelper'



export default function Home({pizzaList}) {
  console.log(pizzaList);
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

  const products = await resultHandler(Product);

 return{
   props:{
     pizzaList: products,
   }
 }
};
 

