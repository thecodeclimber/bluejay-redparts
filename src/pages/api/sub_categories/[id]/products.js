const dbConnect = require('../../../../../utils/dbConnect');
const { addAttributes } = require('../../../../../utils/productKeys');
const { SubCategory, Section } = require('../../../../../models');
const { getCombn, generateProducts } = require('../../../../../utils/helper');

export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      let data = await SubCategory.findById(req.query.id)
        .populate('category', 'name section')
        .populate({ path: 'attributes.attribute', select: 'values' });
      let section = await Section.findById(data.category.section, 'name');
      let items = [];
      if (data.attributes && data.attributes.length > 0) {
        data.attributes.forEach((attribute) => {
          let attrData = attribute.values.map((val) => {
            return attribute.attribute.values.find((attr) =>
              val.equals(attr._id)
            ).value;
          });
          items.push(attrData);
        });
        let images = data.images.map(
          (img) =>
            `${section.name}__${
              data.category.name
            }__${data.name.toLowerCase().replace(/ /g, '_')}__${img}`
        );
        let products = getCombn({
          items,
          category: data.category.name,
          sub_category: data.name,
        });
        products = products.map((product) => {
          return addAttributes(product, images);
        });
        if (res.status === 500) {
          res.status(500);
          res.send([]);
          return;
        }
        res.send(products);
      }
      res.send([]);
      break;
      case 'POST':
        {
         await generateProducts(res, null, req.query.id);
         return;
        }
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});

