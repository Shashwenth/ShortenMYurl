class Map{

    constructor(LongUrl, ShortUrl, round){
        this.LongUrl=LongUrl;
        this.ShortUrl=ShortUrl;
        this.round=round;
    }


    getRound(){
        return this.round;
    }

    setRound(round){
        this.round=round;
    }

    Increamentround(){
        this.round+=1;
    }

    getLongUrl(){
        return this.LongUrl;
    }

    getShortURL(){
        return this.ShortUrl;
    }

    setLongURL(LongUrl){
        this.LongUrl=LongUrl;
    }

    setShortURL(ShortUrl){
        this.ShortUrl=ShortUrl;
    }
}

export default Map;