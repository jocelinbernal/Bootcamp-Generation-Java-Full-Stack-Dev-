// Task 4: delUser()
import { getServerURL } from './task1.js';

export async function delUser(id) {
    await fetch(`${getServerURL()}/users/${id}`, {
        method: 'DELETE'
    });
}