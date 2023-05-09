import {useState, useEffect} from 'react';
import Loading from '../components/Loading';
import {useParams, Link} from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  useEffect(() => {
    const getCocktailData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: alcoholic,
            strGlass: glass,
            strCategory: category,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
          ];
          const newCocktail = {
            name,
            image,
            glass,
            alcoholic,
            ingredients,
            instructions,
            category,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getCocktailData();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (!cocktail) {
    return (
      <h2 className='section-title'>Ooops! no cocktail info is avaible</h2>
    );
  }

  const {name, image, glass, alcoholic, ingredients, instructions, category} =
    cocktail;
  return (
    <section className='section cocktail-section'>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name: </span>
            {name}
          </p>

          <p>
            <span className='drink-data'>alcoholic: </span>
            {alcoholic}
          </p>
          <p>
            <span className='drink-data'>category: </span>
            {category}
          </p>
          <p>
            <span className='drink-data'>served in type of glass of: </span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>ingredients: </span>
            {ingredients.map((item, i) => {
              return item ? <span key={i}>{item},</span> : null;
            })}
          </p>
          <p>
            <span className='drink-data'>instructions: </span>
            {instructions}
          </p>
        </div>
      </div>
      <Link to='/'>
        <button
          className='btn  btn-primary'
          style={{marginTop: '1rem'}}
        >
          return
        </button>
      </Link>
    </section>
  );
};

export default SingleCocktail;
