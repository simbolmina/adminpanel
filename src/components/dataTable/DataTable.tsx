import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridToolbar,
} from '@mui/x-data-grid';
import './dataTable.scss';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'avatar',
    headerName: 'Avatar',
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || './noavatar.png'} alt="" />;
    },
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 100,
    renderCell: () => {
      return (
        <div className="action">
          <div className="view">
            <img src="./form.svg" alt="" />
          </div>
          <div className="delete">
            <img src="./delete.svg" alt="" />
          </div>
        </div>
      );
    },
  },
  { field: 'status', headerName: 'Status', width: 100, type: 'boolean' },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

export type UserRowsProps = {
  id: number;
  img: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  createdAt: string;
  verified: boolean;
};

// const DataTable = ({ rows }: { rows: UserRowsProps[] }) => {
const DataTable = ({ rows }: any) => {
  return (
    <div className="dataTable">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        className="dataGrid"
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableVirtualization
      />
    </div>
  );
};

export default DataTable;
