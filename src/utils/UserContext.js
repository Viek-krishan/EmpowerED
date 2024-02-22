import { createContext } from "react";

const UserData = createContext({
    user:{
        name:"Dummy name",
        location:"Location",
        email:"dummyemail@gmail.com",
    },
});

export default UserData;