import { useQuery } from '@tanstack/react-query';
import { getPendingOrders } from '../../services/apiOrder';

export default function usePendingOrders() {
    const { data: orders, isLoading } = useQuery({
        queryKey: ['pending-orders'],
        queryFn: getPendingOrders,
    });

    return { orders, isLoading };
}
