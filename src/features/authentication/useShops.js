import { useQuery } from '@tanstack/react-query';
import { getAllShop } from '../../services/apiShop';



export default function useShops() {
    const { data: shops, isLoading } = useQuery({
        queryKey: ['shops'],
        queryFn: getAllShop,
        // staleTime: 5 * 60 * 1000,       // Dữ liệu được xem là "stale" sau 5 phút
        // cacheTime: 10 * 60 * 1000,      // Dữ liệu sẽ được lưu trong cache trong 10 phút
        // refetchOnWindowFocus: false,    // Không tự động gọi lại API khi cửa sổ có focus
        // refetchOnReconnect: false,      // Không gọi lại API khi kết nối lại
    })

    return { shops, isLoading }
}