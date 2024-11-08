import React from "react";
import UserContext from "./UserContext";
//children is just a name, it means the data which comes, make as it is.
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;