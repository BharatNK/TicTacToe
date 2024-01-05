import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';

// function MyButton()
// {
//   return (
//     <button> I am a Button</button>
//   );
// }

const products = [
  {name: 'Apple' ,id: 1,isfruit: true},
  {name: 'Banana' ,id: 2,isfruit: false}
];

const Display = products.map( product =>
  <li key= {product.id}>
  {product.name}

  </li>
);

function App() {
  return (
    <div>
      <h1>I am a heading</h1>
      <MyButton/>
      {Display}
    </div>
  );
}

export default App;
