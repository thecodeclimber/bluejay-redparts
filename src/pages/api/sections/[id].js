const dbConnect = require('../../../../utils/dbConnect');

export default dbConnect(async (req, res)=>{
    return res.send({ data: [req.query, req.params]})
})


