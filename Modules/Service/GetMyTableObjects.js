import db from "../DataModels/DB.js";
import dotenv from 'dotenv';
dotenv.config();
const urlHead = process.env.URL_HEAD;
export default function GetMyTableObjects(){
    let returnBody=[];
    db.forEach((item)=>{
        returnBody.push(
            {
                longURL:item.LongUrl,
                shortURL: urlHead+item.ShortUrl
            }
        );
    })
    //console.log("return Body");
    //console.log(returnBody)
    return returnBody
}