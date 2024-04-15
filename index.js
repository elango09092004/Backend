const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send("hello");
});


app.listen(port,()=>{
    console.log(`app listening at port http://localhost:${port}`);
});

module.exports=app;