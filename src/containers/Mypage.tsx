import React, { Component, useReducer, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Mypage.scss';
import '../styles/Background-Sky.scss';

import { BackButton, LogoutButton } from "../components/StyledButton";
import santa from '../assets/santa.png';
import Alert from "./Alert";

import { baseUrl } from "../utils/baseUrl";
import { useSession } from "../utils/session";

export default function Mypage() {
    const navigate = useNavigate();
    const session = useSession();

    const [showContent, setShowContent] = useState(false);
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
                    navigate(baseUrl+"/");
                }}>
                뒤로
            </BackButton>
            <div style={{ height: "60px", }}></div>
            <div className='mypage-a'>
                내 정보
            </div>
            <div className="mypage-box">
                <div className="mypage" style={{ height: (resize[1]-180), }}>
                    <div className='mypage-profile'>
                        <div className='mypage-profile-inner'>
                            <img src = {santa} />
                            <div className='mypage-profile-info'>
                                <div className='text1'>#산타313</div>
                                <div className='text2'>santa@naver.com</div>
                            </div>
                        </div>
                    </div>

                    <div 
                        className='mypage-content-box' 
                        onClick={()=>{
                            setShowContent(!showContent);
                        }}
                        style={{
                            background: showContent? "rgba(255,0,0,0.25)": "#FFE5E5",
                        }}>
                        <div className='mypage-content-help'>산타로 도와준 횟수</div>
                        <div className='mypage-content-helpnum'>3번</div>
                        {showContent&&
                            <div className="mypage-comment-box">
                                {[
                                    {
                                        comment: "짱 큰 눈사람 만들어주세요", 
                                        user: "유저님의 소원",
                                        time: "12:25:07",
                                    },
                                    {
                                        comment: "짱 큰 눈사람 만들어주세요", 
                                        user: "유저님의 소원",
                                        time: "12:25:07",
                                    },
                                    {
                                        comment: "짱 큰 눈사람 만들어주세요", 
                                        user: "유저님의 소원",
                                        time: "12:25:07",
                                    },
                                ].map((data, idx)=> {
                                    return (
                                    <Link to={baseUrl+"/Detail"} key={idx}>
                                        <div className="mypage-comment">
                                            <div className="mypage-comment-usertime">
                                                {data.user}<br/>
                                                {data.time}
                                            </div>
                                            <div className="mypage-comment-title">{data.comment}</div>
                                        </div>
                                    </Link>
                                    );
                                })}
                            </div>
                        }

                        <div style={{ height: "20px", }}></div>

                        <div className='mypage-content-help'>산타에게 도움을 청한 횟수</div>
                        <div className='mypage-content-helpnum'>1번</div>
                        {showContent&&
                            <div className="mypage-comment-box">
                                {[
                                    {
                                        comment: "짱 큰 눈사람 만들어주세요", 
                                        user: "유저님의 소원",
                                        time: "12:25:07",
                                    },
                                ].map((data, idx)=> {
                                    return (
                                    <Link to={baseUrl+"/Detail"} key={idx}>
                                        <div className="mypage-comment">
                                            <div className="mypage-comment-usertime">
                                                {data.user}<br/>
                                                {data.time}
                                            </div>
                                            <div className="mypage-comment-title">{data.comment}</div>
                                        </div>
                                    </Link>
                                    );
                                })}
                            </div>
                        }
                    </div>
                    <div className='mypage-bottom-box'>공지사항&gt;</div>
                    <div className='mypage-bottom-box'>친구초대&gt;</div>
                    <div className='mypage-bottom-box'>거래후기&gt;</div>
                    <div className='mypage-bottom-box' style={{ marginBottom: "20px" }}>고객센터&gt;</div>

                    <LogoutButton onClick={()=>{
                            navigate(baseUrl+"/");
                            session.setSession();
                        }}>
                        로그아웃
                    </LogoutButton>
                </div>
            </div>
        </>
    );

}
