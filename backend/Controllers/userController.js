import User from "../models/UserSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res
      .status(200)
      .json({
        success: true,
        message: "Successfully updated",
        data: updateUser,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to  updated" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(
      id,
    
    );

    res
      .status(200)
      .json({
        success: true,
        message: "Successfully deleted",
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to  delete" });
  }
};
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select('-password');

    res
      .status(200)
      .json({
        success: true,
        message: "User found",
        data: user,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "No user found" });
  }
};

export const getAllUser = async (req, res) => {
  

  try {
    const users = await User.find({}).select('-password');
     

    res
      .status(200)
      .json({
        success: true,
        message: "Users found",
        data: users,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Not found" });
  }
};
