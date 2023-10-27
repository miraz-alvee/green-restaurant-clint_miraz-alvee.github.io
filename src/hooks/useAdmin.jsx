import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoding} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enable: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    }) 
    return [isAdmin, isAdminLoding];
};

export default useAdmin;