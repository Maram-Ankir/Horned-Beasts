import React from 'react';
import HornedBeast from './HornedBeast';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";



class Main extends React.Component {
 
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