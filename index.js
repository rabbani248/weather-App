import express from "express";
import axios from "axios";

const app=express();
const port =3000;
app.use(express.static("public"));

const API_URL =" http://api.weatherapi.com/v1";
const api_key="f760319521d14c958c3154318240810";

app.get("/",async(req,res)=>{
    try{``
        const result = await axios.get(`${API_URL}/current.json?key=${api_key}&q=N6E`);
        console.log(result.data);
        res.render("index.ejs", {report:result.data});
    }catch(error){
        console.log(error.response.data);
        res.status(500).render("index.ejs",{error:error.response.data});
    }

});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});