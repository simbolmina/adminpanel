import { GridColDef } from '@mui/x-data-grid';
import Add from '../../components/addUser/Add';
import DataTable from '../../components/dataTable/DataTable';
import './products.scss';
import React from 'react';
import { products } from '../../data';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Image',
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || '/noavatar.png'} alt="" />;
    },
  },
  {
    field: 'title',
    type: 'string',
    headerName: 'Title',
    width: 250,
  },
  {
    field: 'color',
    type: 'string',
    headerName: 'Color',
    width: 150,
  },
  {
    field: 'price',
    type: 'string',
    headerName: 'Price',
    width: 200,
  },
  {
    field: 'producer',
    headerName: 'Producer',
    type: 'string',
    width: 200,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 200,
    type: 'string',
  },
  {
    field: 'inStock',
    headerName: 'In Stock',
    width: 150,
    type: 'boolean',
  },
];

const Products = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      <DataTable rows={products} columns={columns} slug="products" />
      {open && <Add setOpen={setOpen} slug="product" columns={columns} />}
    </div>
  );
};

export default Products;
