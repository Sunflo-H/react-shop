import { Navbar,Container,Nav,NavDropdown,Button } from 'react-bootstrap';
import {useState} from 'react';
import Data from './data.js';

import {Link, Route, Switch} from 'react-router-dom';

import Detail from './component/Detail.js';

import './App.css';

function App() {
  
  let [shoes,shoes변경] = useState(Data);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/detail">Detail</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      


      <Route exact path={"/"}>
        <div className='jumbotron'>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </div>
        <div className="container">
          <div className="row">
            {
              shoes.map((item,index)=>{
                return(
                  <Card shoes={shoes[index]} index={index}/>
                )
              })
            }
          </div>
        </div>
      </Route>
      <Route path={"/detail"}>

        <Detail></Detail>
        
      </Route>

      <Route path={"/:id"}>  {/*:id는 /이후 아무 경로라는 뜻 */}

        <Detail></Detail>

      </Route>
      
    </div>
  );
}

function Card(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+(props.index+1)+'.jpg'} width="100%" alt={props.shoes.title}/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>      
  )
}

export default App; 
