import CardList from './components/card-list/card-list.component';
import { useState, useEffect } from 'react';

import SearchBox from './components/search-box/search-box.component';
import './App.css';

//Functional component
const App = () => {
  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  console.log('render');
  // useEffect takes in two argumemt, callback function, array of dependencies
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Roladex</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search monsters"
      />
      {<CardList monsters={filteredMonsters} />}
    </div>
  );
};

// Class Component
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   render() {
//     //ES6 destructuring this is equivalent to monsters = this.state.monsters
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     //to filter the searchbox
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Roladex</h1>
//         <SearchBox
//           className="search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="Search monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
