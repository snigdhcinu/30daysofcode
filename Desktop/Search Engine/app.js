// Key 1: 6167b7dbdc114cafa8014ee5366df1a8
// Key 2: 90fbdc586b1143c7943cef236df98821
const express=require('express')
const bodyParser=require('body-parser')
const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;
const WebSearchAPIClient = require('azure-cognitiveservices-websearch');


let credentials = new CognitiveServicesCredentials('6167b7dbdc114cafa8014ee5366df1a8');
let webSearchApiClient = new WebSearchAPIClient(credentials);
let app=express();
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',function(req,res){
	res.sendFile(__dirname+"/index.html");
});


app.post('/',function(req,res){
	const query=req.body.query;
	webSearchApiClient.web.search(query).then((result) => {
    let properties = ["images", "webPages", "news", "videos"];
    let res_img=[];
    let res_web=[];
    let res_news=[];
    let res_video=[];
    for (let i = 0; i < properties.length; i++) {
        if (result[properties[i]]) {		// Successfully result obtained

        	// result[properties[i]].value to access results.
            // console.log(result[properties[i]].value);		// To get result and properties.
            // res.send((result[properties[i]].value));
            // console.log(`length of ${properties[i]} result is ${result[properties[i]].value.length}`)
         
         // SEPERATING IMAGE RESULT
            res_img=[...result['images'].value];
            

         // SEPERATING VIDEO RESULT
         	res_video=[...result['videos'].value];
         	

          // SEPERATING WEBPAGES RESULT
         	res_web=[...result['webPages'].value];
         	

          // SEPERATING NEWS RESULT
         	res_news=[...result['news'].value];
         	

        } else {		// Failure result not obtained
            console.log(`No ${properties[i]} data`);
        }
    }
    console.log(`Total images in result are ${res_img.length}`);
    console.log(`Total videos in result are ${res_video.length}`);
    console.log(`Total webPages in result are ${res_web.length}`);
    console.log(`Total news in result are ${res_news.length}`);
	}).catch((err) => {
    	throw err;
	})
});


app.listen(5000,()=>{
	console.log("server online at port 5000");
})