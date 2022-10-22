import mongoose from 'mongoose';


const Schema = mongoose.Schema

const lessonRelation1Schema = new Schema({
    Adrres: {
        type: String,
    },
})

const lesson1Message = mongoose.model('lessonRelation1',lessonRelation1Schema )

export default lesson1Message