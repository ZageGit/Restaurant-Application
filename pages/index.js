import Head from 'next/head'
import axios from 'axios'
import Image from 'next/image'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'
import Product from "../models/Product"
import dbConnect from '../util/mongo'
import mongoose from "mongoose";



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
  const products = await Product.find().lean();
  // const jsonProducts =JSON.stringify(products);

  const newProducts = products.map((p)=>{
    const k = JSON.stringify(p);
    const l = JSON.parse(k)
    return l;
  })
  // .map((p) => {
  //   return {
  //     ...p,
  //     _id: p._id.toString(),
  //           extraOptions: p.extraOptions.map((x) =>{
  //             x._id = x._id.toString();
  //       return x
  //     })
  //   }
  // })
 return{
   props:{
     pizzaList: newProducts,
   }
 }
};
 

