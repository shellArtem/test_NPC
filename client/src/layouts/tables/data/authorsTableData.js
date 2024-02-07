/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import { useGetUsers } from './useGetUsers.tsx';

export default function Data() {
  const users = useGetUsers();

  return {
    columns: [
      { Header: 'Name', accessor: 'name', width: '45%', align: 'left' },
      { Header: 'Phone', accessor: 'phone', align: 'left' },
      { Header: 'Date of Birth', accessor: 'date_of_birth', align: 'center' },
    ],

    rows: users.map((el) => {
      return {
        name: el.name,
        phone: el.phone,
        date_of_birth: el.date_of_birth.toString().slice(0, 10)
      };
    }),
    
  };
}
