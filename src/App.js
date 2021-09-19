import logo from './logo.svg';
import './App.css';

function App() {

  //
  const number = 5555;
  const singer = {
    name: 'Dr. Mahfuj',
    job: 'singer'
  }

  const singer2 = {
    name: 'Eva Rahman',
    job: 'kokil konthi gaan er pakhi'
  }
  //
  //javascript er vitore style deya zai ,camel case e likha lage ,object er moto kore, tarpor zar style lagbe sekhane 'style={dynamic mane style er variable name ta}'
  const singerStyle = {
    backgroundColor: 'red',
    color: 'white'
  }//example h3 er moddhe use korlam




  return (
    <div className="App">
      <header className="App-header">

        <div className="container">


          <h3>This is inside my container</h3>
          <h3 style={singerStyle}>singer style use korlam</h3>
          <h3 style={{ color: 'green', fontSize: '24px' }}>inline style. tobe dobble second bracket dite hoi</h3>


          <p>my number is :{47 + 55}</p>  {/*.... $ dite hoi ni.... */}
          <p>my number is :{number}</p>  {/*.... $ dite hoi ni.... */}

          <p>my number is :{singer.name}</p>  {/*.... $ dite hoi ni...object deya zai na. */}
          <p>my number is :{singer.job}</p>  {/*.... $ dite hoi ni...object deya zaina. */}

          <p>Singer :{singer.name + ' ' + singer.job} </p>  {/*.... $ dite hoi ni...object deya zaina. */}

          <p>Real Singer :{singer2.name + ' ' + singer2.job} </p>  {/*.... $ dite hoi ni...object deya zaina. */}


        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
