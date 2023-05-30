import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, ListGroup, Row } from 'react-bootstrap'; 

function UsersFunction() {
    const [users, setUser] = useState([])
    useEffect (() => {
axios.get("https://jsonplaceholder.typicode.com/users")
.then((user)=>{setUser(user.data)})
.catch((err)=>{console.log(err);})
    }, [])
    return (
        <Container 
        className='main'>
                <Row 
                className='userSection'>
                    <h1>User Detail
                        <span> with Functional Component</span>
                    </h1>
                    {users.map((item) => {
                        return (
                            <ListGroup>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start userContainer">
                                    <div 
                                    className="ms-2 me-auto">
                                        <div 
                                        className="fw-bold">{item.name}</div>
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

export default UsersFunction



