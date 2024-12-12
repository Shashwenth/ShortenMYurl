import db from "../DataModels/DB.js";

export default async function FindLongUrl(shortURL){
    //console.log("Inside Function")
    //console.log(shortURL);
    const LongURL=await db.filter((item) => (item.ShortUrl==shortURL));
    //console.log(LongURL)
    //console.log("Exit Functions")
    return (LongURL[0].LongUrl);
}