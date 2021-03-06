import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context';

const Publications = () => {
  const { setUnderscore } = useContext(AppContext);

  useEffect(() => {
    setUnderscore('publications');
  }, []);

  return (
    <section className="content-body">
      <h2>Publicações</h2>
      <p><em>Em construção.</em></p>
    </section>
  );
};

export default Publications;
