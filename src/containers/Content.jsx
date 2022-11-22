import React, { Component, useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Content.scss';
import '../styles/Background-Sky.scss';

import santa from '../assets/santa.png';
import { BackButton } from "../components/StyledButton";

export default function Content({ setAddComment }) {
  const navigate = useNavigate();
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
        <div className='inputBox'>
          <div className='input1'>
          원하는 소원을 적어주세요 <br/><br/>
          <input className='box1'/>
          </div>
          <div className='input2'>
          필요한 산타는 몇 명인가요? <br/><br/>
          <div className='input22'>
            <input className='box2'/>
            <div>&nbsp;명</div>
          </div>
          </div>
          <div className='input3'>
          소원을 원하는만큼 소원비를 <br/> 내주세요! <br/><br/>
          <div className='input33'>
            <input className='box3'/>
            <div>&nbsp;원</div>
          </div>
          </div>
        </div>
        <div 
          className='detail-button'
          onClick={()=>{
            navigate("/DetailNew")
            setAddComment(true);
          }}
          style={{
            marginTop: "50px"
          }}>
          소원 전송
        </div>
      </div>
    </>
  );

}
