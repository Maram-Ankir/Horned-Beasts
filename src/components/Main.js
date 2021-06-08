import React from 'react';
import HornedBeast from './HornedBeast';
import Container from "react-bootstrap/Container";


class Main extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //   }
  // }
  render() {
    
    return (
<div>
    {
              this.props.HornedData.map((value) => {
            return (
                <HornedBeast
            title={value.title}
            img={value.image_url}
            keyword={value.keyword}
            description={value.description}
            horns={value.horns}
            displayModal={this.props.displayModal}
          />
            );
          })}
</div>
);
}
}
  
export default Main;