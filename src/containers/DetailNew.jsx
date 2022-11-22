import React, { Component, useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Detail.scss';
import '../styles/Background-Sky.scss';

import { BackButton, DeleteButton } from "../components/StyledButton";
import santa from '../assets/santa.png';
import Alert from "./Alert";

export default function DetailNew({ setAddComment }) {
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
    <DeleteButton
      onClick={()=>{
        navigate("/");
        setAddComment(false);
      }}>
      삭제
    </DeleteButton>
    <div className="intro">
    {alert&&
      <Alert where={"Detail"} setAlert={setAlert} />
    }
    <div className='deatailBox'>
      <div className="detail">
        <div className="title">새로 추가된 소원</div>
        <div className="description">
          <div>
            <img src= {santa} align="left"></img>
            <div className='info'></div>
          </div>
          <div className='infoText'>
            구름님의 소원 12.24 02:00 <br/> 출동한 산타: 3 santa
          </div>
        </div>
      </div>
      <div className="detail-detail2">
        <div>새로 추가된 소원</div>
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
