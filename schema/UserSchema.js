const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Provide a name'],
    },
    age: {
        type: Number,
        default: 20
    },
    email: {
        type: String,
        default: "Imahacker@api.net"
    },
    userID: {
        type: Number,
        unique: true
    },
    profession: {
        type: String,
        required: false,
        default: "Hacking"
    },
    hobbies: {
        type: Array,
        default: []
    }
})

UserSchema.pre('save', async function (next) {
    if (!this.userID) {
        try {
            const lastUser = await this.constructor.findOne({}, {}, {
                sort: {
                    userID: -1
                }
            });
            this.userID = lastUser ? lastUser.userID + 1 : 1;
            next();
        } catch (err) {
            next(err);
        }
    } else {
        next();
    }
});

const UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel