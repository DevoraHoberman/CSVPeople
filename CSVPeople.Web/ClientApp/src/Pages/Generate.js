import React, {useState} from 'react';
import axios from 'axios';
import produce from 'immer';

const Generate = () => {
const [amount, setAmount] = useState(0);
const onButtonClick = async () =>{
    window.location.href = `/api/csv/generate?amount=${amount}`;

}
const onTextChange = e =>{
    const nextState = produce(amount, draft =>{
        draft[e.target.name] = e.target.value;
    });
    setAmount(nextState);
}
    return ( <div className='container'>
<div className='row col-md-4 offset-md-5'>
    <input type='text' placeholder='Amount' name='amount' className='form-control' onChange={e => setAmount(e.target.value)}/>
    <button className='btn btn-primary' onClick={onButtonClick}>Generate</button>
</div>
    </div> );
}
 
export default Generate;