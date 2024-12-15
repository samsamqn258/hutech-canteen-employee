import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
export default function useLogin() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            console.log(user);
            if (user?.user.roles === '101') {
                navigate('/dashboard');
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

    return { login, isLoading };
}
