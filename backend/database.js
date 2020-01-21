const { Habit, User } = require('./models/habits.model');
const db = require('./databaseConfig.js');

// read all users
const readAllUsers =  () => {
    return User.find({}, (err, records) => {
        // console.log(records);
    });
}

//read one user by id
const readUser = (id) => {
    return User.findOne({"_id" : id}, (err, user) => {
        // console.log(user)
    })
}

const addUser = (username, password) => {
    //return what is sent for testing later
    let user = new User({username:username, password:password, habits: null })
    user.save((err,data) => {
        if(err)
            console.log(err)
        //data saved
        console.log(err)
    })
    return user


}


module.exports = { readAllUsers, readUser, addUser };