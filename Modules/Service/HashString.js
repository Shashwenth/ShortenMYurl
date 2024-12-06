export default function hashFunction(LongUrl){

    /*
        Formula For HashValue
        hash(s) = s[0] + s[1].p + s[2].p^2  mod m

    */


    const p=257;
    
    const m=1000000009;

    var hashValue=0;

    var pPow=1;

    for(let i=0; i<LongUrl.length; i++){
        hashValue = (hashValue + LongUrl.charCodeAt(i)+1 * pPow) % m;
        pPow = (pPow * p)%m;
    }

    var FinalHashValue="";    

    let numString=hashValue.toString();

    let flag=0;

    for(let i=0; i<numString.length; i++){

        let digit= parseInt(numString[i], 10);

        if(flag==0){
            FinalHashValue+= String.fromCharCode(65+digit);
            flag=1;
        }
        else{
            FinalHashValue+= String.fromCharCode(97+digit);
            flag=0;
        }

    }    

    return FinalHashValue;
}