import { useEffect, useState } from 'react';

export const useGetUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async function () {
          const response = await fetch('http://localhost:3003/users');
          const result = await response.json();
          setUsers(result);
        })();
    }, []);

    return users;
}
