import { useQuery } from "@tanstack/react-query";
import { getCategorySalesOfShop } from "../../services/apiOrder";

export default function useCategorySales(timeRange = "6_months") {
    const { data: categorySales, isLoading, error, refetch } = useQuery({
        queryKey: ["categorySales", timeRange],             // Sử dụng key có chứa timeRange để quản lý cache
        queryFn: () => getCategorySalesOfShop(timeRange),   // Gọi API với timeRange
        staleTime: 5 * 60 * 1000,                           // Dữ liệu "tươi" trong 5 phút
        cacheTime: 10 * 60 * 1000,                          // Cache được giữ trong 10 phút
        refetchOnWindowFocus: false,                        // Không tự động refetch khi chuyển tab
        refetchOnReconnect: false,                          // Không tự động refetch khi mất kết nối
    });

    return {
        categorySales,
        isLoading,
        error,
        refetch, // Có thể sử dụng để gọi lại API thủ công nếu cần
    };
}