import checkValid from "./Modules/Service/CheckDuplicate.js";
import hashFunction from "./Modules/Service/HashString.js";
import db from "./Modules/DataModels/DB.js";
import Map from "./Modules/DataModels/Map.js";


export default function Main(url){
    let hashValue= hashFunction(url);
    console.log(hashValue); 
    if(checkValid(hashValue)){
        console.log("Not Present. Addid to Array");
        db.push(new Map(url,hashValue,1));
    }


    if(checkValid(hashValue)){
        console.log("Valid");
    }else{
        console.log("Already present");
        // const arr=db.filter((item) => item.ShortUrl==hashValue)
        // console.log(arr)
        let repeat=1;
        
        while(!checkValid(hashValue)){
            console.log("Filtering Again");
            repeat++;
            hashValue=hashFunction(hashValue);
        }
        console.log("NNew Hash add to Array");
        db.push(new Map(url,hashValue,repeat));

    }
}