class Map{

    constructor(LongUrl, ShortUrl, description, round){
        this.LongUrl=LongUrl;
        this.ShortUrl=ShortUrl;
        this.round=round;
        this.description=description;
    }

    getDescription(){
        return this.description;
    }

    setDescription(description){
        this.description=description;
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