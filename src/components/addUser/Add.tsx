import { GridColDef } from '@mui/x-data-grid';
import './add.scss';

const Add = ({
  slug,
  columns,
  setOpen,
}: {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('handSubmit');
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add new {slug}</h1>
        <form onSubmit={handSubmit}>
          {columns
            .filter((item) => item.field !== 'id' && item.field !== 'img')
            .map((column) => (
              <div className="column" key={column.field}>
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.headerName} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
