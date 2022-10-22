import mongoose from 'mongoose';


const Schema = mongoose.Schema

const lessonRelationSchema = new Schema({
    Username: {
        type: String,
    },
    linkAddres:{
        type: mongoose.Schema.Types.ObjectId, ref:'lessonRelation1'
    }
})

const lessonMessage = mongoose.model('lessonRelation',lessonRelationSchema )

export default lessonMessage