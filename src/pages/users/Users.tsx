import DataTable from '../../components/dataTable/DataTable';
import { userRows } from '../../data';
import { GridColDef } from '@mui/x-data-grid';
import './users.scss';
import React from 'react';
import Add from '../../components/addUser/Add';
// import { useQuery } from '@tanstack/react-query';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || '/noavatar.png'} alt="" />;
    },
  },
  {
    field: 'firstName',
    type: 'string',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    type: 'string',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'email',
    type: 'string',
    headerName: 'Email',
    width: 200,
  },
  {
    field: 'phone',
    type: 'string',
    headerName: 'Phone',
    width: 200,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 200,
    type: 'string',
  },
  {
    field: 'verified',
    headerName: 'Verified',
    width: 150,
    type: 'boolean',
  },
];

const Users = () => {
  const [open, setOpen] = React.useState(false);

  // const { isLoading, data } = useQuery({
  //   queryKey: ['allusers'],
  //   // queryFn: fetchTodoList,
  //   queryFn: () =>
  //     fetch('http://localhost:8800/api/users').then((res) => res.json()),
  // });

  // if (isLoading) {
  //   return <span>Loading...</span>;
  // }

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New Users</button>
      </div>
      <DataTable rows={userRows} columns={columns} slug="users" />
      {open && <Add setOpen={setOpen} slug="user" columns={columns} />}
    </div>
  );
};

export default Users;
