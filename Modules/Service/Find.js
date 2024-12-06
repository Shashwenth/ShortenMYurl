import db from "../DataModels/DB.js";

export default function FindLongUrl(shortURL){
    //console.log(shortURL);
    const LongURL=db.filter((item) => (item.ShortUrl==shortURL));
    //console.log(LongURL)
    return (LongURL[0].LongUrl);
}