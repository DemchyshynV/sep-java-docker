import {useEffect, useState} from "react";
import axios from "axios";

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios('api/users').then(value => value.data).then(value => setUsers([...value]))
    }, [])

    return (
        <div>
            <h1>Docker Project!!!</h1>
            {users.map(user=>(
                <div key={user.id}>
                    <div>id: {user.id}</div>
                    <div>name: {user.name}</div>
                    <div>age: {user.age}</div>
                </div>
            ))}
        </div>
    );
};

export {App};
