import { useQuery } from '@tanstack/react-query';
import { getSummaryForToday } from '../../services/apiOrder';

export default function useSummaryOrders() {
    const { data: orders, isLoading } = useQuery({
        queryKey: ['summary-orders'],
        queryFn: getSummaryForToday,
    });

    return { orders, isLoading };
}
