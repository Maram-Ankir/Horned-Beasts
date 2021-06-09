import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import SelectedBeast from './SelectedBeast';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countVotes: 0,
        }
    }

    voting = () => {
        let value = this.state.countVotes;
        this.setState({ 
            countVotes: value += 1 })
      
        // this.setState({
        //     countVotes: this.state.countVotes++,
        // })
    }

    displayModal = ()=>{
        this.props.displayModal(this.props.title)
    }

    render() {
        return (
            <>

                <Card style={{ width: '18rem' }} onClick={this.displayModal}>
                    <Card.Img variant="top" src={this.props.img} onClick={this.voting} />
                    <Card.Body>
                        <Card.Title> {this.props.title}</Card.Title>
                        <Card.Text> {`❤️ ` + this.state.countVotes}</Card.Text>
                        <Card.Text> {this.props.description}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>

                      
                    </Card.Body>
                </Card>
                </>     
        );
    }
}

export default HornedBeast;