const { Record, Habit, User } = require('./models/habits.model');
const db = require('./databaseConfig.js');

// read all records
const readAllRecords =  () => {
    return Record.find({}, (err, records) => {
        // console.log(records);
    });
}

//read one user by id
const readUser = (id) => {
    return Record.findOne({"user._id" : id}, (err, user) => {
        // console.log(user)
    })
}

const addUser = (username, password) => {
    //return what is sent for testing later
    let user = new User({username:username, password:password })
    let record = new Record({user: user, habits:null})
    record.save((err,data) => {
        if(err)
            console.log(err)
        //data saved
        console.log(err)
    })
    return record


}


module.exports = { readAllRecords, readUser, addUser };