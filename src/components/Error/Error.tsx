import { ErrorState } from "../../types/error";

const Error500 = () => {
  return <div>Something is wrong on our side. Please, try again.</div>;
};

const Error404 = () => {
  return <div>O, oh! It seems that you entered wrong address. 😮</div>;
};

const Error = ({ error }: { error: ErrorState }) => {
  if (error.status === 404) {
    return <Error404 />;
  }

  if (error.status === 500) {
    return <Error500 />;
  }

  return <div>Unknown error</div>;
};

export { Error };
