import React, { useEffect, useState } from 'react';
import { User, auth } from '../../firebase';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <p>Usuário autenticado: {user.email}</p>
      ) : (
        <p>Nenhum usuário autenticado</p>
      )}
    </div>
  );
};

export default App;
