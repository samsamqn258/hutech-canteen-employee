import { useQuery } from '@tanstack/react-query';
import { getOrderDetail } from '../../services/apiOrder';
import { useParams } from 'react-router-dom';


export default function useOrderDetail() {
    const { orderId } = useParams();
    const { data: order, isLoading } = useQuery({
        queryKey: ['order', orderId],
        queryFn:() => getOrderDetail(orderId),
    });

    return { order, isLoading };
}
