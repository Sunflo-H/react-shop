import React,{useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import styled from 'styled-components';

import "./Detail.scss";


let 박스 = styled.div`
  padding : 20px;
  background : red;
`;
let 제목 = styled.p`
  font-size : 40px;
  background : white;
  color : ${props=>props.글자색};
`;

function Detail(props){

  let [state,state변경] =useState(0);
  let [상태,상태변경] = useState(true);
  let [입력,입력변경] = useState("");

  function 입력변경함수(){
    {state변경(state++)};
  }
  useEffect(()=>{
    let timeout = setTimeout(()=>{상태변경(false)},2000);
    console.log("재렌더링");

    return ()=>{clearTimeout(timeout)}; // 컴포넌트가 종료될때 실행
  },[상태]);

  useEffect(()=>{
    console.log("업데이트 완료");
    return e=>{console.log("컴포넌트 종료");}
  })

  let history = useHistory(); //방문기록을 담아놓은 obj
  let {id} = useParams();
  let findItem = props.shoes.find(item=>{
    return id == item.id;
  })
  

  return (
      <div className="container">

        <input onChange={e=>{입력변경(e.target.value)}}/>
        <div>{입력}{state}</div>
        <button onClick={e=>{state변경(state++)}}>버튼</button>
        <button onClick={입력변경함수}>버튼</button>
        <button onClick={e=>{console.log("버튼눌림");}}>버튼</button>

        {
          상태 ? <재고알림 /> : null
        }
        
        <div className="row">
          <div className="col-md-6">
            <img src={"https://codingapple1.github.io/shop/shoes"+(findItem.id+1)+".jpg"} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{findItem.title}</h4>
            <p>{findItem.content}</p>
            <p>{findItem.price}</p>
            <button className="btn btn-danger">주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{
              history.goBack();
             }}>뒤로가기</button> 
          </div>
        </div>
        <박스 >
             <제목 글자색="blue">안녕 난 하얀색배경에 파란제목이야</제목>
             <제목 className='red'>안녕 난 SASS를 이용한 제목이야</제목>
        </박스>
      </div> 
  )
}

function 재고알림(){
  return(
    <div className='my-alert2'>
      <p>재고가 얼마 남지 않았습니다.</p>
    </div>
  )
}

export default Detail;
