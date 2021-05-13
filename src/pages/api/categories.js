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
      let data = await Category.aggregate([
        {
          $lookup: {
            from: 'sub_categories',
            localField: '_id',
            foreignField: 'category',
            as: 'sub_categories',
          },
        },
      ]);
      res.send({ data: data });
      break;
    default:
      res.send({ status: false, message: 'Not found!' });
  }
};
