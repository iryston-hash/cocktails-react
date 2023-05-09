import {Link} from 'react-router-dom';

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h2>404</h2>
        <h3>page not found</h3>
        <Link to='/' className='btn btn-error'>
          Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
