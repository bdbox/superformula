import React from 'react'
import applyFilters from '../../utils/applyFilters'
import RestaurantItem from './restaurant-item/RestaurantItem'
import DetailView from '../../detail-view/DetailView'

class Section extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            businessId: null
        }
    }

    render() {
        let data = this.props.data        
        let filteredBusinesses = applyFilters(data.businesses, data.filters)
        let loadMoreBtn = (data.displayNumber < filteredBusinesses.length) ?
                            (<button onClick={this.props.loadMoreHandler}>Load More</button>) : null
        let displayedBusinesses = filteredBusinesses.slice(0, data.displayNumber)
        return (
            <div>
                <h2>All Restaurants</h2>
                <div className="main-section">
                    {displayedBusinesses.map(business => <RestaurantItem 
                                                            business={business} 
                                                            key={business.id} 
                                                            detailOpenHandler={()=>{this.props.detailHandler(true)}} 
                                                            getBusinessId={this.getBusinessId.bind(this)}
                                                            />
                                                            )}
                </div>       
                <div className="load-more">
                    {loadMoreBtn}    
                </div>         
                <DetailView 
                    open={data.openDetail}
                    detailHandler={this.props.detailHandler}
                    businessId={this.state.businessId}
                     />
            </div>
        )
    }

    //get business id when clicking load more
    getBusinessId(businessId) {
        console.log('business id ' + businessId)
        this.setState({businessId: businessId})
    }

}

export default Section