import React from 'react'
import Image from '../../main/section/restaurant-item/Image'

class ImageRoll extends React.Component {
    render() {
        let photos = this.props.business.photos ? this.props.business.photos : []
        return (
            <div className="image-roll">
                {photos.map((photo)=><Image src={photo} key={photo} />)}
            </div>
        )
    }
}

export default ImageRoll