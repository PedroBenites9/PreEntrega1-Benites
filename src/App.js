import Button from './components/Button/Button.js'
// import ItemCount from './components/ItemCount/ItemCount.js';
import ItemListContainer from './components/ItemListContainer/ItemListConaiter.js';
import NavBar from './components/Navbar/NavBar.js';

function App() {
  return (
    <div className='App'>
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting='Bienvenidos a nuestro E-commerce' bootstrap='mt-5' />
        <Button label='button 1' backgroundColor='green' handleClick={() => { console.log('button 1') }} bootstrap='mt-5 btn-danger' />
        {/* <ItemCount /> */}
      </main>

    </div>
  );
}

export default App;
