import React, { Component, useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Alert.scss';

import santa from '../assets/santa.png';

export default function Alert({ where, setAlert, setHelpComment }) {
  const navigate = useNavigate();
  useEffect(() => {
  }, []);

  return (
    <div className="alert-background">
      <div className='bbb'>
        <img className='santa' src={santa}  width = "90" height = "90"></img>
        
        <div className='santaBox'>
          <div className='sB1'>
            {where === "Detail"?
              <p>소원을 들어주러 갈까요?</p>:
              <p>00산타가 갑니다</p>
            }
          </div>
          <div className='sB2'>
            <div 
              className='sB2_a'
              onClick={()=>{
                  if (where === "Detail"){
                    navigate('/Mypage');
                    setHelpComment(true);
                  }
                }}>
                <div className='sB2_aa'>
                  확인
                </div>
            </div>

            <div className='sB2_b' onClick={()=>setAlert(false)}>
                <div className='sB2_bb'>
                  취소
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
