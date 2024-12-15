import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateStatusCancelled } from '../../services/apiOrder';
import toast from 'react-hot-toast';

export default function useUpdateCancel() {
    const queryClient = useQueryClient();

    const { mutate: updateCancel, isLoading: isUpdating } = useMutation({
        mutationFn: updateStatusCancelled,
        onSuccess: () => {
            queryClient.invalidateQueries(['pending-orders']);
            toast.success('Xác nhận hủy đơn hàng thành công');
        },
        onError: () => {
            toast.error('Xác nhận hủy đơn hàng thất bại');
        },
    });

    return { updateCancel, isUpdating };
}
