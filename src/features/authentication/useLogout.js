import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { logout as logoutApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';
export default function useLogout() {
    const navigate = useNavigate();
    const { isLoading, mutate: logout } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            navigate('/login', { replace: true });
            toast.success('Đăng xuất thành công');
        },
    });

    return { isLoading, logout };
}
