import { useQuery } from '@tanstack/react-query';
import { getSuccessOrders } from '../../services/apiOrder';

export default function useSuccessOrders() {
    const { data: orders, isLoading } = useQuery({
        queryKey: ['success-orders'],
        queryFn: getSuccessOrders,
    });

    return { orders, isLoading };
}
