const Category = require('../models/category.model');
const randomString = require("../config/randomstring.config");

module.exports = {

    new_category: async (req, res) => {


        const category = new Category(req.body);

        let public_id = randomString.randomString(30);

        let count = await Category.countDocuments({public_id: public_id });
        while(count > 0){

            public_id = randomString.randomString(30);
            count = await Category.countDocuments({public_id: public_id});
        }

        category.public_id = public_id;

        category.save()

            .then(() => {
                console.log("Successfully created a new category");
                res.json({message: "success!", category: category});
            })
            .catch((err) => {
                console.log("Failed to create a new category", err);
                res.status(400).json(err);

            })



    },
};