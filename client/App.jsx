import React, { useEffect } from 'react';
import axios from 'axios';

export default function App() {
  useEffect(() => {
    axios
      .get('/api/test')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
}
