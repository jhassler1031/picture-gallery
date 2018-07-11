import React, { Component } from 'react';
import './ImageForm.css';

class ImageForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      link: '',
      errorCode: ''
    }

    this._handleInput = this._handleInput.bind(this);
    this._addImage = this._addImage.bind(this);
  }

  //function to bring in the input from the form and update state
  _handleInput(event) {

    let content = event.target.value;

    if (event.target.name === "link") {
      this.setState({link: content});
    }

    if (event.target.name === "errorcode") {
      this.setState({errorCode: content});
    }
  }

  _addImage(event) {
    event.preventDefault(); //This stops the page reload of the submit event

    let context = this.state;
    this.props.addImage(context); //instead of creating context var you could just call this.state, common practice to use a variable though

    this.setState({link: '', errorCode: ''})  //removes text from input after submit 
  }

  render() {
    return (
      <form onSubmit={this._addImage}>
        <div className="form-group">
          <label htmlFor="urlInput">Enter URL</label>
          { /* htmlFor must be same as ID on input */}
          <input name="link" type="text" className="form-control" id="urlInput" placeholder="Enter URL" value={this.state.link} onChange={this._handleInput}/>
        </div>

        <div className="form-group">
          <label htmlhtmlFor="errorInput">Error Code</label>
          <input name="errorcode" type="text" className="form-control" id="errorInput" placeholder="Error Code" value={this.state.errorCode} onChange={this._handleInput}/>
        </div>

          <button type="submit" className="btn btn-primary">Add HTTP Cat</button>
      </form>
    );
  }
}

export default ImageForm;
