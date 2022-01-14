import React, {useState, useRef} from 'react';
import Card from '../UI/Card';
import style from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';




function AddUser(props){
    // const [userName, setUserName] = useState('');
    // const [age, setAge] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);
    const nameRef = useRef();
    const ageRef = useRef();
    

    // function userNameChangeHandler(event){
    //     setUserName(event.target.value);
    // }
    // function ageChangeHandler(event){
    //     setAge(event.target.value);
    // }

    function OnSubmitHandler(event){
        event.preventDefault();
        const userName = nameRef.current.value;
        const userAge = ageRef.current.value;
        if(userName.trim().length === 0 || userAge.trim().length === 0 )
        {
            setIsEmpty(true);
            return;
        }
        if(+userAge <1 )
        {
            setIsEmpty(true);
            return;
        }
        props.onAddUser(userName, userAge);
        nameRef.current.value='';
        ageRef.current.value='';
        // setUserName('');
        // setAge('');
    };
    function resetVal(){
        setIsEmpty(false);
    }
    
    return (
        <div>
            {isEmpty && <ErrorModal title='Error occured!' message='something went wrong' buttonName='Okey' buttonOnClick={resetVal}/>}
            <Card  className={style.input}>
                <form onSubmit={OnSubmitHandler}>
                    <label htmlFor='username'>User Name</label>
                    {/* <input id='username' type='text' value={userName} onChange={userNameChangeHandler} ref={nameRef}/> */}
                    <input id='username' type='text' ref={nameRef}/>
                    <label htmlFor='userage'>Age (Years)</label> 
                    {/* <input id='userage' type='number'  value={age} onChange={ageChangeHandler} ref={ageRef}/> */}
                    <input id='userage' type='number' ref={ageRef}/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
            
        </div>
        
    );
}

export default AddUser;