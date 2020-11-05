import React, { useEffect, useState } from 'react';

function App() {

  // const [ links, setLinks ] = useState([]);
  const loadLinks = async () => {
    const res = await fetch('/api/getLinks');
    const links = await res.json();
    console.log(links);
  }

  useEffect(() => {
      loadLinks();
  }, []);

  return (
    <div className="container py-5">
    <h1 className="text-center mb-5">List O' Link</h1>
    </div>
  );
}

export default App;
