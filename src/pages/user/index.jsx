import { useSearchParams } from "react-router-dom";
import useRequest from "../../hooks/request";

export default function User() {
  const [params] = useSearchParams();
  const i = params.get("i");

  const { data } = useRequest("https://jsonplaceholder.typicode.com/users");

  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <div className="w-[60%] min-h-max p-4 flex gap-3 justify-center flex-wrap">
        {data.map(
          ({ name, username, id, email, phone, address, website, company }) =>
            i === id.toString() && (
              <div
                key={`user-${id}`}
                className="w-full h-[400px] bg-gray-500 rounded-[2rem] px-6 py-12 relative flex items-center gap-16 justify-between"
              >
                <div className="w-[200px]">
                  <img
                    className="w-full h-full"
                    src="/media/images/avatar.png"
                    alt="avatar"
                  />
                  <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-medium">{username}</h3>
                    <h5>{name}</h5>
                    <h5>{email}</h5>
                  </div>
                </div>
                <hr className="absolute w-[300px] rotate-[90deg] top-[200px] left-[100px]" />
                <div className="w-[67%] h-full p-4 text-2xl flex flex-col gap-7">
                  <h3 className="flex gap-3 items-center font-medium">
                    Phone :
                    <p className="text-xl items-center font-normal">
                      {" "}
                      {`${phone}`}
                    </p>
                  </h3>
                  <h3 className="flex gap-3 items-center font-medium">
                    Website :
                    <p className="text-xl items-center font-normal">
                      {" "}
                      {`${website}`}
                    </p>
                  </h3>
                  <h3 className="flex gap-3 items-center font-medium">
                    City :
                    <p className="text-xl items-center font-normal">
                      {" "}
                      {`${address.city}`}
                    </p>
                  </h3>
                  <h3 className="flex gap-3 items-center font-medium">
                    Compony :
                    <p className="text-xl items-center font-normal">
                      {" "}
                      {`${company.name}`}
                    </p>
                  </h3>
                  <h3 className="flex gap-3 items-center font-medium">
                    Suite :
                    <p className="text-xl items-center font-normal">
                      {" "}
                      {`${address.suite}`}
                    </p>
                  </h3>
                  <h3 className="flex gap-3 items-center font-medium">
                    Street :
                    <p className="text-xl items-center font-normal">
                      {" "}
                      {`${address.street}`}
                    </p>
                  </h3>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
