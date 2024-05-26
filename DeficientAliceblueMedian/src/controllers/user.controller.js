const User = require('../models/user.model.js')
const upload = require('../middlewares/multer.js');

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

        const user = await User.findById(req.params.id);

        if (user && user.imageUrl) {
            upload.deleteImage(user.imageUrl); 
        }


        await User.findByIdAndDelete(req.params.id);

        res.redirect('/users');
    } catch (error) {
        console.error('Error deleting user:', error.message);
        res.status(500).send("Internal Server Error");
    }
};


exports.renderUpdateForm = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        const formattedDOB = user.dob.toISOString().split('T')[0];

        res.render('form', { user: { ...user.toObject(), dob: formattedDOB }, pageTitle: 'Update User' });
    } catch (err) {
        console.error('Error retrieving user:', err);
        res.status(500).send('Internal Server Error');
    }
};


exports.updateUser = async (req, res) => {
    try {
        console.log('Request body:', req.body);
    
        const { fullName, email, dob, gender, country } = req.body;
        console.log('Updating user:', req.params.id, { fullName, email, dob, gender, country });

        
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { fullName, email, dob, gender, country }, { new: true });

        if (!updatedUser) {
            console.log('User not found.');
            return res.status(404).send('User not found');
        }
        console.log('User updated successfully.');

        res.redirect('/success');
    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).send('Internal Server Error');
    }
};