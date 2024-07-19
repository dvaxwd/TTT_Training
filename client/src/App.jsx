import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [light, setLight] = useState([]);
  const lightClick = (event) => {
    setLight([...light, [event.target.id]]);
  }
  return (
      <div className='h-100 bg-dark'>
      <div className='row h-100 gx-5'>
      <div className='col-4'></div>
      <div className='col-4'>
        <div className='row p-5 m-5'>
          <div className='col-4 justify-content-center'>
            <button type="button" className="btn btn-success rounded-circle" id="green" onClick={lightClick}>Green</button>
          </div>
          <div className='col-4 justify-content-center'>
            <button type="button" className="btn btn-warning rounded-circle text-light" id="yellow" onClick={lightClick}>Yellow</button>
          </div>
          <div className='col-4 justify-content-center'>
            <button type="button" className="btn btn-danger rounded-circle" id="red" onClick={lightClick}>Red</button>
          </div>
        </div>
        <div className='row p-5 m-5'>
          <table className="table table-dark table-striped">
            <thead className='table-light'>
            <tr>
              <th className='col-2 text-center'>#</th>
              <th className='col-6 text-center'>Light</th>
            </tr>
            </thead>
            <tbody>
              {light.map((light, index) => (
                <tr key={index}>
                  <th className='text-center'>{index + 1}</th>
                  <th className='text-center'>{light}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='col-4'></div>  
    </div>
    </div>
  );
}

export default App;
