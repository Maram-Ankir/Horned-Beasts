import React from 'react';
import HornedBeast from './HornedBeast';



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