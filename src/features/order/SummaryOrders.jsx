import SummaryOrderItem from './SummaryOrderItem'

export default function SummaryOrders({ orders }) {
    return (
        <div className='flex flex-row flex-wrap gap-6 p-8 overflow-auto'>
            {orders.metaData.map(order => <SummaryOrderItem order={order} key={order._id} />)}
        </div>
    )
}
