import React from 'react';
import {Table} from 'react-bootstrap'

import { connect, useDispatch, useSelector } from 'react-redux';



function Cart(props){
   
    let 상품 = useSelector((state)=> state.reducer ) // state : redux 안에 있던 모든 state
    let dispatch = useDispatch();

    return(
        <div>
            <Table striped bordered hove >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody> 
                {
                    상품.map((item,i)=>{

                        return(
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quan}</td>
                                    <td>
                                        <button onClick={()=>{ dispatch({type : '수량증가', payload : {id : item.id}}) }}>+</button>
                                        <button onClick={()=>{ dispatch({type : '수량감소' , payload : {id : item.id}}) }}>-</button>
                                    </td>
                                </tr>
                        )
                        
                    })
                }
                </tbody>
                
                </Table>
                {
                    props.alert열렸니 
                    ?  (<div className='my-alert2'>
                        <p>지금 구매하시면 신규할인 20%</p>
                        <button onClick={()=>{props.dispatch( {type : '닫기'} )}}>닫기</button>
                        </div>)
                    : null
                }
                
        </div>
    )
}
// function state를props화한다(state){
//     console.log(state);
//     return {
//         상품 : state.reducer,
//         alert열렸니 : state.reducer2
//     }
// }



// export default connect(state를props화한다)(Cart)

export default Cart;
