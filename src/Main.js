import React, { Component } from 'react';

import Image from './Image.js';
import ImageForm from './ImageForm';

import './Main.css';

let httpCats = [
  {
    id: 1,
    link: "https://http.cat/100",
    errorCode: 100
  },
  {
    id: 2,
    link: "https://http.cat/101",
    errorCode: 101
  },
  {
    id: 3,
    link: "https://http.cat/200",
    errorCode: 200
  },
  {
    id: 4,
    link: "https://http.cat/201",
    errorCode: 201
  },
  {
    id: 5,
    link: "https://http.cat/202",
    errorCode: 202
  },
  {
    id: 6,
    link: "https://http.cat/204",
    errorCode: 204
  },
  {
    id: 7,
    link: "https://http.cat/206",
    errorCode: 206
  },
  {
    id: 8,
    link: "https://http.cat/207",
    errorCode: 207
  },
  {
    id: 9,
    link: "https://http.cat/300",
    errorCode: 300
  },
  {
    id: 10,
    link: "https://http.cat/301",
    errorCode: 300
  }
]

class Main extends Component {

  //Set the initial value of state in the constructor
  constructor(props) {
    super(props)

    this.state = {
      httpCats: httpCats
    }
    //everytime you write a custom method, you have to bind it !!!!!!!!!!!!!!!!
    this._removeImage = this._removeImage.bind(this);
    this._addImage = this._addImage.bind(this);
  }

  _removeImage(image) {
    let images = this.state.httpCats;
    //Can use split or splice here, splice needs indexOf on the array
    // images.split(image);
    images.splice(images.indexOf(image), 1);
    this.setState({images});
  }

  _addImage(image) {
    let images = this.state.httpCats;
    images.push(image);
    this.setState({images});
  }

  render() {
    //need to be able to access "this" within function within map
    //this._removeImage won't work, set self to this so it can be accessed in the function
    let self = this;
    let $catPics = this.state.httpCats.map((cat)=> {
      return (
        <Image key={cat.id} cat={cat} removeImage={()=>self._removeImage(cat)} />
      )
    });

    return(
      <div className="Images">
        <div className="container">
          <div className="row justify-content-center">
            {$catPics}
          </div>

          <div className="row justify-content-center">
            <ImageForm addImage={this._addImage}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
