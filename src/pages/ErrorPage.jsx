import { Outlet, Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      We believe you&apos;ve made a mistake wanna return to{' '}
      <Link to="/">Homepage?</Link>
    </>
  );
};

export default ErrorPage;
