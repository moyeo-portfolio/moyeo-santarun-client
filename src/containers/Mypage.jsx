import React, { Component, useReducer, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Mypage.scss';
import '../styles/Background-Sky.scss';

import { BackButton, LogoutButton } from "../components/StyledButton";
import santa from '../assets/santa.png';
import Alert from "./Alert";

export default function Mypage({ helpComment, addComment, setSession }) {
  const navigate = useNavigate();

  const [content, setContent] = useState(false);
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
            <Alert where={"Detail"} setAlert={setAlert} />
            }
            <div className="mypage-all">
                <div className='appBar'>
                    내 정보
                </div>
                <div className='profile1'>
                    <div className='pTitle'>
                    <img src = {santa} align = "left"></img>
                    <div className='pInfo'>
                        <div className='text1'>#산타313</div>
                        <div className='text2'>santa@naver.com</div>
                    </div>
                    </div>
                </div>
                <div 
                    className='profile2' 
                    onClick={()=>{
                        if (content)
                            setContent(false);
                        else
                            setContent(true);
                    }}
                    style={{
                        background: content? "rgba(255,0,0,0.25)": "#FFE5E5",
                    }}>
                    <div className='num1'>산타로 도와준 횟수</div>
                    <div className='n1'>{helpComment?"4번":"3번"}</div>
                    {content&&helpComment&&
                        <Link to="/DetailNew">
                            <div className="main-comment">
                                <div className="main-comment-time">
                                유저님의 소원
                                {/* 12.24 02:00 */}
                                </div>
                                <div className="main-comment-title">아이에게 산타분장으로 선물을 전달해주세요!</div>
                            </div>
                        </Link>
                    }
                    {content&&
                        <div className="">
                            {[{
                                    comment: "짱 큰 눈사람 만들어주세요", 
                                    time: "유저님의 소원",
                                },
                                {
                                    comment: "크리스마스 저녁을 함께할 산타를 구해요", 
                                    time: "유저님의 소원",
                                },
                                {
                                    comment: "아이에게 산타분장으로 선물을 전달해주세요!", 
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
                    }
                    <div className='num2'>산타에게 도움을 청한 횟수</div>
                    <div className='n2'>{addComment? "1번": "0번"}</div>
                    {content&&addComment&&
                        <div className="">
                            <Link to="/DetailNew">
                                <div className="main-comment">
                                    <div className="main-comment-time">
                                    구름님의 소원
                                    {/* 12.24 02:00 */}
                                    </div>
                                    <div className="main-comment-title">새로 추가된 소원</div>
                                </div>
                            </Link>
                        </div>
                    }
                </div>
                <div className='profile3'>
                    <div className='op1'>공지사항&gt;</div>
                    <div className='op2'>친구초대&gt;</div>
                    <div className='op3'>거래후기&gt;</div>
                    <div className='op4' style={{ marginBottom: "20px" }}>고객센터&gt;</div>
                </div>

                <LogoutButton onClick={()=>{
                        setSession(false);
                        navigate("/");
                    }}>
                    로그아웃
                </LogoutButton>
            </div>

        </div>
    </>
  );

}
