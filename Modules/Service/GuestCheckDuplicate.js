import guestdb from "../DataModels/GuestDB.js";

export default function guestcheckValid(hashValue){

        const findHash=guestdb.filter((item) => item.ShortUrl==hashValue);
        if(findHash.length==0){
            return true;
        }
        return false;

}