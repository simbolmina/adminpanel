import DataTable from '../../components/dataTable/DataTable';
import { userRows } from '../../data';
import './users.scss';

const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add New Users</button>
      </div>
      <DataTable rows={userRows} />
    </div>
  );
};

export default Users;
