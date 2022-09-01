import { createContext, useState } from 'react';

export const UsersContext = createContext({
  users: [],
  setUsers: () => {},
});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  
  return <UsersContext.Provider value={ users, setUsers }>{children}</UsersContext.Provider>;
};
