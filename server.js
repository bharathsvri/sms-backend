import express, { json } from "express";
import twilio from "twilio";
import cors from 'cors'

const app = express();
const port = 3000;

app.use(json());
app.use(cors());


const sendTextMessage = (name,number,place,productName,price,emi,amount,balance,date) => {

    var phoneNumber = "+918825907121"
  
    var accountSid = 'AC0a7f670ecf0f895b34dbb01183ce25c2';
    var authToken = '2bfca1a5ec8aa6631386a2fd67bbe718';
  
    var client = new twilio(accountSid, authToken);
  
    client.messages.create({ 
      to: "+918825907121",
      from: "+19789156154",
      body: `Name: ${name}\nnumber: ${number}\nplace: ${place}\nproductName: ${productName}\nprice: ${place}\nemi: ${emi}\namount: ${amount}\nbalance: ${balance}\ndate: ${date}`
    }, function(err, message) {
      console.log(`send to`);
    });
  
  }

  app.post("/",(req,res)=> {
    // const {name,number,place,productName,price,emi,amount,balance,date} = req.body;
    const {name,number,place,productName,price,emi,amount,balance,date} = req.body;
    res.json({"msg":"success"});
    // sendTextMessage(name,number,place,productName,price,emi,amount,balance,date);
    if(name != "" && number != "" && place != "" && productName != "" && price != "" && emi != "" && amount != "" && balance != "" && date != "" ){
      sendTextMessage(name,number,place,productName,price,emi,amount,balance,date)
    }
  })


app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})