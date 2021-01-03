import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [commitHistory, setCommitHistory] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.github.com/search/commits?q=repo:facebook/react+css&page=1`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/vnd.github.cloak-preview"
        })
      }
    )
    .then(rizkiaVar => rizkiaVar.json())
    .then(rizkiaResponse => {
      console.log("Response : " + JSON.stringify(rizkiaResponse.items));
      setCommitHistory(rizkiaResponse.items);
    })
    .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      {commitHistory.map((c, index) => (
        <div key={index}>
          {c.commit && (
            <>
              <>
                <p>Index : {index}</p>
                <h2 style={{ textDecoration: "Underline" }}>
                  {c.commit.committer.name}
                </h2>
                <p>{c.commit.message}</p>
              </>
              <hr />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
