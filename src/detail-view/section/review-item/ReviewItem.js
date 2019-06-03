import React from 'react'
import Rating from '../../../main/section/restaurant-item/Rating'
import Image from '../../../main/section/restaurant-item/Image'

class ReviewItem extends React.Component {
    render() {
        let review = this.props.review
        return (
            <div className="review-item">
                <div className="lt">
                    <Image src={review.user.image_url} />
                </div>
                <div className="mid">
                    <div className="user-name">{review.user.name}</div>
                    <div className="review-date">{new Date(review.time_created).toLocaleDateString()}</div>
                </div>
                <div className="rt">
                    <Rating rating={review.rating} />
                    <p>{review.text}</p>
                </div>
            </div>
        )
    }
}

export default ReviewItem