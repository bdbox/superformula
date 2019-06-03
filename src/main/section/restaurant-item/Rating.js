import React from 'react'

class Rating extends React.Component {
    render() {
        const cname='rating rating-' + this.convertRating(this.props.rating)
        return (
            <div className={cname}>
            </div>
        )
    }

    //convert rating from number to string (e.g. convert 3.5 into 3-half)
    convertRating(rating) {
        let temp

        if (rating%1 === 0) 
            temp = rating
        else
            temp = Math.floor(rating) + '-half'
        
        if (rating <= 0)
            temp = 0
        
        if (rating >= 5)
            temp = 5
        
        return temp
    }
}

export default Rating