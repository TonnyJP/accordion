import React from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
  <main>
    <div className="container" >
    <h2>Questions And Answer about login</h2>
    <section className="info">
      <ul>
        {data.map((quest) => {
          const { id, title, info } = quest;
          return <li key ={id}>
            <SingleQuestion title={title} info={info} />
          </li>
        })}
      </ul>
    </section>
    </div>
  </main>)
}

export default App;
