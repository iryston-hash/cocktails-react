import {useState, useContext, createContext, useEffect} from 'react';
import {useCallback} from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}${searchQuery}`);
      const data = await response.json();
      const {drinks} = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [searchQuery]);
  useEffect(() => {
    fetchData();
  }, [searchQuery, fetchData]);

  return (
    <AppContext.Provider value={{isLoading, setSearchQuery, cocktails}}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext, AppProvider};
