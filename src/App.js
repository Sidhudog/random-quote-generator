import React,{useState} from 'react';
import axios from 'axios';
import './App.css'

const App = () => {

    const [advice,setAdvice] = useState('');
    const [bgimage, setBgimage] = useState('');
    const url = "https://api.adviceslip.com/advice";
    const ClientId ="wNLZLEboBp9ux77jTpCT_kCI21Jt4z3nPleek55sbHE";
    const img_url = `https://api.unsplash.com/photos/random/?client_id=${ClientId}`;
    const fetchAdvice=() =>{
        axios
          .get(url)
          .then((response) => {
            setAdvice(response.data.slip.advice);
          })
          .catch((error) => {
            console.log(error);
          });
        axios
            .get(img_url)
            .then((response) => {
                console.log(
                  response.data.urls.raw + "&query=scenary&h=900&w=1200"
                );
                setBgimage(response.data.urls.raw + '&query=scenary&h=900&w=1200');
            // setBgimage(response);
            })
            .catch((error) => {
            console.log(error);
            });
    }
    

    

  return (
    <div>
      <div style={{backgroundImage:`url(${bgimage})`,}} className="App">
        <div className="Card">
          <h1>{advice}</h1>
        </div>
        <button className="btn" onClick={fetchAdvice}>REFRESH</button>
      </div>
    </div>
  );
};

export default App;
