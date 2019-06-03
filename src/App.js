import React from 'react'
import Main from './main/main'
import client from './utils/client'


class App extends React.Component {  
  constructor(props) {
    super(props)
    this.state = {
        businesses: [],
        displayNumber: 8,
        categories: [],
        openDetail: false,
        filters: {
          isOpen: false,
          price: [],
          categoryValue: []
        }
    }
  }

  //
  componentDidMount() {
    //search businesses, limit = 50
    client.search({
      location: 'las vegas, nv',
      limit: 50
    }).then(response => {
      const businesses = response.jsonBody.businesses
          this.setState({
              businesses: businesses
          })            
          console.log(this.state.businesses)

          this.extractCategories(businesses)
    }).catch(e => {
      console.log(e)
    })

    //get all categories, this API will return 1576 categories.
    client.allCategories().then(response => {
      const categories = response.jsonBody.categories
          /*
          this.setState({
              categories: categories
          })
          */            
    }).catch(e => {
      console.log(e)
    })

  }

  //get categories from returned business results
  extractCategories(businesses) {
    let categories = businesses.map(business => business.categories[0])
    this.setState({
      categories: this.removeDuplicate(categories)
    })
    console.log(this.state.categories)
  }

  //remove duplicate objects from array
  removeDuplicate(arr) {
    let result = []
    result = arr.reduce(function(previous, current) {
      var object = previous.filter(object => object.alias === current.alias);
      if (object.length == 0) {
        previous.push(current);
      }
      return previous;
    }, []);
    return result
  }

  //handler: click load more button
  handleLoadMore() {
    const INCREASED_NUMBER = 8
    let displayNumber = this.state.displayNumber
    let length = this.state.businesses.length

    if (displayNumber < length) {
      this.setState({
        displayNumber: (displayNumber + INCREASED_NUMBER) >= length ? length : displayNumber + INCREASED_NUMBER
      })
    }
  }

  //handler: filters
  handleFilters(filterType, filterValue) {
    if (filterType === 'Open Now') {
      this.setState(Object.assign(this.state.filters, {isOpen: filterValue}))
    } else if (filterType === 'Price') {
      this.setState(Object.assign(this.state.filters, {price: filterValue}))
    } else if (filterType === 'Category') {
      this.setState(Object.assign(this.state.filters, {categoryValue: filterValue}))
    } else {
      this.setState(Object.assign(this.state, {filters: {isOpen: false, price: [], categoryValue: []}}))
    }

    console.log(this.state)
  }

  //handler: show/hide detail
  handleDetail(value) {
    this.setState(Object.assign(this.state, {openDetail: value}))
  }

  //render
  render() {
    return (
      <Main 
        data={this.state}
        loadMoreHandler={this.handleLoadMore.bind(this)}
        filterHandler={this.handleFilters.bind(this)}
        detailHandler={this.handleDetail.bind(this)}
        />
    )
  }
}

export default App