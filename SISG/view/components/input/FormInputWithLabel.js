import React from 'react'

const FormInputWithLabel = (props) => {
    return (
        <div id="form-input-labels">
            <div className="form-group mb-2">
                <label >{props.label}</label>
                <input type={props.type} placeholder={props.placeholder} className={props.className} value={props.value} name={props.name} onChange={(e)=>props.onChange(e)}></input>
            </div>
        </div>
    )
}

export default FormInputWithLabel;

// style={this.props.label == undefined ? { display: 'none' } : {}}