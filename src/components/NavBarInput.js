import React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom";

class NavBarInput extends Component {

    constructor(props) {
        super(props)
        this.textInput = null
        this.setTextInputRef = element => {
            this.textInput = element
        }
        this.focusTextInput = () => {
            if (this.textInput) this.textInput.focus()
        }
    }

    handleChange = (event) => {
        /*
         * TC: This will be used later on to handle changes within the search bar.
         * */
        //this.props.onChange(event)
    }

    componentDidMount() {
        this.focusTextInput()
    }

    activePage() {
        //$('.topnav .a').removeClass('active');
        //$(this).addClass('active');
    }


    render() {
        return (
            <div className="topnav">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <a href="/" onClick={this.activePage()} ><i className="fa fa-fw fa-home"></i> Home</a>
                <a href="/News"><i className="fa fa-fw fa-pencil"></i> News & Information</a>
            </div>
        )
    }
}

export default NavBarInput;