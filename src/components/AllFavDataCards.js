import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export class AllFavDataCards extends Component {
    render() {
        return (
            <div>
                {this.props.showData && this.props.dataList.map((item, index) => {
                    return (
                        <Card style={{ width: '18rem', display: 'inline-block' }}>
                            <Card.Img variant="top" src={item.imageUrl} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>

                                <Button onClick={() => { this.props.deleteData(index) }} variant="primary">Delete</Button>
                                <Button onClick={() => { this.props.handleShow(index) }} variant="primary">Update</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        )
    }
}

export default AllFavDataCards
