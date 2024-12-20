import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv"

dotenv.config();

const sql=neon(process.env.DATABASE_URL)
//description
export default async function InsertMyDB(mapData) {

    try{
    //console.log("Inserting into MyDB");
        await sql`
      INSERT INTO url_mapping_shashwenth (LongUrl, ShortUrl, description, round)
      VALUES (${mapData.LongUrl}, ${mapData.ShortUrl}, ${mapData.description}, ${mapData.round});
    `;
    //console.log("Inserted into MyDB");

    }catch(error){
        console.error(error)
    }

}