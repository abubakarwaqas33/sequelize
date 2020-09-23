const db = require('../../config/db.config');
const Employee = db.Employee;

exports.create = (req, res) => {

    try {

        let data = req.body;
        Employee.create(data).then((employee) => {
            return res.json({ message: "User added successfully", data: employee });
        })

    } catch (e) {
        return res.json(e);
    }
};