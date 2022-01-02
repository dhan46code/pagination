import { useState, useEffect } from 'react';
import paginate from './util';
const url = 'https://api.github.com/users/mojombo/followers?per_page=100';

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getUser = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    // paginate(data);
    // setData(data);
    setData(paginate(data));
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);
  return { loading, data };
};
