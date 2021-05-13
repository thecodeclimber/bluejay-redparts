const dbConnect = require('../../../utils/dbConnect');
dbConnect();

const {
  Section,
  Attribute,
  SubCategory,
  Category,
} = require('../../../models');

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      let data = await Section.aggregate([
        {
          $lookup: {
            from: 'categories',
            localField: '_id',
            foreignField: 'section',
            as: 'category',
          },
        },
      ]);
      res.send({ data: data });
      break;
    default:
      res.send({ status: false, message: 'Not found!' });
  }
};
