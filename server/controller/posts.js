import PostMessage from "../models/postMessage.js";
import TotalIncomeMessage from "../models/totalIncome.js"

export const getPosts = async (req,res)=>{
    try {
        const postMessages = await PostMessage.find().populate('totalIncome').select("idName _id tittle desc datePost incomeMoney tags selectFileImg totalIncome")
        const data = postMessages
        res.status(200).json({data, Message:'Berhasil Mendapatkan Data!', Status:200});
     
    } catch (error) {
        res.status(404).json({ Message: error.message, Status:404 });
    }    
}

export const createPost = async (req,res) =>{
    try {
        const totalBalance = await TotalIncomeMessage.create({
            totalIncome: req.body.totalIncome
        })
        try {
            const data = await PostMessage.create({
                title: req.body.title,
                desc: req.body.desc, 
                datePost: req.body.datePost,
                incomeMoney: req.body.incomeMoney,
                tags: req.body.tags,
                selectFileImg: req.body.selectFileImg,
                totalIncome: totalBalance._id,
            })
            // const data = post
            // await data.save()
            res.status(200).json({data, message:'Berhasil Menyimpan Data', status:200})
        } catch (error) {
            res.status(400).json({ message: error.message, Status:400 })
        }
    } catch (err) {
        res.status(400).json({ message: error.message, Status:400 })
    }
}