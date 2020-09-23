const db = require('../../config/db.config');
const Compnay = db.Compnay;

exports.create = (req, res) => {

    try {

        let data = req.body;
        Compnay.create(data).then((Compnay) => {
            return res.json({ message: "Company added successfully", data: Compnay });
        })

    } catch (e) {
        return res.json(e);
    }
};