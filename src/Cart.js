import React from 'react';
import {Table} from 'react-bootstrap'

import { connect } from 'react-redux';

function Cart(props){
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
                {
                    props.상품.map((item)=>{
                        return(
                            <tbody> 
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quan}</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        )
                        
                    })
                }
                
                </Table>
        </div>
    )
}

function state를props화한다(state){
    return {
        상품 : state
    }
}

export default connect(state를props화한다)(Cart)

// export default Cart;
