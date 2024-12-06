import checkValid from "./CheckDuplicate.js";
import hashFunction from "./HashString.js";
import db from "../DataModels/DB.js";
import Map from "../DataModels/Map.js";


export default function Main(url){
    let hashValue= hashFunction(url);
    //console.log(hashValue); 
    if(checkValid(hashValue)){
        const newUrl="http://localhost"
        db.push(new Map(url,hashValue,1));
    }else{
        //console.log("Already present");
        // const arr=db.filter((item) => item.ShortUrl==hashValue)
        // console.log(arr)
        let repeat=1;
        
        while(!checkValid(hashValue)){
            //console.log("Filtering Again");
            repeat++;
            hashValue=hashFunction(hashValue);
        }
        //console.log("NNew Hash add to Array");
        db.push(new Map(url,hashValue,repeat));
    }
    return hashValue;
}