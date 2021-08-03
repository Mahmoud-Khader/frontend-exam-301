import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export class AllFavDataCards extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#8c8181' }}>
                {this.props.showData && this.props.dataList.map((item, index) => {
                    return (
                        <Card style={{ width: '18rem', display: 'inline-block',margin:'20px' }}>
                            <Card.Img variant="top" src={item.imageUrl} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>

                                <Button onClick={() => { this.props.deleteData(index) }} variant="danger">Delete</Button>
                                <Button onClick={() => { this.props.handleShow(index) }} variant="success">Update</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        )
    }
}

export default AllFavDataCards
