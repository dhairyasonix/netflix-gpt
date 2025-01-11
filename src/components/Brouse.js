
import Header from './Header'
import useMovies from '../hooks/useMovies';
import MainConatiner from './MainConatiner';
import SecondaryConatiner from './SecondaryConatiner';
import { useSelector } from 'react-redux';
import GptSerchPage from './GptSerchPage';

const Brouse = () => {
  useMovies("now_playing");
  useMovies("popular");
  useMovies("top_rated");
  useMovies("upcoming");

  const showGpt  =useSelector(store=>store.gpt.showGptSearch)



  return (
    <div >
      <Header />
     {showGpt? <GptSerchPage /> :
     <> <MainConatiner />
      <SecondaryConatiner />
      </>}

    </div>

  )
};

export default Brouse