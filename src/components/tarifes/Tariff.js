import React from 'react'

export default function Tariff(props) {
    return (
        <div className="main">
            <div className="block">
            <div className="title">{props.title}</div>

<div className="price"> {props.price}</div>
<div className="unlim"> {props.unlim}</div>
<div className="min"> {props.min}</div>
{props.mintitle}
<div className="gb"> {props.gb} </div>
{props.gbtitle}
</div>
        </div>
    )
}
