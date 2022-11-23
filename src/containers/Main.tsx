import React, { Component, useReducer, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { reducer } from "../reducers";
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from "../store/counter";
import '../styles/Main.scss';
import '../styles/Background-Sky.scss';

import { mainTestData } from "../testData/mainTestData";

import { url } from "../utils/url";
import profile from '../assets/profile.png';
import marginTop from '../assets//main-top.png';
import axios from "axios";

export default function Main () {
  // https://react.vlpt.us/redux-middleware/01-prepare.html
  const navigate = useNavigate();

  const [res, setRes] = useState<JSON[]>([]);
  const [resize, setResize] = useState<number[]>([0, 0]);
  const handleResize = () => {
    if (window.innerHeight < 645)
      setResize([window.innerWidth, 645]);
    else
      setResize([window.innerWidth, window.innerHeight]);
  };

  const getMainDataF = async () => {
    try {
      const result = await axios(process.env.REACT_APP_DB_HOST + '/466d5944556364703834526c75516a/json/SearchSTNBySubwayLineInfo/1/5/');
      setRes(result.data.SearchSTNBySubwayLineInfo.row);
      console.log(result.data.SearchSTNBySubwayLineInfo.row);
    } catch (e) {

    }
  }
  useEffect(() => {
    getMainDataF();
    
    setResize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  // type RootState = ReturnType<typeof store.getState>
  // const number = useSelector((store: RootState) => store);
  // const dispatch = useDispatch();

  return (
    <>
      {/* <div style={{ position: "absolute", right: "0" }}>
        <button onClick={()=>dispatch(decrease())}>-</button>
        {number}
        <button onClick={()=>dispatch(increase())}>+</button>
      </div> */}
      <div className="main-profile">
        <img src={profile} onClick={()=>navigate(url+"/Mypage")} />
      </div>

      <div className="main-top-box">
        <div className="main-top">
          <div className="main-top-time">
            구름님의 소원<br/>
            2022.12.25
          </div>
          <div className="main-top-title">짱 큰 눈사람 만들어주세요</div>
          <img src={marginTop} />
        </div>
      </div>

      <div className="main-comment-box" style={{ height: resize[1]-335, }}>
        {[
          {
            comment: "짱 큰 눈사람 만들어주세요", 
            user: "유저님의 소원",
            time: "2022.12.25",
          },
          {
            comment: "크리스마스 저녁을 함께할 산타를 구해요", 
            user: "유저님의 소원",
            time: "2022.12.25",
          },
          {
            comment: "아이에게 산타분장으로 선물을 전달해주세요!", 
            user: "구름님의 소원",
            time: "2022.12.25",
          },
          {
            comment: "짱 큰 눈사람 만들어주세요", 
            user: "구름님의 소원",
            time: "2022.12.25",
          },
          {
            comment: "크리스마스 저녁을 함께할 산타를 구해요", 
            user: "유저님의 소원",
            time: "2022.12.25",
          },
          {
            comment: "짱 큰 눈사람 만들어주세요", 
            user: "유저님의 소원",
            time: "2022.12.25",
          },
          {
            comment: "크리스마스 저녁을 함께할 산타를 구해요", 
            user: "유저님의 소원",
            time: "2022.12.25",
          },
          {
            comment: "아이에게 산타분장으로 선물을 전달해주세요!", 
            user: "구름님의 소원",
            time: "2022.12.25",
          },
          {
            comment: "짱 큰 눈사람 만들어주세요", 
            user: "구름님의 소원",
            time: "2022.12.25",
          },
          {
            comment: "크리스마스 저녁을 함께할 산타를 구해요", 
            user: "유저님의 소원",
            time: "2022.12.25",
          },         
        ].map((data, idx)=> {
          return (
            <Link to="/Detail" key={idx}>
              <div className="main-comment">
                <div className="main-comment-time">
                  {data.user}<br/>
                  {data.time}
                </div>
                <div className="main-comment-title">{data.comment}</div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="main-wish">
        <input 
          className="main-input" 
          placeholder= "소원이 있으신가요? 당신의 산타를 찾아보세요!"
          type="text" 
        />
        <button className="main-send" onClick={()=>navigate("/Content")}>send</button>
      </div>
    </>
  );
}
