import mongoose, {schema} from "mongooose"

const urlschema =new mongoose.schema({
 shortId :{
    type: String,
    required:true,
    unique: true
 },
 longUrl:{
    type: String,
    required:true
 }
},{timestamps: true})


export default mongoose.model('Url', urlSchema);