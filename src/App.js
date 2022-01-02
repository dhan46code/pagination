import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Pages from './Pages_';

function App() {
  const { loading, data } = useFetch();
  // buat lagi jika sudah membuat result util
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    // ambil data dengan index ke 0
    setFollowers(data[page]);
  }, [loading, page]);

  // dia akan berubah ketika mengklik sesuai dgn index
  const handleChange = (index) => {
    // update page 0
    return setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      const next_ = oldPage + 1;
      // if bigger from last value back to 0
      if (next_ > data.length - 1) {
        return 0;
      }
      return next_;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      const prev_ = oldPage - 1;
      // if less than from 0 back to the last array
      if (prev_ < 0) {
        return data.length - 1;
      }
      return prev_;
    });
  };

  return (
    <main>
      <section className='pagination'>
        <div className='section-title'>
          <h2>{loading ? 'loading...' : 'pagination github user'}</h2>
        </div>
        {/* button page */}

        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPage}>
            prev
          </button>
          {data.map((item, index) => {
            return (
              <button
                className={`page-btn ${index === page && 'active-btn'}`}
                key={index}
                onClick={() => {
                  handleChange(index);
                }}
              >
                {index}
              </button>
            );
          })}
          <button className='next-btn' onClick={nextPage}>
            next
          </button>
        </div>

        <div className='container'>
          {followers.map((item, index) => {
            return <Pages key={index} {...item} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
