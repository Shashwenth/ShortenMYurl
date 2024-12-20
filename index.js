import Main from "./Modules/Service/Main.js";
import app from './Modules/Conrollers/UrlGenerator.js'
import InitializeDB from "./Modules/Service/InitializeDB.js";

async function startApp () {
    await InitializeDB();
    console.log("Application Started - Release on 20-12-2024  12:50")
}

startApp();