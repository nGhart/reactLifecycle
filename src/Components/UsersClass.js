import React, { Component } from 'react'
import { Container, ListGroup, Row } from 'react-bootstrap';

export class UsersClass extends Component {
    constructor() {
        super();
        this.state = { users: [] }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((user) => user.json())
            //.then((data) => console.log(data))
            .then((data) => this.setState({ users: data }))
    }
    render() {
        return (
            <Container 
            className='main'>
                <Row 
                className='userSection'>
                    <h1>User Detail
                        <span> with Class Component</span>
                    </h1>
                    {this.state.users.map((item) => {
                        return (
                            <ListGroup>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start userContainer">
                                    <div 
                                    className="ms-2 me-auto">
                                        <div 
                                        className="fw-bold">{item.name}
                                        </div>
                                        {item.email}
                                    </div>
                                    <span >
                                        {item.username}
                                    </span>
                                </ListGroup.Item>
                            </ListGroup>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default UsersClass
