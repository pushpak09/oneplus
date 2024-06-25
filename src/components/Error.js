import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h4>
        {err.status}:{err.statusText}
      </h4>
      <h1>OOPS !!!!!</h1>
      <h2>Something Went Worng!!!</h2>
    </>
  );
};

export default Error;
