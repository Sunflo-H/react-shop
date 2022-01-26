import React,{useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import styled from 'styled-components';

import "./Detail.css";
// import "./_reset.scss";

import {CSSTransition} from "react-transition-group";

import {connect} from 'react-redux';


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
  let [누른탭,누른탭변경] = useState(0);
  let [스위치,스위치변경] =useState(false);

  function 입력변경함수(){
    {state변경(state++)};
  }

  useEffect(()=>{
    let timeout = setTimeout(()=>{상태변경(false)},2000);
    console.log("재렌더링");
    return ()=>{clearTimeout(timeout)}; // 컴포넌트가 종료될때 실행
  },[상태]);

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
            <Info 재고={props.재고[findItem.id]}></Info>
            <button className="btn btn-danger" onClick={()=>{
              props.재고변경([9,11,12]);
              props.dispatch({type : '항목추가', payload : {id:3,name:'새상품',quan:1}});
              history.push('/cart');

            }}>주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{
              history.goBack();
             }}>뒤로가기</button> 
          </div>
        </div>

        <Nav variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={()=>{스위치변경(false); 누른탭변경(0)}}>Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false);누른탭변경(1)}}>Option 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={()=>{스위치변경(false);누른탭변경(2)}}>Option 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>


        <CSSTransition in={스위치} classNames="wow" timeout={500}>
          <TabContent 누른탭={누른탭} 스위치변경={스위치변경}/>
        </CSSTransition>
        {/* <박스 >
             <제목 글자색="blue">안녕 난 하얀색배경에 파란제목이야</제목>
             <제목 className='red'>안녕 난 SASS를 이용한 제목이야</제목>
        </박스> */}
      </div> 
  )
}
function TabContent(props){

  useEffect(()=>{
    props.스위치변경(true);
  })

  if(props.누른탭 === 0){
    return <div>0번째 내용</div>
  } else if(props.누른탭 === 1){
    return <div>1번째 내용</div>
  } else if(props.누른탭 === 2){
    return <div>2번째 내용</div>
  }
  
}

function Info(props){
  return(
    <p>재고 : {props.재고}</p>
  )
}
function 재고알림(){
  return(
    <div className='my-alert2'>
      <p>재고가 얼마 남지 않았습니다.</p>
    </div>
  )
}

function state를props화한다(state){
  console.log(state);
  return {
      상품 : state.reducer,
      alert열렸니 : state.reducer2
  }
}



export default connect(state를props화한다)(Detail);
