import guestdb from "../DataModels/GuestDB.js";

export default async function GuestFindLongUrl(shortURL){
    //console.log("Inside Function")
    //console.log(shortURL);
    const LongURL=await guestdb.filter((item) => (item.ShortUrl==shortURL));
    //console.log(LongURL)
    //console.log("Exit Functions")
    return (LongURL[0].LongUrl);
}