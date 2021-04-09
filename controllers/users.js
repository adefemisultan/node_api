import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
};

export const addUser = (req, res) => {
    const user = req.body;
    // create id before creating user
    // const userId = uuidv4(); get rid of this
    // using spread operator and adding Id to each user
    // const userWithId = { ...user, id: uuidv4() }; for simplicity
    users.push({ ...user, id: uuidv4() });

    res.send(`Welcome ${user.firstName} ${user.lastName},User Created Successfully!`);
};

export const getUserById = (req, res) => {
    const { id } = req.params;

    // search for user based on id
    const userFound = users.find((user) => user.id === id);
    res.send(userFound);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with Id: ${id} deleted successfully`);
};

export const updateUser = (req, res) => {
    const { id } = req.params;

    const { firstName, lastName, age } = req.body;

    const userFound = users.find((user) => users.id === id);

    if (firstName) user.firstName = firstName;

    if (lastName) user.lastName = lastName;

    if (age) user.age = age;

    res.send(`User info updated successfully! as ${firstName} ${lastName} ${age}`)

};