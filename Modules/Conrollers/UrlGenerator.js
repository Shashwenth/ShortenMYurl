import express, { request, response } from 'express';
import Main from '../Service/Main.js';
import FindLongUrl from '../Service/Find.js';
import dotenv from 'dotenv';
import GetMyTableObjects from '../Service/GetMyTableObjects.js';
import cors from 'cors';
import GuestMain from '../Service/GuestMain.js';
import GuestFindLongUrl from '../Service/GuestFind.js';
import DeleteGuestDB from '../Service/DeleteGuestDB.js';
dotenv.config();

const allowedOrigins = ['http://localhost:3000'];

const urlHead = process.env.URL_HEAD;
const GuesturlHead = process.env.GUEST_URL_HEAD;
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true); // Allow the request
        } else {
            callback(new Error('Not allowed by CORS'), false); // Deny the request
        }
    },
    methods: ['GET', 'POST', 'OPTIONS'], // Allow OPTIONS as well
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

app.options('*', cors()); 


app.get("/Shashwenth/:shortURL", async (request, response) => {
    try {
        const LongURL = await FindLongUrl(request.params['shortURL']);
        //console.log("Long URL:", LongURL);
        const returnBody = {
            "url": LongURL
        };
        response.redirect(returnBody.url); // Send the long URL as a JSON response
    } catch (error) {
        console.error("Error fetching long URL:", error);
        response.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Exit");
});

app.get("/table", (request, response) => {
    response.send(GetMyTableObjects());

});


app.post("/", (request, response) => {
    const url = request.body.url;
    const newurl = Main(url);
    const returnBody = {
        "url": urlHead + newurl
    };
    response.send(returnBody);
});

app.post("/guest", (request, response) => {
    const url = request.body.url;
    const newurl = GuestMain(url);
    const returnBody = {
        "url": GuesturlHead + newurl
    };
    response.send(returnBody);
});

app.get("/Guest/:shortURL", async (request, response) => {
    try {
        const LongURL = await GuestFindLongUrl(request.params['shortURL']);
        //console.log("Long URL:", LongURL);
        const returnBody = {
            "url": LongURL
        };
        response.redirect(returnBody.url); // Send the long URL as a JSON response
    } catch (error) {
        console.error("Error fetching long URL:", error);
        response.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Exit");
});

app.get("/", (request, response) => {
    response.send("Server is working!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});

app.get("/Delete", (request, response)=>{
    DeleteGuestDB();
    response.send("Guest RESET")
})

export default app;
