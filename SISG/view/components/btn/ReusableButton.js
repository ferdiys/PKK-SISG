import React from 'react';

const ReusableButton = (props) => {
 return (
  <button className={props.className} onClick={props.onClick} style={{fontSize: 16, fontWeight:500}}> {props.buttonText} </button> 
)}
export default ReusableButton;