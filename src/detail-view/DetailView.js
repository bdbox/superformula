import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import RestaurantName from '../main/section/restaurant-item/RestaurantName'
import Rating from '../main/section/restaurant-item/Rating'
import Cuisine from '../main/section/restaurant-item/Cuisine'
import PriceRange from '../main/section/restaurant-item/PriceRange'
import OpenClosed from '../main/section/restaurant-item/OpenClosed'
import Map from './map/Map'
import ImageRoll from './map/ImageRoll'
import Section from './section/Section'
import client from '../utils/client'

class DetailView extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            business: {
                categories: [],
                location: {
                    display_address: []
                }
            }, 
            reviews:{
                reviews:[]
            }
        }
    }

    render() {
        let business = this.state.business
        let map = business.coordinates?<Map center={business} zoom={14} />:null
        return (
            <Dialog fullScreen onClose={()=>true} onRendered={this.loadData.bind(this)} open={this.props.open}>
                <Toolbar>
                    <IconButton edge="start" onClick={()=>{this.props.detailHandler(false)}} >
                        X
                    </IconButton>
                </Toolbar>
                <div className="detail-view">
                    <RestaurantName name={business.name} />
                    <Rating rating={business.rating} />
                    <div className="one-row">
                        <div className="lt">
                            <Cuisine category={business.categories[0]} /> • <PriceRange pr={business.price} />
                        </div>
                        <OpenClosed is_close={business.is_close} />
                    </div>
                    <div className="map-row">
                        <div className="lt"> 
                            {map}
                            <div className="map-address">{business.location.display_address.join(", ")}</div>
                        </div>
                        <div><ImageRoll business={business} /></div>
                    </div>
                    <Section reviews={this.state.reviews} />
                </div>
            </Dialog>
        )
    }

    //
    loadData() {
        console.log('update.....')
        let businessId = this.props.businessId
        if (this.props.open)
            this.fetchBusiness(businessId)
        
    }

    //fetch business data from api
    fetchBusiness(businessId) {

        //search business by id
        client.business(businessId).then(response => {
        let business = response.jsonBody
            this.setState({
                business: business
            })            
            console.log(this.state.business)
        }).catch(e => {
            console.log(e)
        })

        //fetch reviews
        client.reviews(businessId).then(response => {
            let reviews = response.jsonBody
            this.setState({
                reviews: reviews
            })
            console.log(this.state.reviews);
          }).catch(e => {
            console.log(e);
          });

    }
}

export default DetailView