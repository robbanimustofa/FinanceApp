import mongoose from 'mongoose'

const totalIncomeSchema = new mongoose.Schema({
    totalIncome:Number,
});

const TotalIncomeMessage = mongoose.model('TotalIncome', totalIncomeSchema);

export default TotalIncomeMessage;