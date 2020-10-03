import React from 'react';
import PropTypes from 'prop-types';


function Food({name, picture, rating}){
return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
  );
}

const foodILike =[
{
  id:1,
  name: 'kimchi',
  image: 'abc',
  rating:5,
},
{
  id:2,
  name:'samgyeopsal',
  image:'abc',
  rating:3.7

},
{
  id:3,
  name:'Bibimbap',
  image:'abc',
  rating:4.9
}
];

function App() {
  return  (
    <div>
      {foodILike.map(dish => (<Food key={dish.id}  name={dish.name} picture={dish.picture} rating={dish.rating} />))};
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};


export default App;
