import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import HornedData from './components/Data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './components/SelectedBeast';



class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
    selectedBeast:HornedData,
      showModel:false
    }
  }

  displayModal =(title)=> {
    const selectedBeast2 = HornedData.find((item)=> {
     if(title===item.title){
       return item
     }
    })
    this.setState ({
      showModel:true,
      selectedBeast:selectedBeast2

    })
  }
closeModal=() =>{
  this.setState ({
    showModel:false,
})
}
  render() {

    return (
      <div>
        <Header />
        <Main 
        HornedData={HornedData}
      displayModal={this.displayModal}
         />
         <SelectedBeast
         selectedBeast={this.state.selectedBeast}
         show={this.state.showModel}
         close={this.closeModal}
         />

        <Footer />
      </div>
    )
  }
}

export default App;