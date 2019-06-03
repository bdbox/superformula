import React from 'react'
import ReviewItem from './review-item/ReviewItem'

class Section extends React.Component {
    render() {
        let reviews=this.props.reviews
        return (
            <div>
                <h3 className="review-count">{reviews.total} Reviews</h3>
                <div>
                    {reviews.reviews.map(review=><ReviewItem 
                                                    review={review}
                                                    key={review.id} 
                                                    />)}
                </div>
            </div>
        )
    }
}

export default Section