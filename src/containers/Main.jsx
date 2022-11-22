import React, { Component, useReducer, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { reducer } from "../reducers";

import '../styles/Main.scss';
import '../styles/Background-Sky.scss';

import profile from '../assets/profile.png';

export default function Main({ addComment }) {
  const navigate = useNavigate();

  const [resize, setResize] = useState([0, 0]);
  const handleResize = () => {
    setResize([window.innerWidth, window.innerHeight]);
  };
  useEffect(() => {
    return () => {

    }
  }, []);

  // const { loading, data: users, error } = state;

  // if (loading) return <div>로딩중..</div>;
  // if (error) return <div>에러가 발생했습니다</div>;
  // if (!users) return null;

  return (
    <>
      <div 
        className="profile"
        onClick={()=>navigate("/Mypage")}>
        <img src={profile} />
      </div>
      <div className="intro">
        <div className="main-top">
          <div className="main-top-content">
            <div className="main-top-time">
            <div className="main-top-time1">구름님의 소원</div>
            </div>
            <div className="main-top-title">짱 큰 눈사람 만들어주세요</div>
          </div>
        </div>
        <div className="main-comment-box">
          {addComment&&
            <Link to="/DetailNew">
              <div className="main-comment">
                <div className="main-comment-time">
                  구름님의 소원
                  {/* 12.24 02:00 */}
                </div>
                <div className="main-comment-title">새로 추가된 소원</div>
              </div>
            </Link>
          }
          {[
            {
              comment: "짱 큰 눈사람 만들어주세요", 
              time: "유저님의 소원",
            },
            {
              comment: "크리스마스 저녁을 함께할 산타를 구해요", 
              time: "유저님의 소원",
            },
            {
              comment: "아이에게 산타분장으로 선물을 전달해주세요!", 
              time: "구름님의 소원",
            },
            {
              comment: "짱 큰 눈사람 만들어주세요", 
              time: "구름님의 소원",
            },
            {
              comment: "크리스마스 저녁을 함께할 산타를 구해요", 
              time: "유저님의 소원",
            },
          ].map((data, idx)=> {
            return (
              <Link to="/Detail" key={idx}>
                <div className="main-comment">
                  <div className="main-comment-time">
                    {data.time}
                    {/* 12.24 02:00 */}
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
      </div>
    </>
  );
}
