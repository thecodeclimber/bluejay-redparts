const dbConnect = require('../../../../utils/dbConnect');
dbConnect();

export default async (req, res)=>{
    return res.send({ data: [req.query, req.params]})
}


