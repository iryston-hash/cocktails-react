import {Link} from 'react-router-dom';

const Cocktail = ({id, image, info, glass, name}) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} loading='lazy' alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-more'>
          more
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
