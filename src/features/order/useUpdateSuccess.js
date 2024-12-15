import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateStatusSuccess } from '../../services/apiOrder';
import toast from 'react-hot-toast';

export default function useUpdateSuccess() {
    const queryClient = useQueryClient();
    const { mutate: updateSuccess, isLoading: isUpdating } = useMutation({
        mutationFn: updateStatusSuccess,
        onSuccess: () => {
            queryClient.invalidateQueries(['pending-orders']);
            toast.success('Xác nhận đơn hàng thành công');
        },
        onError: () => {
            toast.error('Xác nhận đơn hàng thất bại');
        },
    });

    return { updateSuccess, isUpdating };
}
