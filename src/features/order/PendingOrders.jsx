import Spinner from '../../ui/Spinner';
import usePendingOrders from './usePendingOrders';
import { formatCurrency } from '../../utils/helpers';
import useUpdateSuccess from './useUpdateSuccess';

import Empty from '../../ui/Empty';
export default function PendingOrders() {
    const { orders, isLoading } = usePendingOrders();
    const { updateSuccess, isUpdatingSuccess } = useUpdateSuccess();

    if (isLoading) return <Spinner />;

    if (!orders.metaData.length) return <Empty title="đang chờ" />;

    return (
        <div className="mt-6 overflow-x-auto">
            <table className="min-w-full text-base text-left border border-collapse border-gray-300">
                <thead className="text-gray-800 bg-gray-100">
                    <tr>
                        <th className="px-4 py-3 text-3xl font-semibold border border-gray-300">
                            Mã đơn
                        </th>
                        <th className="px-4 py-3 text-3xl font-semibold border border-gray-300">
                            Sản phẩm
                        </th>
                        <th className="px-4 py-3 text-3xl font-semibold border border-gray-300">
                            Tên người đặt
                        </th>
                        <th className="px-4 py-3 text-3xl font-semibold border border-gray-300">
                            Trạng thái
                        </th>
                        <th className="px-4 py-3 text-3xl font-semibold border border-gray-300">
                            Lựa chọn
                        </th>


                        <th className="px-4 py-3 text-3xl font-semibold border border-gray-300">
                            Thành tiền
                        </th>

                        <th className=" text-3xl font-semibold border border-gray-300">

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.metaData?.map((order) => (
                        <tr key={order._id} className="hover:bg-gray-50">
                            <td className="p-4 text-3xl  border border-gray-300">
                                {order.order_trackingNumber}
                            </td>
                            <td className=" p-4 text-lg border border-gray-300">
                                <div>
                                    {order?.order_product?.map((product) => (
                                        <div
                                            key={product.product_id}
                                            className="pb-2 mb-4 border-b last:border-none"
                                        >
                                            <div className="text-3xl font-medium text-gray-700">
                                                {product.product_name} (
                                                {product.quantity})
                                            </div>

                                            {product?.extra?.length > 0 && (
                                                <ul className="mt-2 text-lg text-gray-500">
                                                    {product.extra.map(
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

                            </td>
                            <td className=" px-4 py-3 text-3xl border border-gray-300 whitespace-nowrap">

                                {order.order_userId.name}


                            </td>
                            <td className=" px-4 py-3 text-3xl border border-gray-300 whitespace-nowrap">
                                <div className='bg-orange-400 text-center text-white font-medium p-3 rounded-xl '>
                                    {order.order_status === 'pending' && 'Đang chờ'}
                                </div>
                            </td>
                            <td className=" px-4 py-3 text-3xl border border-gray-300 whitespace-nowrap">
                                <div className='bg-green-400 text-center text-white font-medium p-3 rounded-xl '>
                                    {order.dineOption === 'dine_in' ? 'Ăn tại chỗ' : 'Mang đi'}
                                </div>
                            </td>


                            <td className="px-4 py-3 text-3xl border border-gray-300">
                                {formatCurrency(
                                    order.order_checkout.finalPrice
                                )}
                            </td>

                            <td className='"px-4  border border-gray-300'>
                                <div className="flex items-center justify-center h-full">
                                    <button
                                        className="px-4 py-4 mx-2 text-2xl text-white bg-green-500 rounded-lg shadow-2xl hover:bg-green-600 focus:outline-none"
                                        onClick={() => updateSuccess(order._id)}
                                        disabled={isUpdatingSuccess}
                                    >
                                        Xác nhận đơn hàng
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
