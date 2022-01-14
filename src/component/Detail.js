import React,{useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';

function Detail(props){
  let history = useHistory(); //방문기록을 담아놓은 obj
  let {id} = useParams();
  let findItem =props.shoes.find(item=>{
    return id == item.id;
  })

  return (
      <div className="container">
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
      </div> 
  )
}

export default Detail;

// 순서가 black , red 순서면 
// detail/0 = black , detail/1 = red
// 상품 정렬
// 순서가 red , black 순서면 
// detail/0 = red, detail/1 = black 이렇게 되버리고
// 매번 정렬될때마다 주소와 데이터의 매칭이 달라지네
// 보여지는 순서에 상관 없이 id와 칼라를 고정해서
// 0은 항상 balck에 가고싶고
// 1은 항상 red에 가고싶어
//