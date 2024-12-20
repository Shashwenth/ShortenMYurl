import guestcheckValid from "./GuestCheckDuplicate.js";
import hashFunction from "./HashString.js";
import guestdb from "../DataModels/GuestDB.js";
import Map from "../DataModels/Map.js";
import InsertGuestDB from "./GuestDbInsert.js";


export default function GuestMain(url){
    let hashValue= hashFunction(url);
    //console.log(hashValue); 
    if(guestcheckValid(hashValue)){
        const newUrl="http://localhost"
        guestdb.push(new Map(url,hashValue, "", 1));
        InsertGuestDB(new Map(url,hashValue,"", 1));
    }
    // }else{
    //     //console.log("Already present");
    //     // const arr=db.filter((item) => item.ShortUrl==hashValue)
    //     // console.log(arr)
    //     let repeat=1;
        
    //     while(!guestcheckValid(hashValue)){
    //         //console.log("Filtering Again");
    //         repeat++;
    //         hashValue=hashFunction(hashValue);
    //     }
    //     //console.log("NNew Hash add to Array");
    //     guestdb.push(new Map(url,hashValue,"", repeat));
    //     InsertGuestDB(new Map(url,hashValue,"", repeat));
    // }
    return hashValue;
}