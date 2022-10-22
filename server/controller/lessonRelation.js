import lessonMessage from "../models/lessonRelation.js";
import lesson1Message from "../models/lessonRelation1.js";

export const getLesson = async (req,res)=>{
    try {
        const lessonMessages = await lessonMessage.find().populate('linkAddres')
        const data = lessonMessages
        res.status(200).json({data, Message:'Berhasil Get Data'})
    } catch (err) {
        res.status(404).json({ Message: error.message, Status:404 });
    }
}

export const createLesson = async (req, res)=>{
    try {
        const lesson1 = await lesson1Message.create({
            Adrres: req.body.Adrres
        });
        try {
            const lesson = await lessonMessage.create({
                Username: req.body.Username,
                linkAddres: lesson1._id
            })
            await lesson.save();
            res.status(200).json({lesson, Message:'Berhasil Post data'})
        } catch (err) {
            res.status(404).json({ Message: err.message, Status:400})
        }
            res.status(200).json({lesson1, Message:'Berhasil Post data'})
    } catch (err) {
        res.status(404).json({ Message: err.message, Status:400})
    }
}