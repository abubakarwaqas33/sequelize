const db= require('../../config/db.config');
const Articles= db.Articles;

exports.findAll= (req, res) => {

  return res.json({message:"fetch all articles"})
};


exports.create = (req, res) => {

    try {
        let data = req.body;
        
        Articles.create(data).then((article) => {
            return res.json({ message: "Articles added successfully", data: article});
        })

    } catch (e) {
        return res.json(e);
    }
};