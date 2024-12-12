import Main from "./Modules/Service/Main.js";
import app from './Modules/Conrollers/UrlGenerator.js'
import InitializeDB from "./Modules/Service/InitializeDB.js";

async function startApp () {
    await InitializeDB();
    console.log("Application Started")
}

startApp();