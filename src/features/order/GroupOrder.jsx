import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ScannedOrder from './ScannedOrder';
import useSummaryOrders from './useSummaryOrders';
import Spinner from '../../ui/Spinner';
import SummaryOrders from './SummaryOrders';

import useUpdateCompleted from './useUpdateCompleted';
import Empty from '../../ui/Empty';


export default function GroupOrder() {
  const { orderId } = useParams();
  const [isOrderProcessed, setIsOrderProcessed] = useState(false);
  const { orders, isLoading } = useSummaryOrders()
  const { updateCompleted, isUpdating } = useUpdateCompleted();
  const navigate = useNavigate();
  console.log(isUpdating)

  useEffect(() => {
    const scannedIds = JSON.parse(localStorage.getItem('scannedIds')) || [];
    if (scannedIds.includes(orderId)) {
      setIsOrderProcessed(true);
    }
  }, [orderId]);

  useEffect(() => {
    if (isUpdating) {
      // Khi isUpdating = true, xóa orderId khỏi URL
      navigate('/groupOrder'); // Hoặc trang mà bạn muốn điều hướng đến mà không có orderId
    }
  }, [isUpdating, navigate]);

  if (isLoading) return <Spinner />

  if (!orders.metaData.length) return <Empty />





  return (
    <div className="h-full flex flex-row justify-between gap-4">
      <div className="flex-1">
        <SummaryOrders orders={orders} />
      </div>
      {orderId && (
        <div className="border-2 w-[26%] h-full  p-8">
          {isOrderProcessed ? (
            <ScannedOrder updateCompleted={updateCompleted} isUpdating={isUpdating} />
          ) : (
            <p className="text-3xl font-medium">Hiện tại chưa có đơn hàng nào.</p>
          )}
        </div>
      )}
    </div>
  );
}
