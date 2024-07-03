import { OrderHistoryType, studentReviewType } from "@/interFace/interFace"

const order_history_data:OrderHistoryType[] = [
    {
        id:1,
        orderName: "Basic",
        orderPrice: 19,
        orderDuration:"Quarterly",
        orderStatus:'verified',
        orderMethod:"sslcommerz",
        orderDate:'20-06-2022',
        btn:"Renew",
    },
    {
        id:2,
        orderName: "Standerd",
        orderPrice: 34,
        orderDuration:"Half-yearly",
        orderStatus:'verified',
        orderMethod:"sslcommerz",
        orderDate:'10-07-2022',
        btn:"Renew",
    },
    {
        id:3,
        orderName: "Standerd",
        orderPrice: 45,
        orderDuration:"Half-yearly",
        orderStatus:'verified',
        orderMethod:"sslcommerz",
        orderDate:'05-08-2022',
        btn:"Renew",
    },
    
   
]

export default order_history_data