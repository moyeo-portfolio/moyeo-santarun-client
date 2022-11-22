import React, { Component, useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Login.scss';
import '../styles/Background-Sky.scss';

import santarun from '../assets/santarun.png';
import Alert from "./Alert";

function LoginFail () {
    return (
        <div style={{
            height: "40px",
            width : "234px",
            lineHeight: "40px",
            fontWeight: "800",
            textAlign: "center",
            background: "rgb(193, 189, 191)",
        }}>
            로그인실패
        </div>
    );
}

export default function Login({ setSession }) {
    const handleId = (e) => {
        setId(e.target.value);
    }
    const handlePasswd = (e) => {
        setPasswd(e.target.value);
    }

    const [loginFail, setLoginFail] = useState(false);
    const [id, setId] = useState("");
    const [passwd, setPasswd] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
    }, []);

  return (
    <>
        <div className="intro">
            <div className="">
                <div className="blank"></div>
                <div className="Image_ut">
                    <img src={santarun}></img>
                </div>
                <div className="login-title"> 
                    <h1>Santa_Run</h1>
                </div>
                <div className="login-title">
                    {/* <h1>Un-title</h1> */}
                    {/* &nbsp; */}
                    <h4>Un-title</h4>

                </div>
                <div className='boxxx'>
                    <div className='login-box1'></div>
                    <div className='login-box2'>
                    <input 
                        className='login-id' 
                        placeholder='아이디를 입력해주세요' 
                        onChange={handleId}/>
                    <input 
                        type="password"
                        className='login-password' 
                        placeholder='비밀번호를 입력해주세요' 
                        onChange={handlePasswd}/>
                    <div 
                        className='login' 
                        onClick={()=>{
                            if (id === "santa" && passwd === "1234")
                                setSession(true);
                            else {
                                setLoginFail(true);
                                setTimeout(()=> {
                                    setLoginFail(false);
                                }, 2000);
                            }
                        }}>
                        로그인
                    </div>
                    <div className='register'>
                        회원가입
                    </div>
                    {loginFail&&
                        <LoginFail />
                    }


                    </div>
                    <div className='login-box3'></div>


                </div>
            </div>
        </div>
    </>
  );

}
