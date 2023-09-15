const express = require('express')
const UserModel = require('../schema/UserSchema')
const userRouter = express.Router()


// @route   POST api/persons
// @desc    Create a person
// @access  Public
userRouter.post('/api', async (req, res) => {
    try {
        const newUser = new UserModel(req.body);
        const savedUser = await newUser.save();
        res.status(201).json({
            savedUser,
            success: true,
            message: "User created successfully"
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
})

// @route   GET api/persons
// @desc    Get a person
// @access  Public
userRouter.get('/api/:user_id', async (req, res) => {
    try {
        const userId = parseInt(req.params.user_id);
        if (!isNaN(userId)) {
            const user = await UserModel.find({
                userID: parseInt(req.params.user_id)
            }).exec();
            if (!user) {
                return res.status(404).json({
                    error: 'User not found'
                });
            }
            res.status(200).json(user);
        } else {
            res.send("Invalid parameter type")
        }

    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
})


// @route   PUT api/persons
// @desc    Update a person
// @access  Public
userRouter.put('/api/:user_id', async (req, res) => {
    try {
        const userId = parseInt(req.params.user_id);
        if (!isNaN(userId)) {
            const updatedUser = await UserModel.findOneAndUpdate({
                userID: parseInt(req.params.user_id)
            }, req.body, {
                new: true,
                runValidators: true,
            });


            if (!updatedUser) {
                return res.status(404).json({
                    error: 'User not found'
                });
            }
            res.status(200).json({
                updatedUser,
                success: true,
                message: "User updated successfully"
            });
        } else {
            res.send("Invalid parameter type")
        }

    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
})


// @route   DELETE api/persons
// @desc    Delete a person
// @access  Public
userRouter.delete('/api/:user_id', async (req, res) => {
    try {
        const userId = parseInt(req.params.user_id);
        if (!isNaN(userId)) {
            const deletedUser = await UserModel.findOneAndDelete({
                userID: parseInt(req.params.user_id)
            });
            if (!deletedUser) {
                return res.status(404).json({
                    error: 'User not found'
                });
            }
            res.status(204).json({
                success: true,
                message: "User Deleted Successfully"
            });
        } else {
            res.send("Invalid parameter type")
        }
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
})

module.exports = userRouter