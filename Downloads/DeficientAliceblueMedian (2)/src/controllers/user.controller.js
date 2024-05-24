const User = require('../models/user.model.js')

exports.createUser = async(req, res) => {
    try{
        const {fullName, email, dob, gender, country} = req.body
        const imageUrl = req.file.path

        const newUser = new User({
            fullName,
            email,
            dob,
            gender,
            country,
            imageUrl
        })

        await newUser.save()

        res.redirect('/success')
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

exports.getAllUsers = async(req, res) => {
    try{
        const users = await User.find()
        res.render('users', {users})
    }
    catch{
        res.status(500).send(error.message)
    }
}

exports.deleteUser = async (req, res) => {
    try {
        console.log(`Deleting user with ID: ${req.params.id}`);
        await User.findByIdAndRemove(req.params.id);
        res.redirect("/");
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
};
