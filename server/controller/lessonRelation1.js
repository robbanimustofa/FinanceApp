import lesson1Message from "../models/lessonRelation1.js";

export const getLesson1 = async (req,res)=>{
    try {
        const lesson1Messages = await lesson1Message.find()
        const data = lesson1Messages
        res.status(200).json({data, Message:'Berhasil Get Data'})
    } catch (err) {
        res.status(404).json({ Message: error.message, Status:404 });
    }
}

export const createLesson1 = async (req, res)=>{
    try {
        const lesson = req.body
        const data = new lesson1Message(lesson)
        await data.save();
        res.status(200).json({data, Message:'Berhasil Post data'})
    } catch (err) {
        res.status(404).json({ Message: err.message, Status:400})
    }
}