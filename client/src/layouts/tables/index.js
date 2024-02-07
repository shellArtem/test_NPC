/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
import DataTable from 'examples/Tables/DataTable';

// Data
import authorsTableData from 'layouts/tables/data/authorsTableData';
import projectsTableData from 'layouts/tables/data/projectsTableData';
import { useGetUsers } from './data/useGetUsers.tsx';
import React, { useState } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
} from '@mui/material';

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  const [showFrom, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showFrom);
  };

  const users = useGetUsers();

  const [selectValue, setSelectValue] = useState('');
  const [productName, setproductName] = useState('');
  const [productPrice, setproductPrice] = useState('');

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  const handleInput1Change = (event) => {
    setproductName(event.target.value);
  };

  const handleInput2Change = (event) => {
    setproductPrice(event.target.value);
  };

  const handleSubmit = async (e) => {
    const data = {
      selectValue,
      productName,
      productPrice,
    };
    e.preventDefault();
    try {
      await fetch('http://localhost:3003/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setproductName(() => '')
      setproductPrice(() => '')
      setSelectValue(() => '')
    } catch (error) {
      console.log('Ошибка добавления', error);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Users
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Orders
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <Button
                  onClick={handleShowForm}
                  variant="contained"
                  color="white"
                >
                  {' '}
                  Add order{' '}
                </Button>
                {showFrom && (
                  <form style={{ padding: '2rem'}}> 
                    <FormControl>
                      <Select
                        value={selectValue}
                        onChange={handleSelectChange}
                        displayEmpty
                        placeholder="Select Customer"
                        style={{height: '2.8rem', width: '10rem'}}
                      >
                        <MenuItem disabled value="">
                          Select Customer
                        </MenuItem>
                        {users.map((user) => (
                          <MenuItem key={user.name} value={user.name}>
                            {user.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <TextField
                      label="Enter product name"
                      value={productName}
                      onChange={handleInput1Change}
                    />
                    <TextField
                      label="Enter product price"
                      value={productPrice}
                      onChange={handleInput2Change}
                    />
                    <Button onClick={handleSubmit}>Submit</Button>
                  </form>
                )}
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
