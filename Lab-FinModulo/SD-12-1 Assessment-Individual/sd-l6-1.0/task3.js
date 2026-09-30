// Task 3: addUser()
import { getServerURL } from './task1.js';

export async function addUser(first_name, last_name, email) {
    const response = await fetch(`${getServerURL()}/users`);
    const users = await response.json();

    const maxId = users.reduce((max, u) => Math.max(max, Number(u.id)), 0);
    const newUser = {
        id: maxId + 1,
        first_name,
        last_name,
        email
    };

    await fetch(`${getServerURL()}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
    });
}