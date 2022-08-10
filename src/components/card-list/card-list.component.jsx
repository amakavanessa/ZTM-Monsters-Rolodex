import Card from '../card/card.component';
import './card-list.style.css';

//was meant to take an argument of props but the destruction was done in the function argument ie {monsters} = props
const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);
//class Component,remember to include import { Component } from 'react';
// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
