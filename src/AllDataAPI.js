import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
// import { Card,Button } from 'react-bootstrap';
import AllApiDataCards from './components/AllApiDataCards';

class AllDataAPI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: process.env.REACT_APP_SERVER,
            dataList: [],
            showData: false,
        }
    }
    // Getting all Data
    componentDidMount = async () => {
        axios.get(`${this.state.url}/api`).then(result => {
            this.setState({
                dataList: result.data,
                showData: true,
            })
        })
    }

    // Add to Fav Function 

    createFav = (item) => {
        const reqBody = {
            email: this.props.auth0.user.email,
            title: item.title,
            imageUrl: item.imageUrl
        }
        axios.post(`${this.state.url}/fav`, reqBody);
    }


    render() {
        return (
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>
                <AllApiDataCards dataList={this.state.dataList} showData={this.state.showData} createFav={this.createFav} />

            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
