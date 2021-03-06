import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { 
        from: { pathname: "/" } 
    };

    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
        userCreated: false
    })

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var { email, displayName } = result.user;
                const singInUser = {
                    email,
                    name: displayName
                }
                setLoggedInUser(singInUser);
                history.replace(from);
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    //sign in With Email/password
    const handleBlur = (e) => {
        let isValid = true;
        if (e.target.name === 'email') {
            isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            isValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/.test(e.target.value)
        }
        if (e.target.name === 'confirmPassword') {
            isValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/.test(e.target.value)
        }
        if (isValid) {
            const newUserInfo = { ...user };//object destructuring
            newUserInfo[e.target.name] = e.target.value;//object value assign
            setUser(newUserInfo)
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && (user.password === user.confirmPassword)) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.userCreated = true;
                    setUser(newUserInfo)
                    updateUserName(user.name)
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.userCreated = false;
                    setUser(newUserInfo)
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.userCreated = true;
                    setUser(newUserInfo)
                    //for site signIn
                    var { email, displayName } = res.user;
                    const singInUser = {
                        email,
                        name: displayName
                    }
                    setLoggedInUser(singInUser);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.userCreated = false;
                    setUser(newUserInfo)
                });
        }
        e.preventDefault()
    }
    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            // console.log('User Updated Successfully')
        }).catch(function (error) {
            console.log(error)
        });
    }
    return (
        <div className="container main-area">
            <div className="my-4 other-option">
                {
                    loggedInUser.name ?
                        <button onClick={() => setLoggedInUser({})} className="form-control btn btn-info" >Sign Out</button>
                        :
                        <div>
                            <div className="user">
                                <div className="input-area">
                                    <h4 className="mb-3">{newUser ? "Create an account" : "Log In"}</h4>
                                    <form onSubmit={handleSubmit}>
                                        {newUser && <input className="form-control mb-2" type="text" name="name" onBlur={handleBlur} placeholder="Your Name" id="#" required />}

                                        <input className="form-control mb-2" type="email" onBlur={handleBlur} name="email" id="#" placeholder="Your email" required />

                                        <input className="form-control mb-2" type="password" onBlur={handleBlur} name="password" id="#" placeholder="Your Password" required />
                                        {newUser && <input className="form-control mb-2" type="password" onBlur={handleBlur} name="confirmPassword" id="#" placeholder="Confirm Password" required />}

                                        <input className="form-control mb-2 btn btn-outline-info" type="submit" value={newUser ? "Create an account" : "Log In"} />

                                        <p className="mt-3">
                                            {newUser ? "Already have an account?" : "Don't have an account"}
                                            <span onClick={() => setNewUser(!newUser)} className="text-info"> {newUser ? "Login" : "Create an account"}</span>
                                        </p>

                                        {newUser && <div>
                                            <h5>Password Validation</h5>
                                            <hr />
                                            <p>
                                                Password contain minimum one-number,
                                                Minimum one-special character & length[6-12]
                                            </p>
                                        </div>}

                                        <p className="text-danger">{user.error}</p>
                                        {user.userCreated && <p className="text-info">User {newUser ? "Created" : "Logged In"} Successfully</p>}

                                    </form>
                                </div>

                            </div>
                            <h4 className="mt-4">Or</h4>
                            <hr />
                            <div className="other-option">
                                <button className="rounded-pill form-control mb-2 btn btn-outline-danger" onClick={handleGoogleSignIn}>Continue With Google</button>
                            </div>
                        </div>
                }
            </div>

        </div>
    );
};

export default Login;