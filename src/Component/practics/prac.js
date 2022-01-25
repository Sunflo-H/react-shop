import React , {useContext, useEffect, useState} from 'react';
import {Row,Col,Container,Button,Nav} from 'react-bootstrap';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

import style from './prac.module.css';
import Data from '../../data';
import axios from 'axios';
import { useParams } from 'react-router-dom';

let shoesContext = React.createContext();


function Prac(){

    let [shoes,setShoes] = useState(Data);
    let [pracShoes,setPracShoes] = useState(0);
    let [btnState,setBtnState] = useState(false);
    let [input,setInput] =useState("인풋을 입력하면 여기가 바뀌어요");

    
    
    useEffect(()=>{
        axios.get("https://codingapple1.github.io/shop/data2.json")
        .then((result)=> {
            console.log("맨첨에 실행 되겠지");
            setPracShoes(result.data);
        })
        .catch(()=>{
            console.log("실패");
        });
    },[btnState]);
    // 2번째 데이터를 불러와서 prac_shoes에 넣을거야
    
    
    return(
        <div >
            <Route path="/prac" exact>
                <Container>
                    <shoesContext.Provider value={shoes}>
                          <Card />
                    </shoesContext.Provider>
                    {/* {
                        btnState ? (<Row md={3}>
                        {
                            pracShoes.map((item,index)=>{
                                return (
                                    <Card shoes={item} key={item.id}/>
                                )
                            })
                        }
                    </Row>) : null
                    } */}
                    
                    <button onClick={()=>{setBtnState(!btnState)}}>더 보기</button>
                    
                </Container>
                <div className="container">
                <div className="row">
                    <h1>===========hi===========</h1>
                    <input type="text" onChange={(e)=>{setInput(e.target.value)}}></input>
                    <div style={{color:'red'}}>{input}</div>
                </div>
                </div>  
            </Route>
            <Route path="/prac/detail/:id">
                <Detail shoes={shoes}/>
            </Route>
        </div>
    )
}
function Card(){
    let shoesAll = useContext(shoesContext);
    let shoes=shoesAll[0];
    console.log(shoesAll);
    return(
        <Row md={3} >
            {
                shoesAll.map(shoes=>{
                    return(
                        <Col>
                            <img src={`https://codingapple1.github.io/shop/shoes${(shoes.id)+1}.jpg`} width="100%" />
                            <h4>{shoes.title}</h4>
                            <p>{shoes.content}</p>
                        </Col>
                    )
                    
                })
            }
        </Row>
    )
}

function Detail(props){
    let {id} = useParams();
    let findShoes = props.shoes.find((item)=>{
        console.log(id);
        return item.id == id;
    })

    useEffect(()=>{

    })

    return(
        <div>
            <div className={style.myalert}>재고가 얼마 남지 않았습니다.</div>
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+(findShoes.id+1)+".jpg"} width="100%" />
                </div>
                <div className="col-md-6 mt-4" style={{border:'1px solid black'}}>
                    <h4 className="pt-5" style={{border:'1px solid black'}}>{findShoes.title}</h4>
                    <p style={{border:'1px solid black'}}>{findShoes.content}</p>
                    <p style={{border:'1px solid black'}}>{findShoes.price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div>
    )
}

// function Detail_redux(){

// }
export default Prac;