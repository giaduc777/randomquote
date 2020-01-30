import React, {Component} from "react";
import classes from './Frame.css';
import axios from 'axios';
import Quote from '../Quote/Quote';
import ButtonContainer from '../ButtonContainer/ButtonContainer';

class Frame extends Component{

  state = {
    quote: '',
    author: '',
    color: 1
  }

  componentDidMount(){

    axios.get('https://api.quotable.io/random')
    .then(res => {
       // console.log(res.data.content);
        this.setState({
            quote: res.data.content,
            author: res.data.author
        })
    })
  }

  getColor = () => {

    let prevColor = this.state.color;

    let newColor = Math.floor(Math.random()  * 7 + 1);

    if(prevColor === newColor && prevColor !== 7){
       newColor++;
    }
      
    else if(prevColor === newColor && prevColor === 7){
      newColor--;
    }

    this.setState({
      color: newColor
    })
    
  }

  buttonHandler = () => {

    this.getColor();

    axios.get('https://api.quotable.io/random')
    .then(res => {
        this.setState({
            quote: res.data.content
        })
    })
  }

  render(){

    return(
      <div className={[classes.Frame, classes['color' + this.state.color]].join(' ')}>
        <Quote content={this.state} />
        <ButtonContainer content={this.state} 
          buttonHandler={() => this.buttonHandler()} />
      </div>
    )
  }
}

export default Frame; 