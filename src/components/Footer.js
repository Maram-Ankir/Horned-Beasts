import React from 'react'; 

class Footer extends React.Component {


    render() { 
        const myName = 'Maram Ankir';
        return (

            <footer>
                <span>Made by {myName}</span>
            </footer>

        )
    }
}


export default Footer;