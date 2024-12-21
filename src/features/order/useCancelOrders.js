import { useQuery } from '@tanstack/react-query';
import { getCancelOrders } from '../../services/apiOrder';

export default function useCancelOrders() {
    const { data: orders, isLoading } = useQuery({
        queryKey: ['cancel-orders'],
        queryFn: getCancelOrders,
    });

    return { orders, isLoading };
}
