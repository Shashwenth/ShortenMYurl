import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv"
import db from "../DataModels/DB.js";
import guestdb from "../DataModels/GuestDB.js";
import Map from "../DataModels/Map.js";
//description
const sql=neon(process.env.DATABASE_URL)

export default async function InitializeDB() {
    
    const Myresult=await sql`SELECT * FROM URL_MAPPING_SHASHWENTH`

    Myresult.forEach((row)=>{
        db.push(new Map(`${row.longurl}`, `${row.shorturl}`, `${row.description}`,  `${row.round}`))
    })

    const Guestresult=await sql`SELECT * FROM URL_MAPPING_GUEST`

    Guestresult.forEach((row)=>{
        guestdb.push(new Map(`${row.longurl}`, `${row.shorturl}`, `${row.description}`, `${row.round}`))
    })

    console.log("DB filled")
}

