const db = require('../../database/database.connect');

module.exports.create = async(user) => {
    const {name, surname} = user;
    const newClient = await db.query('INSERT INTO person(name, surname) values ($1, $2) RETURNING *', [name, surname]);
    return newClient;
}

module.exports.getAll = async() => {
    const users = await db.query('SELECT * FROM person');
    return users;
}

module.exports.getOne = async(id) => {
    if(!id) throw new Error('Id indefined');
    const user = await db.query('SELECT * FROM person where id = $1', [id]);
    return user;
}

module.exports.update = async(user) => {
    const {id, name, surname} = user;
    const updUser = await db.query('UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *', [name, surname, id]);
    return updUser;
}

module.exports.delete = async(id) => {
    if(!id) throw new Error('Id indefined');
    await db.query('DELETE FROM person where id = $1', [id]);
}