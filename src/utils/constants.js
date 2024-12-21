export const API_BASE_URL = 'http://localhost:3000/v2/api';
export const MENU_ITEMS = {
    // Quản trị viên
    104: [
        { label: 'Thống kê', to: '/categorySales' },
        { label: 'Đơn hàng đang chờ ', to: '/pendingOrders' },
        { label: 'Đơn hàng thành công', to: '/successOrders' },
        { label: 'Đơn hàng đã nhận', to: '/completedOrders' },
        { label: 'Đơn hàng đã hủy', to: '/cancelOrders' },
    ],
    // Nhân viên
    103: [
        { label: 'Đơn đặt hàng', to: '/groupOrder' },
        { label: 'Quét QR', to: '/qrScanner' },
    ],
};
