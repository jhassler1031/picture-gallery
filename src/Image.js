import React, { Component } from 'react';
import './Image.css';

class Image extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-12 col-md-5 picTile">
        <div className="catPic">
          <img src={this.props.cat.link} alt="HTTP Cat"/>
        </div>
        <input type="button" className="btn btn-danger" value="Remove Image" onClick={this.props.removeImage} />
      </div>
    );
  }
}

//alternate method
// function Image(props) {
//   return (
//     <div key={props.cat.id} className="col-12 col-md-6 picTile">
//       <div className="catPic">
//         <img src={props.cat.link} alt="Picture of HTTP Cat"/>
//       </div>
//     </div>
//   );
// }

export default Image;
