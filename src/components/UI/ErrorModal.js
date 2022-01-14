import React from "react";
import  ReactDOM  from "react-dom";
import style from './ErrorModal.module.css';
import Card from "./Card";
import Button from "./Button";

function BackDrop(props){
    return <div className={style.backdrop} onClick={props.buttonOnClick}/>    
}

function ModalOverlay(props){
    return <Card className={style.modal}>
        <header className={style.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={style.content}>
            <p>{props.message}</p>
        </div>
        <footer className={style.actions}>
            <Button onClick={props.buttonOnClick}>{props.buttonName}</Button>
        </footer>
    </Card>
}
// function ErrorModal(props){
//     return(
//         <React.Fragment>
//             <div className={style.backdrop} onClick={props.buttonOnClick}/>
//             <Card className={style.modal}>
//                 <header className={style.header}>
//                     <h2>{props.title}</h2>
//                 </header>
//                 <div className={style.content}>
//                     <p>{props.message}</p>
//                 </div>
//                 <footer className={style.actions}>
//                     <Button onClick={props.buttonOnClick}>{props.buttonName}</Button>
//                 </footer>
//             </Card>
//         </React.Fragment>
//     );
// }

function ErrorModal(props){
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop onClick={props.buttonOnClick}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} buttonOnClick={props.buttonOnClick} buttonName={props.buttonName}/>, document.getElementById('overlay-root'))}
        </React.Fragment>
    );
}

export default ErrorModal;