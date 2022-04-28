import './App.css';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
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
} */
/* You can put any valid JavaScript expression inside the curly braces in JSX. Komponentti ja toiminnallisuus koodataan nimettynä funktiona tai anonyymina aukikirjoitetuna funktiona.
*/
const App = () => (
  <div className="App">
    <h1> Laurea FullStack 2022 React sovellus!</h1>

    <h2>It is {new Date().toLocaleTimeString()}.</h2>

    <Hello />
    <CustomHello
      author="Tuomas Holopainen"
      greeting="'Tere Moro Hei!'"
      color="blue" />
    <CustomHello
      author="Floor Jansen"
      greeting="'Goedemorgen!'"
      color="green"
    />
    <Elementti />
  </div>
);

/* Luodaan Hello komponentti, jota kutsutaan edellä olevasta App komponentista */
const Hello = () => (
  <div>
    <p>Hei Maailma!</p>
  </div>
);

/* Luodaan CustomHello komponentti, jota myös kutsutaan edellä olevasta App komponentista ja jonka kutsussa tulee mukana propsit - vrt funktion kutsuparametrit*/
const CustomHello = (props) => {
  return (
    <div>
      <p className={props.color}>
        {props.greeting} (<strong> {props.author} </strong> )
      </p>
    </div>
  );
};

/* Luodaan muuttuja user, jota käytetään REACT  Elementti */
const user = {
  firstName: 'Night',
  lastName: 'wish',
  avatarUrl: 'https://www.rumba.fi/wp-content/uploads/2022/04/nightwish_2022_blomqvist_2298.jpg.webp',
  linkki: "https://www.nightwish.com/"
};


/* Luodaan Elementti komponentti, jota kutsutaan App komponentista. Komponentti käyttää edellä määriteltyä user-muuttujaa*/
const Elementti = () => {
  return (
    <div>
      <h2>{user.firstName}{user.lastName}</h2>
      <a href={user.linkki}><img src={user.avatarUrl} alt="Kuvalinkki rikki..." /></a>
    </div>
  );
};


export default App;
