import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv"

dotenv.config();

const sql=neon(process.env.DATABASE_URL)

export default async function InsertGuestDB(mapData) {

    try{
        await sql`
      INSERT INTO url_mapping_guest (LongUrl, ShortUrl, description, round)
      VALUES (${mapData.LongUrl}, ${mapData.ShortUrl}, "", ${mapData.round});
    `;

    }catch(error){
        console.error(error)
    }

}