import { GridColDef } from '@mui/x-data-grid';
import './add.scss';
// import { useMutation, useQueryClient } from '@tanstack/react-query';

const Add = ({
  slug,
  columns,
  setOpen,
}: {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // const queryClient = useQueryClient();
  // const mutation = useMutation({
  //   mutationFn: () => {
  //     return fetch(`http://localhost:8800/api/${slug}s`, {
  //       method: 'post',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         id: 111,
  //         img: '',
  //         lastName: 'Hello',
  //         firstName: 'Test',
  //         email: 'testme@gmail.com',
  //         phone: '123 456 789',
  //         createdAt: '01.02.2023',
  //         verified: true,
  //       }),
  //     });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`all${slug}s`]);
  //   },
  // });

  const handSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('handSubmit');
    // mutation.mutate();
    setOpen(false);
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
