import React from 'react'
import img1 from '../images/image1.png'
import star from '../images/star.png'
const Card = (props) => {
    console.log(props)
  return (
    <section className="card-container">
        <div className="card-img">
            <img src={props.image} alt="Card Image" />
        </div>
        <div className="card-stats">
            <span>
                <img src={star} alt="" className='star'/>
            </span>
            <span>{props.rating}</span>
            <span>({props.sales}) &#8226;</span>
            <span>{props.country}</span>

        </div>
        <p>{props.quote}</p>

    </section>
  )
}

export default Card