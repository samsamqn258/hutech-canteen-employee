import { formatCurrency } from '../../utils/helpers'
import useOrderDetail from './useOrderDetail';
import Spinner from '../../ui/Spinner';
export default function ScannedOrder({ updateCompleted, isUpdating }) {
  const { order, isLoading } = useOrderDetail()

  if (isLoading) return <Spinner />

  const { dineOption, note, order_userId, order_product, order_trackingNumber, _id } = order.metaData
  console.log('hehee ===============', dineOption)
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h2>{order_trackingNumber}</h2>
        <p className="border-[1px] border-green-500 bg-green-200 py-3 px-8 rounded-full text-green-500 font-semibold">{dineOption === 'dine_in' ? 'Ăn tại chỗ' : 'Mang đi'}</p>
      </div>
      <div className="mt-8 border-b-[1px] pb-6">
        <h2 className="text-2xl font-semibold">Thông tin người nhận</h2>
        <div className="flex flex-row  mt-4">
          <div className="border-r-[1px] border-r-slate-500 pr-16">
            <div className="text-xl font-medium">Tên khách hàng</div>
            <p className="text-xl">{order_userId.name}</p></div>
          <div className="ml-16">
            <div className="text-xl font-medium">Email</div>
            <p className="text-xl">{order_userId.email}</p></div>

        </div>
      </div>

      <div className="mt-4 border-b-[1px] pb-6">
        <h2 className="text-2xl font-semibold">Yêu cầu thêm </h2>

        <p className="text-xl mt-2">{!note ? 'Không có ghi chú!' : note}</p>

      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Thông tin đơn hàng</h2>
        <div className="flex flex-col  mt-6 gap-4">
          {order_product?.map((product) =>
            <div key={product._id} className="flex flex-row justify-between w-full border-b-[1px] pb-2 mb-2">
              <div className="flex flex-row gap-10">
                <img src={product.product_thumb} className="w-20 h-20" />
                <div>
                  <div className="text-xl font-medium">x{product.quantity} {product.product_name}</div>
                  {product?.extra.map(extra => <div key={extra.sideDish_id} className="text-lg">
                    {extra.sideDish_name}
                  </div>)}
                </div>
              </div>
              <span className="text-2xl font-medium">{formatCurrency(product.totalPrice)}</span>
            </div>
          )}

        </div>
      </div>

      <div className='flex gap-4 mt-8 justify-end'>
        <button className='p-4 bg-red-400 text-white font-medium rounded-md border-none outline-none focus:outline-none focus:ring-0 hover:opacity-90'>Hủy đơn</button>
        <button disabled={isUpdating} onClick={() => updateCompleted(_id)} className='p-4 bg-green-400 text-white font-medium rounded-md border-none outline-none focus:outline-none focus:ring-0 hover:opacity-90'>Xác nhận</button>
      </div>

    </div>
  )
}
