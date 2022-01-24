import React , {useState} from 'react';
import {Row,Col,Container,Button,Nav} from 'react-bootstrap';
import style from './prac.module.css';
import Data from '../../data';
import axios from 'axios';



function Test(){

    let [shoes,setShoes] = useState(Data);
    let [prac_shoes,setPrac_shoes] = useState(0);
    // 2번째 데이터를 불러와서 prac_shoes에 넣을거야
    axios.get("https://codingapple1.github.io/shop/data2.json")
    .then((result)=> {
        setPrac_shoes(result.data);
    })
    .catch(()=>{
        console.log("실패");
    });
    
    return(
        <div >
            <Container>
                <Row md={3}  >
                    {
                        shoes.map((item,index)=>{
                            return(
                                <Detail shoes={item} key={item.id}/>        
                            )
                        })    
                    }
                </Row>
                <Row md={3}>

                </Row>
            </Container>
            <div className="container">
              <div className="row">
                <h1>hi</h1>
              </div>
            </div>  
        </div>
    )
}
function Detail(props){
    return(
        <Col className={style.col} >
            <img src={`https://codingapple1.github.io/shop/shoes${(props.shoes.id)+1}.jpg`} width="100%" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
        </Col>
    )
    
}

// function Detail_redux(){

// }
export default Test;