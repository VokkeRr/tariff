import React from 'react'

export default function Tariff(props) {
    return (
        <div>
<h2>{props.title}</h2>
<h3>{props.price}</h3>
<h4>{props.unlim}</h4>
<h4>{props.min}</h4>
<h4>{props.mintitle}</h4>
<h4>{props.gb}</h4><br/>
<h4>{props.gbtitle}</h4>
        </div>
    )
}
