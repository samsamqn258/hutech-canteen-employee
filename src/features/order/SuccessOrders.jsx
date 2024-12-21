import Empty from '../../ui/Empty';
import Spinner from '../../ui/Spinner';
import { formatCurrency } from '../../utils/helpers';
import useSuccessOrders from './useSuccessOrders';

import useUpdateCompleted from './useUpdateCompleted';
export default function SuccessOrders() {
    const { orders, isLoading } = useSuccessOrders();

    const { updateCompleted, isUpdatingCompleted } = useUpdateCompleted();

    if (isLoading) return <Spinner />;

    if (!orders.metaData.length) return <Empty title="thành công" />;

    return (
        <div className="mt-6 overflow-x-auto">
            <table className="min-w-full text-base text-left border border-collapse border-gray-300">
                <thead className="text-gray-800 bg-gray-100">
                    <tr>
                        <th className="px-4 py-3 text-3xl font-semibold border border-gray-300">
                            Mã đơn
                        </th>
                        <th className="px-4 py-3 text-3xl font-semibold border border-gray-300">
                            Tên người đặt
                        </th>
                        <th className="px-4 py-3 text-3xl font-semibold border border-gray-300">
                            Thành tiền
                        </th>
                        <th className="px-4 py-3 text-3xl font-semibold border border-gray-300">
                            Đồ ăn
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orders.metaData.map((order) => (
                        <tr key={order._id} className="hover:bg-gray-50">
                            <td className="w-auto px-4 py-3 text-3xl whitespace-pre-wrap border border-gray-300">
                                {order.order_trackingNumber}
                            </td>
                            <td className="w-auto px-4 py-3 text-3xl border border-gray-300 whitespace-nowrap">
                                {order.order_userId.name}
                            </td>
                            <td className="px-4 py-3 text-3xl border border-gray-300">
                                {formatCurrency(
                                    order.order_checkout.finalPrice
                                )}
                            </td>
                            <td className="flex justify-between px-4 py-3 text-lg border border-gray-300">
                                <div>
                                    {order.order_product.map((product) => (
                                        <div
                                            key={product.product_id}
                                            className="pb-2 mb-4 border-b last:border-none"
                                        >
                                            <div className="text-3xl font-medium text-gray-700">
                                                {product.product_name} (
                                                {product.quantity})
                                            </div>
                                            <div className="text-gray-600">
                                                <img
                                                    src={product.product_thumb}
                                                    alt={product.product_name}
                                                    className="inline-block rounded w-28 h-28"
                                                />
                                            </div>
                                            {product?.extra?.length > 0 && (
                                                <ul className="mt-2 text-lg text-gray-500">
                                                    <li className="mb-2 text-3xl font-medium text-gray-700">
                                                        Đồ ăn thêm:
                                                    </li>
                                                    {product?.extra?.map(
                                                        (extra, index) => (
                                                            <li
                                                                key={index}
                                                                className="ml-2 text-2xl"
                                                            >
                                                                -{' '}
                                                                {
                                                                    extra.sideDish_name
                                                                }{' '}
                                                                (
                                                                {extra.quantity}
                                                                )
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center justify-center h-full">
                                    <button
                                        disabled={isUpdatingCompleted}
                                        onClick={() =>
                                            updateCompleted(order._id)
                                        }
                                        className="px-4 py-4 mx-2 text-2xl text-white bg-green-500 rounded-lg shadow-2xl hover:bg-green-600 focus:outline-none"
                                    >
                                        Đã nhận hàng
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
