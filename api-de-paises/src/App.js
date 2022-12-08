import "./App.css";
import { useState, useEffect } from "react";

    function App() {
      const [error, setError] = useState(null);
      const [isLoaded, setIsLoaded] = useState(false);
      const [items, setItems] = useState([]);

      useEffect(() => {
          fetch("https://restcountries.com/v3.1/all")
              .then((res) => res.json())
              .then(
                  (result) => {
                      setIsLoaded(true);
                      setItems(result);
                  },
                  (error) => {
                      setIsLoaded(true);
                      setError(error);
                  }
              );
      }, []);

      if (error) {
          return <>{error.message}</>;
      } else if (!isLoaded) {
          return <>loading...</>;
      } else {
          return (
              <div className="wrapper">
                  <ul className="card-grid">
                      {items.map((item) => (
                          <li>
                              <article className="card" key={item.callingCodes}>
                                  <div className="card-image">
                                      <img src={item.flag} alt={item.name} />
                                  </div>
                                  <div className="card-content">
                                      <h2 className="card-name">{item.name}</h2>
                                      <ol className="card-list">
                                          <li>
                                              population:{" "}
                                              <span>{item.population}</span>
                                          </li>
                                          <li>
                                              Region: <span>{item.region}</span>
                                          </li>
                                          <li>
                                              Capital: <span>{item.capital}</span>
                                          </li>
                                      </ol>
                                  </div>
                              </article>
                          </li>
                      ))}
                  </ul>
              </div>
          );
      }
  }
  
export default App;
