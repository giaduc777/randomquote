import React, {Component} from 'react';
import classes from './Quote.css';


class Quote extends Component{
    
    render(){

        return(
            <div className={classes.Quote}>
               <h2>"{this.props.content.quote}"</h2>
               <h3>--{this.props.content.author}</h3>
            </div>
        )
    }
}

export default Quote;