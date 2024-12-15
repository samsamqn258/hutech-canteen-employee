import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginManager as loginManagerApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function useLoginManager() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { mutate: loginManager, isLoading } = useMutation({
        mutationFn: ({ email, password, shop_id }) =>
            loginManagerApi({ email, password, shop_id }),
        onSuccess: (user) => {
            if (user?.user.roles === '104') {
                navigate('/categorySales');

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

    return { loginManager, isLoading };
}
