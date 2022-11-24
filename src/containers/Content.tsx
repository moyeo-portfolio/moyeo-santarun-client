import React, { Component, useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Content.scss';
import '../styles/Background-Sky.scss';

import santa from '../assets/santa.png';
import { BackButton } from "../components/StyledButton";
import { baseUrl } from "../utils/baseUrl";

export default function Content() {
  const navigate = useNavigate();
  const [resize, setResize] = useState<number[]>([0, 0]);
  const handleResize = () => {
    setResize([window.innerWidth, window.innerHeight]);
  };
  useEffect(() => {
    setResize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <>
      <BackButton 
        onClick={()=>{
          navigate(baseUrl);
        }}>
        뒤로
      </BackButton>
      <div style={{ height: "60px", }}></div>
      <div className='content-box'>
        <div className="content" style={{ height: (resize[1]-350)+"px", }}>
          <div className='content-input-1'>
            원하는 소원을 적어주세요 <br/><br/>
            <input className='box1'/>
          </div>
          <div className='content-input-2'>
            필요한 산타는 몇 명인가요? <br/><br/>
            <div className='input22'>
              <input className='box2'/>
              <div>&nbsp;명</div>
            </div>
          </div>
          <div className='content-input-3'>
            소원을 원하는만큼 소원비를 <br/> 내주세요! <br/><br/>
            <div className='input33'>
              <input className='box3'/>
              <div>&nbsp;원</div>
            </div>
          </div>
        </div>
      </div>

      <button 
        className='detail-btn'
        onClick={()=>{navigate(baseUrl+"/Detail")}}>
          소원 전송
      </button>
    </>
  );

}
