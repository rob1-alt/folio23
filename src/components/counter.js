import { useState, useEffect } from 'react';

function Views() {
  const [nbVues, setNbVues] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentNbVues = Number(window.localStorage.getItem('nbVues')) || 0;
      const incrementedNbVues = currentNbVues + 1;
      setNbVues(incrementedNbVues);
      window.localStorage.setItem('nbVues', incrementedNbVues);
    }
  }, []);

  return (
    <div>
       {nbVues} views.
    </div>
  );
}

export default Views;
