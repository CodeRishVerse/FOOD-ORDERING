import { useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();
  const { error, status, statusText } = err;
  // console.log(errorImg);
  return (
    <div className="error-page">
      {/* <img src={errorImg} height={200}></img> */}
      <h1 className="error-title">{error?.message}</h1>
      <h3 className="error-status">{status}</h3>
      <p className="error-text">{statusText}</p>
    </div>
  )


}

export default Error;