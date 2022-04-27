import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";

const handler = async (req, res)=>{
    const {method, query:{id}} = req;

    await dbConnect();


    if(method === "GET" ){
        try {
            const order = await Order.findById(id);
            res.status(200).json(order);
          } catch (err) {
            res.status(500).json(err);
          }
    }
    if(method === "PUT"){
        try {
          if(req.body.status < 3){
            const order = await Order.findByIdAndUpdate(id, req.body, {
              new: true,
            });
            res.status(200).json(order);
          }else{
            const order = await Order.findById(id);
            res.status(200).json(order);
          }
          } catch (err) {
            res.status(500).json(err);
          }
    }
    if(method === "DELETE"){}
};

export default handler;