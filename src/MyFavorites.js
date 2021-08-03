import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
// import { Card,Button } from 'react-bootstrap';
import UpdateFormModal from './components/UpdateFormModal';
import AllFavDataCards from './components/AllFavDataCards';

class MyFavorites extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: process.env.REACT_APP_SERVER,
      dataList: [],
      showData: false,
      index: 0,
      showModal: false,
      colorTitle: '',
      colorImg: '',
    }
  }
  // Getting all Data from database
  componentDidMount = async () => {
    const { user } = this.props.auth0;
    axios.get(`${this.state.url}/fav?email=${user.email}`).then(result => {
      this.setState({
        dataList: result.data,
        showData: true,
      })
    })
  }


  //Delete Function 

  deleteData = (index) => {
    const { user } = this.props.auth0;
    axios.delete(`${this.state.url}/fav/${index}/?email=${user.email}`).then(result => {
      this.setState({
        dataList: result.data,
        showData: true,
      })
    })
  }

  //Update Function

  updateData = async (event) => {
    event.preventDefault();
    // const {user}=this.props.auth0;
    const reqBody = {
      email: this.props.auth0.user.email,
      title: event.target.title.value,
      imageUrl: event.target.imageUrl.value
    }
    axios.put(`${this.state.url}/fav/${this.state.index}`, reqBody).then(result => {
      this.setState({
        dataList: result.data,
      })
    })
    this.componentDidMount();
  }

  // Show Modal Function 

  handleShow = (index) => {
    this.setState({
      index: index,
      showModal: true,
      colorTitle: this.state.dataList[index].title,
      colorImg: this.state.dataList[index].imageUrl,
    })

  }

  //Close Modal Function

  handleClose = () => {
    this.setState({
      showModal: false,
    })
  }


  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        <AllFavDataCards showData={this.state.showData} dataList={this.state.dataList} deleteData={this.deleteData} handleShow={this.handleShow} />

        <>
          <UpdateFormModal dataList={this.state.dataList} handleClose={this.handleClose} handleShow={this.handleShow} updateData={this.updateData} colorImg={this.state.colorImg} colorTitle={this.state.colorTitle} showModal={this.state.showModal} />
        </>
      </>
    )
  }
}

export default withAuth0(MyFavorites);

