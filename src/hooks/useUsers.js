import { useContext } from "react";

import UsersContext from "../context/UserContext";

const useUsers = () => {
  return useContext(UsersContext);
};

export default useUsers;
