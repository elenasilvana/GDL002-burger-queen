import React, {Component} from 'react';

//class SignUpForm extends Component {

class ApiComponent extends Component {

        constructor(props){
            super(props);
            this.state = { apiResponse: ''};
        }

        callAPI(){
            fetch("http://localhost:8080/order")
            .then(res => res.text())
            .then(res => this.setState({apiResponse:res}));
        }

    componentWillMount(){
        this.callAPI();
    }
}

export default ApiComponent;