/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';

export default function Data() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await fetch('http://localhost:3003/orders');
      const result = await response.json();
      setOrders(result);
    })();
  }, []);

  const handleDelete = (id) => {
    try {
      fetch(`http://localhost:3003/orders/${id}`, {
        method: 'DELETE',
      });
      setOrders((pre) => pre.filter((el) => el.id !== id));
    } catch (error) {
      console.log('Failed');
    }
  };

  return {
    columns: [
      { Header: 'Product', accessor: 'product_name', width: '45%', align: 'left' },
      { Header: 'Price', accessor: 'total_price', align: 'left' },
      { Header: 'Customer', accessor: 'user_name', align: 'center' },
      { Header: 'Delete', accessor: 'delete', align: 'center' },
    ],

    rows: orders.map((el) => {
      return {
        product_name: el.product_name,
        total_price: el.total_price,
        user_name: el.User.name,
        delete: (
          <Button
            variant="contained"
            color="white"
            onClick={() => handleDelete(el.id)}
          >
            Delete
          </Button>
        ),
      };
    }),
  };
}
