exports.hello=(req,res)=>{
    res.status(200).json({
        'data':'first express ',
        'status':'success'
    });

}