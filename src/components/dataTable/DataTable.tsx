import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid';
import './dataTable.scss';
import { Link } from 'react-router-dom';

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

const DataTable = ({
  rows,
  columns,
  slug,
}: {
  rows: object[];
  columns: GridColDef[];
  slug: string;
}) => {
  const handleDelete = (id: number) => {
    //delete the item
    console.log(`user: ${id} has been deleted`);
  };
  const actionColumn: GridColDef = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
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
