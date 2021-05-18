const dbConnect = require('../../../../utils/dbConnect');

const { Category} = require('../../../../models');

export default dbConnect(async (req, res)=>{
    switch(req.method)
    {
        case 'GET':
            let data = await Category.aggregate([
                {$match: { section: req.query.section_id }},
                { $lookup : {
                    from: 'sub_categories',
                    localField: '_id',
                    foreignField: 'category',
                    as: 'sub_categories',
                  }
                }
            ]);
            res.send({ data:data})
        break;
        default: res.send({ status: false, message: 'Not found!'})
    }
})