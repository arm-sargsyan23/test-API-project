import { Link } from "react-router-dom";
import useRequest from "../../hooks/request";

export default function Users() {
  const { data } = useRequest("https://jsonplaceholder.typicode.com/users");

  return (
    <main className="w-screen min-h-screen flex justify-center items-center">
      <div className="w-[60%] min-h-max p-4 flex gap-3 justify-center flex-wrap">
        {data.map(({ name, username, id, email }) => {
          return (
            <Link
              to={`/user?i=${id}`}
              key={`user-${id}`}
              className="w-[49%] min-h-[100px] bg-green-500 rounded-[2rem] p-4 grid"
            >
              <h3 className="text-2xl font-medium">{username}</h3>
              <h5>{name}</h5>
              <h5>{email}</h5>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
