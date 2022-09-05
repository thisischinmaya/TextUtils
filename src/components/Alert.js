import React from 'react'

export default function Alert(props) {
    let captilaze=(word)=>
    {
        let c1=word.toLowerCase();
        return c1.charAt(0).toUpperCase()+c1.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
                <strong>{captilaze(props.alert.typ)}</strong>  :{props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        
    )
}
