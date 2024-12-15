import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateStatusCompleted } from '../../services/apiOrder';

export default function useUpdateCompleted() {
    const queryClient = useQueryClient();

    const { mutate: updateCompleted, isLoading: isUpdating } = useMutation({
        mutationFn: updateStatusCompleted,
        onSuccess: () => {
            queryClient.invalidateQueries(['success-orders']);
            toast.success('Xác nhận nhận hàng thành công');
        },
        onError: () => {
            toast.error('Xác nhận nhận hàng thất bại');
        },
    });

    return { updateCompleted, isUpdating };
}
