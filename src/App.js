import './App.css';
import CharactersBasic from './components/basic/CharactersBasic';
import Characters from './components/pagination_final/Characters';
import CharactersPagination from './components/pagination_basic/CharactersPagination';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>Rick and Morty</h1>
        <Characters></Characters>
        <CharactersBasic></CharactersBasic>
        <CharactersPagination></CharactersPagination>
      </div>
    </div>
  );
}

export default App;
