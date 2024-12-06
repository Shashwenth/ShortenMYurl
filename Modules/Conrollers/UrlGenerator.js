import express, { response } from 'express'
import Main from '../Service/Main.js';
import FindLongUrl from '../Service/Find.js';
import dotenv from 'dotenv'

dotenv.config();

const urlHead=process.env.URL_HEAD;
const app=express();
app.use(express.json());
const PORT= process.env.PORT || 3000;

app.listen(PORT , ()=>{
    console.log("Server listening on PORT:",PORT);
});

app.get("/:shortURL",(request,response)=>{

    const LongURL=FindLongUrl(request.params['shortURL']);
    const returnBody={
        "url":LongURL
    };
    response.send(returnBody);

});

app.post("/", (request, response) => {

    const url=request.body.url;
    const newurl=Main(url);
    const returnBody={
        "url":urlHead+newurl
    };
    response.send(returnBody);

});

app.get("/")

export default app;