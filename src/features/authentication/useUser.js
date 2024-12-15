import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiAuth';

export default function useUser() {
    const { isLoading, data: user } = useQuery({
        queryKey: ['user'],
        queryFn: getCurrentUser,
    });
    return {
        user,
        isLoading,
        isAuthenticated: user?.roles === '103' || user?.roles === '104',
    };
}
