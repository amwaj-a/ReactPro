import React from 'react'
function Card(props) {
  return (
        <section className='card'>
            <img src={props.imges} alt="" />
            <h2>{props.name}</h2>
            <ul>
            <li>{props.lione}</li>
            <li>{props.liTow}</li>
            <li>{props.liThree}</li>
            </ul>
        </section>







  )
}

export default Card