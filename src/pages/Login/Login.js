import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { pageTitle, submitButton, textContainer, textField, container, pageDivider } from '../../components/common/ClassNames';
import { validateEmail } from '../../components/common/Functions';
import { logInWithEmail, setError, setLoaded } from '../../redux/actionCreators/authActionCreators';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Loading from '../../components/common/Loading/Loading';

function Login() {
    const [login,setLogin] = useState("");
    const [pageLoading, setpageLoading] = useState(false);
    const [password,setPassword] = useState("");
    const histroy = useNavigate();
    const dispatch = useDispatch();

    const { error, loaded, status } = useSelector(
      (state) =>({
        error: state.auth.error,
        loaded: state.auth.loaded,
        status: state.auth.status
    }), shallowEqual);

    const loginUser = () => {
        setpageLoading(true);
        dispatch(logInWithEmail(login, password));
    }

    // useEffect(() => {
    //     if(pageLoading && loaded){
    //         setpageLoading(false);
    //         if(!error && status === 1){
    //             histroy("../", {replace:true});
    //         }
    //         else{
    //             dispatch(setError(
    //                 {
    //                     error: null,
    //                     status: "Login failed"
    //                 }
    //             ));
    //             dispatch(setLoaded(false));
    //         }
    //     }
    //     if(error && loaded){
    //         dispatch(setLoaded(false));
    //     }
    // }, [loaded, error]);

    return (
        <div className={`${container} w-fit`}>
            {
                pageLoading
                ?
                    <Loading size={70}/>
                :
                <>
                    <p className={pageTitle}>Login</p>
                    <hr className={pageDivider}/>
                    <div className={textContainer}>
                        <input 
                            type="text" 
                            name="login" 
                            className={textField} 
                            placeholder="Username or email" 
                            onChange={(event) => setLogin(event.target.value)}
                            required
                        />
                        <input 
                            type="password" 
                            name="password" 
                            className={textField} 
                            placeholder="Password" 
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                        <button onClick={() => loginUser()} className={submitButton}>Login</button>
                    </div>
                </>
            }
        </div>
    );
}

export default Login;