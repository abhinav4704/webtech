const User = require('../model/user');

const getUsers = async (req, res) => {
    try {
        const allUsers = await User.findAll();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createUser = async (req, res) => {
    const user = req.body;
    try {
        const newUser = await User.create(user);
        res.status(201).json(newUser);  // Respond with the newly created user
    } catch (error) {
        res.status(400).json({ message: error.message });  // Send error response
    }
};

const findUser = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ where: { email: email } });
    res.status(200).json(user);}
    catch (error) {
        res.status(404).json({ message: error.message });}
    
}

module.exports = {createUser,getUsers,findUser}