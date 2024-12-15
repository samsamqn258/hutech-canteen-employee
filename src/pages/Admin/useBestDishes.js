import { useQuery } from "@tanstack/react-query";
import { getBestSellingProductsOfShop } from "../../services/apiOrder";

export default function useBestDishes(timeRange = "6_months") {
    const { data: bestDishes, isLoading } = useQuery({
        queryKey: ["bestDishes", timeRange],                     // Sử dụng key có chứa timeRange để quản lý cache
        queryFn: () => getBestSellingProductsOfShop(timeRange),     // Gọi API với timeRange
        staleTime: 5 * 60 * 1000,                                   // Dữ liệu "tươi" trong 5 phút
        cacheTime: 10 * 60 * 1000,                                  // Cache được giữ trong 10 phút
        refetchOnWindowFocus: false,                                // Không tự động refetch khi chuyển tab
        refetchOnReconnect: false,                                  // Không tự động refetch khi mất kết nối
    });

    return {
        bestDishes,
        isLoading,
    };
}