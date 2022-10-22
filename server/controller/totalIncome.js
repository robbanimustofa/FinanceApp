import TotalIncomeMessage from "../models/totalIncome.js";

export const getIncoms = async (req,res)=>{
    try {
        const TotalIncomeMessages = await TotalIncomeMessage.find()
        const dataTotalIncome = TotalIncomeMessages
        res.status(200).json({dataTotalIncome, Message:'Berhasil Mendapatkan Data!', Status:200});
        
    } catch (error) {
        res.status(404).json({ Message: error.message, Status:404 });
    }
    
}

export const createTotalIncome = async (req,res) =>{
    try {
        const totalIncome = req.body;
        const newTotalIncome = new TotalIncomeMessage(totalIncome);
        await newTotalIncome.save();

        res.status(200).json({newTotalIncome, message:'Berhasil Menyimpan Data', status:200})
    } catch (error) {
        res.status(400).json({ message: error.message, Status:400 })
    }
}