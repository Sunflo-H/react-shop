import {connect} from 'react-redux'
import {useState, useEffect, useRef} from 'react';

let useDidMountEffect = (func, deps)=>{
    const didMount = useRef(false);

    useEffect(()=>{
        if(didMount.current) func();
        else didMount.current = true;
    },deps);
};

function Test2(props){
    let [count, setCount] = useState(0);
    let [age, setAge] = useState(20);

    useDidMountEffect(()=>{
        if ( count < 3 ) {
            setAge(age+1);
        }
    },[count])
    // console.log(props);
    return (
        <div>
            <h1>Test2입니데이 {props.data}</h1>
            <div>안녕하십니까 전 {age}</div>
            <button onClick={()=>{
                
                setCount(count+1);
                

                }}>누르면한살먹기</button>
        </div>
    )
}

function sp(state){
    console.log(state);
    return {
        data : state
    }
}

export default connect(sp)(Test2);