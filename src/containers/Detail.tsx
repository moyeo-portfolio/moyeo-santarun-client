import React, { Component, useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Detail.scss';
import '../styles/Background-Sky.scss';

import { BackButton } from "../components/StyledButton";
import santa from '../assets/santa.png';
import Alert from "./Alert";
import { baseUrl } from "../utils/baseUrl";

export default function Detail() {
  const navigate = useNavigate();

  const [alert, setAlert] = useState(false);
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
      {alert&&
        <Alert where={"Detail"} setAlert={setAlert} />
      }

      <div style={{ height: "60px", }}></div>

      <div className="detail-top">
        <div className="detail-title">짱 큰 눈사람 만들어주세요 짱 큰 눈사람 만들어주세요</div>
        <div className="detail-usertime">
          <div className="detail-usertime-inner">
            <img src= {santa}></img>
            <div className="detail-time">
              유저님의 소원 02:00<br/> 
              출동한 산타: 3 santa
            </div>
          </div>
        </div>
      </div>

      <div className="detail-content-box">
        <div className="detail-content">
          <div 
            className="detail-content-scroll" 
            style={{
              height: (resize[1]-550)+"px",
            }}>
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
            1m보다 큰 눈사람 만들어서 사진 찍어주세요!
          </div>
        </div>
      </div>
    
      <button 
        className='detail-btn'
        onClick={()=>{setAlert(true)}}>
          신청
      </button>
    </>
  );

}
