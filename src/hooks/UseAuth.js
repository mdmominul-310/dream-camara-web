import { useContext } from "react"
import { AllAuth } from "../Context/AuthContext"

const UseAuth = () => {
    return useContext(AllAuth);
}
export default UseAuth;