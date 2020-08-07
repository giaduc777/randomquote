import React, {Component} from 'react';
import classes from './Quote.css';

class Quote extends Component{
    
    render(){
        return(
            <div className={classes.container}>
               <div className={classes.quote}>"{this.props.content.quote}"</div>
               <div className={classes.author}>--{this.props.content.author}</div>
            </div>
        )
    }
}

export default Quote;