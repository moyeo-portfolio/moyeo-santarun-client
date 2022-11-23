import React, { Component, useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Login.scss';
import '../styles/Background-Sky.scss';

import santarun from '../assets/santarun.png';
import Alert from "./Alert";

const LoginFail = () => {
    return (
        <div className="login-fail-btn">로그인실패</div>
    );
}

interface Props {
    setSession: Function,
}

export default function Login({ setSession }: Props) {
    const navigate = useNavigate();

    const handleId = (e: React.ChangeEvent<HTMLInputElement>,) => {
        setId(e.target.value);
    }
    const handlePasswd = (e: React.ChangeEvent<HTMLInputElement>,) => {
        setPasswd(e.target.value);
    }

    const [loginFail, setLoginFail] = useState<boolean>(false);
    const [id, setId] = useState<string>("");
    const [passwd, setPasswd] = useState<string>("");
    useEffect(() => {
    }, []);

  return (
    <div className="login">
        <div className="login-main-img">
            <img src={santarun} />
        </div>
        <div className="login-title"> 
            <h1>Santa_Run</h1>
            <h4>Un-title</h4>
        </div>
        <div className='login-content'>
            <div className="login-input-box">
                <input 
                    className='login-id' 
                    placeholder='아이디를 입력해주세요' 
                    onChange={handleId} />
            </div>
            <div className="login-input-box">
                <input 
                    type="password"
                    className='login-password' 
                    placeholder='비밀번호를 입력해주세요' 
                    style={{ fontFamily: (passwd&& "none") }}
                    onChange={handlePasswd} />
            </div>
            <div className="login-btn-box">
                <button 
                    className='login-btn' 
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
                </button>
            </div>
            <div className="login-btn-box">
                <button className='register-btn'>
                    회원가입
                </button>
            </div>
            {loginFail&&
                <LoginFail />
            }
            
        </div>
    </div>
  );

}
