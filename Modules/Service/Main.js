import checkValid from "./CheckDuplicate.js";
import hashFunction from "./HashString.js";
import db from "../DataModels/DB.js";
import Map from "../DataModels/Map.js";
import InsertMyDB from "./MyDBInsert.js";

export default function Main(url, description){
    //console.log("Inside Main");
    let hashValue= hashFunction(url);
    //console.log(hashValue); 
    if(checkValid(hashValue)){
        const newUrl="http://localhost"
        db.push(new Map(url,hashValue,description, 1));
        InsertMyDB(new Map(url,hashValue,description, 1));
    }
    // }else{
    //     //console.log("Already present");
    //     // const arr=db.filter((item) => item.ShortUrl==hashValue)
    //     // console.log(arr)
    //     let repeat=1;
        
    //     while(!checkValid(hashValue)){
    //         console.log("Filtering Again");
    //         repeat++;
    //         hashValue=hashFunction(hashValue);
    //     }
    //     //console.log("NNew Hash add to Array");
    //     db.push(new Map(url,hashValue, description, repeat));
    //     InsertMyDB(new Map(url,hashValue, description, repeat));
    // }
    return hashValue;
}