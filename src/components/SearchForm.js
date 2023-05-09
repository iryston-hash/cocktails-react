import {useEffect, useRef} from 'react';
import {useGlobalContext} from '../context';

const SearchForm = () => {
  const {setSearchQuery} = useGlobalContext();

  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchQuery(searchValue.current.value);
  };
  const handleSubmit = (e) => e.preventDefault();

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name' >Search cocktails</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
            placeholder='a...'
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
