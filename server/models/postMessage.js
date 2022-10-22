import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title:String,
    desc: String,
    incomeMoney: Number,
    totalIncome:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TotalIncome'
    },
    datePost:String,
    tags: String,
    selectFileImg: String,
    idName:{
        type:String,
        default:"post"
    },
    createdAt: {
        type:Date,
        default: new Date()
    }

});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;