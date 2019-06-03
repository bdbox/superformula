import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

class Categories extends React.Component {    
    render() {
        let categories = this.props.categories
        let categoryValue = this.props.categoryValue
        return (
            <div className="inline">
                <FormControl>
                    <InputLabel htmlFor="select-multiple-checkbox">Category</InputLabel>
                    <Select
                        multiple
                        value={this.props.categoryValue}
                        onChange={(event)=>{this.props.filterHandler('Category', event.target.value); console.log('event ' + event.target.value)}} 
                        renderValue={selected => selected.join(', ')}
                        //renderValue={selected => "category"}
                    >
                    {categories.map(cat => (
                        <MenuItem key={cat.alias} value={cat.alias}>
                            <Checkbox checked={categoryValue.indexOf(cat.alias) > -1} />
                            <ListItemText primary={cat.title} />
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </div>
        )
    }
}

export default Categories