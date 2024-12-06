import db from "../DataModels/DB.js";

export default function checkValid(hashValue){

        const findHash=db.filter((item) => item.ShortUrl==hashValue);
        if(findHash.length==0){
            return true;
        }
        return false;

}