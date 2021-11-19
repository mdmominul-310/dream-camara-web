import { useEffect, useState } from "react";

const UseCarusel = () => {
    const [caruseles, setCaruseles] = useState([]);
    useEffect(() => {
        fetch('https://shielded-citadel-89476.herokuapp.com/carusel')
            .then(res => res.json())
            .then(data => setCaruseles(data))
    }, [])
    return { caruseles }
}
export default UseCarusel;