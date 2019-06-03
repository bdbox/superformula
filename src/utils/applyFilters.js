import React from 'react'

function applyFilters(businesses, filters) {
    console.log('apply filters')
    let filteredBusinesses = []
    
    //filter Open Now
    filteredBusinesses = businesses.filter(business=>{
        if (filters.isOpen)
            return business.is_closed === false
        else
            return true
    })

    //filter Price
    filteredBusinesses = filteredBusinesses.filter((business)=>{
        if (filters.price.length > 0) {
            return filters.price.indexOf(business.price) > -1
        } else 
            return true
    })

    //filter Category
    filteredBusinesses = filteredBusinesses.filter((business)=>{
        if (filters.categoryValue.length > 0) {
            return filters.categoryValue.indexOf(business.categories[0].alias) > -1
        } else 
            return true
    })

    return filteredBusinesses
}

export default applyFilters