import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

function Quotes() {
  const [quotes, setQuotes] = useState([]); 
  const { newquotes } = useSelector((state) => state); 
  const [limit, setLimit] = useState(1);
  const [skip, setSkip] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get(param);
  };
 
  
  useEffect(() => {
    const urlLimit = getQueryParam('limit');
    const urlSkip = getQueryParam('skip');
    console.log({urlLimit,urlSkip});
    if (urlLimit && parseInt(urlLimit, 10) !== limit) {
        setLimit(parseInt(urlLimit, 10)); // Update limit only if it's different
      }
      if (urlSkip && parseInt(urlSkip, 10) !== skip) {
        setSkip(parseInt(urlSkip, 10)); // Update skip only if it's different
      }
  }, [location]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/quotes?limit=${limit}&skip=${skip}`) 
      .then((res) => {
        setQuotes(res.data.quotes); 
        console.log(res.data.quotes); 
      })
      .catch((error) => {
        console.error(error);  
      });
  }, [limit, skip]);

//   const incrementLimit = () => {
//     const newLimit = limit + 1;
//     setLimit(newLimit);
//     navigate(`/Quotes?limit=${newLimit}&skip=${skip}`); 
//   };

//   const decrementLimit = () => {
//     const newLimit = Math.max(limit - 1, 0);
//     setLimit(newLimit);
//     navigate(`/Quotes?limit=${newLimit}&skip=${skip}`); 
//   };

//   const incrementSkip = () => {
//     const newSkip = skip + limit;
//     setSkip(newSkip);
//     navigate(`/Quotes?limit=${limit}&skip=${newSkip}`); 
//   };

//   const decrementSkip = () => {
//     const newSkip = Math.max(skip - limit, 0);
//     setSkip(newSkip);
//     navigate(`/Quotes?limit=${limit}&skip=${newSkip}`); 
//   };

//   const incrementLimit = () => setLimit(prevLimit => prevLimit + 1);
//   const decrementLimit = () => setLimit(prevLimit => Math.max(prevLimit - 1, 0)); 
//   const incrementSkip = () => setSkip(prevSkip => prevSkip + limit);
//   const decrementSkip = () => setSkip(prevSkip => Math.max(prevSkip - limit, 0)); 

  return (
    <>
      <div> 
        <h2>Quotes</h2>
        {/* <div>
          <h6>Limit: {limit}</h6>
          <button className="btn btn-primary rounded-2" onClick={decrementLimit}>- </button>
          <button className="btn btn-primary rounded-2 mx-2" onClick={incrementLimit}> +</button>
        </div>
        <div>
          <h6>Skip: {skip}</h6>
          <button className="btn btn-primary rounded-2" onClick={decrementSkip}>- </button>
          <button className="btn btn-primary rounded-2 mx-2" onClick={incrementSkip}> +</button>
        </div> */}
        <div className="container border border-light-subtle rounded-1 my-2">
          <ul>
            {quotes.map((quote) => (
              <li key={quote.id}><p>{quote.quote}</p></li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2>Added Quotes</h2>
        <div className="container border border-light-subtle rounded-1 my-2">
        { newquotes && newquotes.length > 0 ? (
            <ul>
              {newquotes.map((quote, index) => (
                <li key={index}><p>{quote}</p></li>  
              ))}
            </ul>
          ) : (
            <p>No new quotes.</p> 
          )}
        </div>
      </div>
    </>
  );
}

export default Quotes;
