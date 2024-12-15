import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginEmployee as loginEmployeeApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function useLoginEmployee() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { mutate: loginEmployee, isLoading } = useMutation({
        mutationFn: ({ email, password, shop_id }) =>
            loginEmployeeApi({ email, password, shop_id }),
        onSuccess: (user) => {
            if (user?.user.roles === '103') {
                navigate('/pendingOrders');

                queryClient.setQueryData(['user'], user?.user);

                toast.success('Đăng nhập thành công');
            } else {
                navigate('*');
            }
        },
        onError: () => {
            toast.error('Sai tài khoản hoặc mật khẩu');
        },
    });

    return { loginEmployee, isLoading };
}
