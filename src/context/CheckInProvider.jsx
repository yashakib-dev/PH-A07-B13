import { createContext, useState } from "react";

export const CheckInContext = createContext();

const CheckInProvider = ({ children }) => {

    const [friendsData, setFriendsData] = useState([]);
  const data = {
    friendsData,
    setFriendsData,
  };
  return (
    <CheckInContext.Provider value={data}>{children}</CheckInContext.Provider>
  );
};

export default CheckInProvider;
