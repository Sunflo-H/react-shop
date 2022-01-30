import {Provider} from 'react-redux'
import {createStore} from 'redux'

import Test2 from './Test2.js';
import Test3 from './Test3.js';

let store = createStore(()=>{
    return "hi";
});

var 탭UI = { 
    info : <p>상품정보</p>,
    shipping : <p>배송관련</p>,
    refund : <p>환불약관</p>
  }

function Test(){
    var 현재상태 = 'shipping';

    return (
        <div>
            <h1>Test</h1>
            {
                탭UI[현재상태]
            }
            <Provider store={store}>
                <Test2 />
            </Provider>
            {/* <Test3 /> */}
        </div>
    )
}

export default Test