import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="h-dvh place-content-center">
      <div className="bg-white bg-opacity-50 h-1/3 w-1/3 m-auto text-4xl text-center p-8 rounded-xl backdrop-blur-sm">
        <Link to="/">
          We believe you&apos;ve made a mistake. Let us take you back to the
          Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
