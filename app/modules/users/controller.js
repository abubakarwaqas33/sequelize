const db= require('../../config/db.config');
const Users= db.Users;

exports.create = (req, res) => {

    try {

        let data = req.body;
        Users.create(data).then((user) => {
            return res.json({ message: "User added successfully", data: user});
        })

    } catch (e) {
        return res.json(e);
    }
};