import React, { useState, useEffect } from 'react';
import API from '../api'
import { Container, Table } from 'reactstrap';


export default function PersonList() {

    const [persons, setPersons] = useState([]);

    useEffect(() => {
        API.get('users')
            .then((resultado) => {
                setPersons(resultado.data);
            }, [])
        });

        const handleClickRow = (event) => {
            console.log(event.target.getAttribute('data-item'));
        }    

    return (
        // <ul>
        //     {persons.map((person) => <li>{person.name}</li>)}
        // </ul>
        <Container>          
            <Table striped hover>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Username
                        </th>
                        <th>
                            E-mail
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((person) => <tr data-item={person.name} onClick={handleClickRow}><th>{person.id}</th><td>{person.name}</td><td>{person.username}</td><td>{person.email}</td></tr>)}
                </tbody>
            </Table>
        </Container>
    );
}