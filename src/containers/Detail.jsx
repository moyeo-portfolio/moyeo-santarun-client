import React, { Component, useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Detail.scss';
import '../styles/Background-Sky.scss';

import { BackButton } from "../components/StyledButton";
import santa from '../assets/santa.png';
import Alert from "./Alert";

export default function Detail({ setHelpComment }) {
  const navigate = useNavigate();

  const [alert, setAlert] = useState(false);
  useEffect(() => {
  }, []);

  return (
    <>
    <BackButton
      onClick={()=>{
        navigate("/");
      }}>
      뒤로
    </BackButton>
    <div className="intro">
    {alert&&
      <Alert where={"Detail"} setAlert={setAlert} setHelpComment={setHelpComment} />
    }
    <div className='deatailBox'>
      <div className="detail">
        <div className="title">짱 큰 눈사람 만들어주세요</div>
        <div className="description">
          <div>
            <img src= {santa} align="left"></img>
            <div className='info'></div>
          </div>
          <div className='infoText'>
            유저님의 소원 12.24 02:00 <br/> 출동한 산타: 3 santa
          </div>
        </div>
      </div>
      <div className="detail-detail2">
        <div>1m보다 큰 눈사람 <br/> 만들어서 사진 찍어주세요!</div>
      </div>
    </div>
    <div 
      className='detail-button'
      onClick={()=>{setAlert(true)}}>
        <div>신청</div>
    </div>
  
    </div>
    </>
  );

}
