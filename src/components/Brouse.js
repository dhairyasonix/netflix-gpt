
import Header from './Header'
import useMovies from '../hooks/useMovies';
import MainConatiner from './MainConatiner';
import SecondaryConatiner from './SecondaryConatiner';

const Brouse = () => {
  useMovies("now_playing");
  useMovies("popular");
  useMovies("top_rated");
  useMovies("upcoming");
  


  return (
    <div >
      <Header />

      <MainConatiner />
      <SecondaryConatiner />

    </div>

  )
};

export default Brouse