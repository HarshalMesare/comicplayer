import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Make a GET request to a sample API endpoint
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>React Axios Example</h1>
      {data ? (
        <div>
          <h2>Title: {data.title}</h2>
          <p>Body: {data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
