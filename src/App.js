import { Navbar,Container,Nav,NavDropdown,Button } from 'react-bootstrap';
import React,{useState, useContext} from 'react';
import axios from 'axios';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Data from './data.js';
import {Link, Route, Switch} from 'react-router-dom';
import Detail from './Detail.js';
import Cart from './Cart.js';
import Prac from './Component/practics/Prac.js';
import Header from './Component/Header/index.js'

import './App.css';

let 재고context = React.createContext(); //공유할 범위 생성

let store = createStore(()=>{
  return Data;
})

function App() {
  
  let [shoes,shoes변경] = useState(Data);
  let [로딩중,로딩중변경] = useState(false);
  let [재고,재고변경] = useState([10,11,12]);

  function sortItem(){
    let temp = [...shoes];
    let t=temp[0];
    temp[0]=temp[1];
    temp[1]=t;
    shoes변경(temp);
  }
  
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/test">Test</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path={"/"}>
          <div className='jumbotron'>
            <h1 className='test'>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </div>
          <div className="container">
            <재고context.Provider value={재고}>
              <div className="row">
                {
                  shoes.map((item,index)=>{
                    return(
                        <Card shoes={item} index={index} key={index}/>
                    )
                  })
                }
              </div>
            </재고context.Provider>
            <button className="btn btn-primary" onClick={()=>{
              로딩중 ? console.log("로딩중") : 
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                let newData = [...shoes,...result.data];
                shoes변경(newData);
                console.log("데이터 가져오기 성공");
              })
              .catch(()=>{
                console.log("실패했어요~~!");
              })
              
            }}>더보기</button>
            <button onClick={sortItem}>정렬버튼(사실스위치..)</button>
          </div>
          
        </Route>
      
        <Route path={"/detail/:id"}>

          <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}></Detail>

        </Route>

        <Route path={"/detail"}>

          <h1>디테일 페이지는 디테일/숫자로 이동했습니다.</h1>

        </Route>

        <Route path={"/cart"}>
          <Cart />
        </Route>

        <Route path={"/prac"}>
          <Provider pracStore={store}> {/* props를 사용하지 않고 prac.js에 store 전달 */}
            <Prac />
          </Provider>
        </Route>

        <Route path={"/header"}>
          <Header />
        </Route>

        <Route path={"/:id"}>  {/*:id는 /이후 아무 경로라는 뜻 */}

          <h1>아무거나 적으면 이거 보여주셈</h1>

        </Route>

        
      </Switch>
      
    </div>
  );
}

function Card(props){
  let 재고 = useContext(재고context)
  return (
    <div className="col-md-4" >
      <Link to={"/detail/"+props.shoes.id} style={{textDecoration : 'none'}}>
                  
      <img src={'https://codingapple1.github.io/shop/shoes'+(props.shoes.id+1)+'.jpg'} width="100%" alt={props.shoes.title}/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      
      {재고}
      </Link>
    </div>      
  )
}



export default App; 
