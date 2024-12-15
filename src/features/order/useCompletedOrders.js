import { useQuery } from '@tanstack/react-query';
import { getCompletedOrders } from '../../services/apiOrder';

export default function useCompletedOrders() {
    const { data: orders, isLoading } = useQuery({
        queryKey: ['completed-orders'],
        queryFn: getCompletedOrders,
    });

    return { orders, isLoading };
}
