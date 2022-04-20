const db = require("../db");

module.exports.indexRoute = (req,res) => {
  res.send("Hello Guys !!!")
}

module.exports.addBooks = (req,res)=>{
    const book_name = req.body.book_name;
    const book_price = req.body.book_price;
    db.query('insert into book_data (book_name,book_price) values(?,?)',[
        book_name,book_price
    ],(error,result)=>{
        if(error){
            console.log(error)
        }else{
            console.log(result)
            res.send(200,result)
        }
    })
}

module.exports.showAllBooks = (req,res)=>{
    const query = "select * from book_data";
    db.query(query,(error,result)=>{
        if(error){
            console.log(error)
        }else{
            console.log(result)
            res.send(result)
        }
    })
}