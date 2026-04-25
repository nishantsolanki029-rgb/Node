const orderService = require('../services/order.service');

// create order
module.exports.CreateOrder = async (req, res) => {
    try {
        const userId = req.user.id;
        const {items} = req.body;

        const order = await orderService.CreateOrder({userId, items})

        if(!order){
            return res.status(404).json("Product not Found");
        }

        return res.status(200).json({message: "Order Create Successfully", order})

    } catch (error) {
       return res.status(400).json({message: error.message}) 
    }
}

// get order deatails and show order status
module.exports.GetOrder = async (req, res) => {
    try {
        const userId = req.user.id;
        const order = await orderService.GetOrdere(userId);
        if (!order) return res.status(404).json({ message: "Order Not Found !" })

        return res.status(200).json({ message: "Order Fetch Successfully !", order })
        
    } catch (error ) {
        return res.status(400).json({error: error.message})
    }
}