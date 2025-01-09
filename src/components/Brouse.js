
import Header from './Header'
import useMovies from '../hooks/useMovies';
import MainConatiner from './MainConatiner';
import SecondaryConatiner from './SecondaryConatiner';
const Brouse = () => {
  useMovies()

  return (
    <div >
      <Header />

      <MainConatiner />
      <SecondaryConatiner />

    </div>

  )
};

export default Brouse