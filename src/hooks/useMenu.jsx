import { useQuery } from "@tanstack/react-query";
//import { useEffect, useState } from "react";

const useMenu = () => {
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/menus')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false);
    //         });
    // }, [])
    // return [menu, loading]

    const {data: menus = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menus'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/menus');
            return res.json();
        }
    })

    return [menus, loading, refetch]
}

export default useMenu;