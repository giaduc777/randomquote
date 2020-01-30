import React, {Component} from 'react';
import classes from './ButtonContainer.css';

class ButtonContainer extends Component{

    render(){

        let twitter = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
        
        return(
            <ul className={classes.ButtonContainer}>
                <li className={classes.mediaLinkBox}><a className={classes.mediaLink} href={twitter + '"' + this.props.content.quote + 
                '" ' + this.props.content.author} target="_blank" 
                rel="noopener noreferrer">
                <i className={"fa fa-twitter"}></i>
                </a><a><i className={"fa fa-facebook-square"}></i></a>
                </li>
                
                <li><button className={classes.NewQuote}
                 onClick={this.props.buttonHandler}>New Quote</button></li>
            </ul>
        )
    }
}

export default ButtonContainer;