import React, { Component } from 'react';
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
  render() {

    let catPics = httpCats.map((cat)=> {
      return (
        <div key={cat.id} className="col-12 col-md-6 picTile">
          <div className="catPic">
            <img src={cat.link} alt="Picture of HTTP Cat"/>
          </div>
        </div>
      )
    });

    return(
      <div className="Images">
        <div className="container">
          <div className="row justify-content-center">
            {catPics}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
