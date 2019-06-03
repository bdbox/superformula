import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

class OpenNow extends React.Component {
    render() {
        console.log('OpenNow.js ' + this.props.isOpen)
        return (
            <div className="filter-open-radio">
                <FormControlLabel
                    control={
                        <Checkbox 
                            checked={this.props.isOpen} 
                            onChange={()=>{this.props.filterHandler('Open Now', !this.props.isOpen)}} 
                            value="is_open" 
                            />
                    }
                    label="Open Now"
                />
            </div>
        )
    }
}

export default OpenNow