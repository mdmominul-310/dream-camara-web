import firebaseInit from "../Pages/Login/Firebase/firebaseInit"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";




const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [isAdmin, setisAdmin] = useState(false);
    const [isLooding, setIsLooding] = useState(true);
    // let navigate = useNavigate();

    firebaseInit();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    //create user using email password
    const createUserWithEmail = (email, password, name) => {
        setIsLooding(true);
        createUserWithEmailAndPassword(auth, email, password, name)
            .then(result => {
                const newUser = result.user;
                setUser(newUser);
                setIsLooding(false)
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                        saveUser(user.displayName, user.email)
                    })
            })
            .catch(error => {
                setError(error)
                console.log(error)
            })

    }
    //signin user with email and password
    const signInWithEmail = (email, password, from) => {
        setIsLooding(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const newUser = result.user;
                setUser(newUser)
                saveUser(user.displayName, user.email)
                setIsLooding(false)

            })
            .catch(error => console.log(error))

    }
    //signIn with Google 
    const signInWithGoogle = () => {
        setIsLooding(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                saveUser(user.displayName, user.email)
                setIsLooding(false)
            })
            .then(error => setError(error))
    }

    //signIn with Facebook
    const signInWithFacebook = () => {
        setIsLooding(true);
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                saveUser(user.displayName, user.email)
                setUser(result.user)
                setIsLooding(false);
            })
            .catch(error => setError(error))
    }
    //auth state change 
    useEffect(() => {
        setIsLooding(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
                // saveUser(user.displayName, user.email)
                setIsLooding(false);

            } else {

            }
        });
    }, [auth])
    const saveUser = (displayName, email) => {
        const userInfo = {
            displayName: displayName,
            email: email,
            role: ""
        }
        fetch('https://shielded-citadel-89476.herokuapp.com/users', {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then()
            .catch(error => console.log(error))
    }
    //signout method 
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});

            })
            .catch(error => console.log(error))
    }

    //for admin validate
    useEffect(() => {
        const url = `https://shielded-citadel-89476.herokuapp.com/user?email=${user.email}`

        fetch(url)
            .then(res => res.json())
            .then(data => {

                if (data?.role === "admin") {
                    setisAdmin(true)

                }
                else {
                    setisAdmin(false)
                }

            })
    }, [user])

    return {
        createUserWithEmail,
        signInWithEmail,
        signInWithGoogle,
        signInWithFacebook,
        logOut,
        user,
        isAdmin,
        isLooding,
        error
    }
}
export default UseFirebase;