import UserMessage from "../models/User.js";

export const loginUsers = async (req, res) => {
  try {
    const UserMessages = await UserMessage.findOne({
      username: req.body.username,
    });
    !UserMessages && res.status(400).json("Wrong Usernme");
    // const validated = await bcrypt.compare(
    //   req.body.password,
    //   UserMessages.password
    // );
    // !validated && res.status(400).json("Wrong");
    // const dataUser = UserMessages;
    res.status(200).json(UserMessages);
  } catch (error) {
    res.status(404).json({ Message: error.message, Status: 404 });
  }
};

export const createUsers = async (req, res) => {
  try {
    const user = req.body;
    const newUser = new UserMessage(user);
    await newUser.save();

    res
      .status(200)
      .json({ newUser, message: "Berhasil Menyimpan Data User", status: 200 });
  } catch (error) {
    res.status(400).json({ message: error.message, Status: 400 });
  }
};
