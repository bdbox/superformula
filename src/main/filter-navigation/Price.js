import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";

class Price extends React.Component {

  render() {
    const priceOptions = ["$", "$$", "$$$", "$$$$"]
    return (
      <div className="inline">        
        <FormControl>
          <InputLabel htmlFor="select-multiple-checkbox">Price</InputLabel>
          <Select
            multiple
            value={this.props.price}
            onChange={(event)=>{this.props.filterHandler('Price', event.target.value)}}
            renderValue={selected => selected.join(", ")}
          >
            {priceOptions.map(op => (
              <MenuItem key={op} value={op}>
                <Checkbox checked={this.props.price.indexOf(op) > -1} />
                <ListItemText primary={op} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    )
  }
}

export default Price;
