const dbConnect = require('../../../../../utils/dbConnect');
const { getCombn, generateProducts } = require('../../../../../utils/helper');

const { SubCategory, Section } = require('../../../../../models');
const { addAttributes } = require('../../../../../utils/productKeys');
export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      let data = await SubCategory.find({ category: req.query.id })
        .populate('category', 'name section')
        .populate({ path: 'attributes.attribute', select: 'values' });
      if (data && data.length > 0) {
        let newProducts = [];
        await Promise.all(
          data.map(async (newData) => {
            let section = await Section.find({ _id: newData.category.section });
            let items = [];
            if (newData.attributes && newData.attributes.length > 0) {
              newData.attributes.forEach((attribute) => {
                let attrData = attribute.values.map((val) => {
                  return attribute.attribute.values.find((attr) =>
                    val.equals(attr._id)
                  ).value;
                });
                items.push(attrData);
              });
              if (newData && newData.category?.name) {
                let images = newData.images.map(
                  (img) =>
                    `${section[0].name}__${newData.category.name
                    }__${newData.name.toLowerCase().replace(/ /g, '_')}__${img}`
                );
                let products = getCombn({
                  items,
                  category: newData.category?.name,
                  sub_category: newData.name,
                });

                newProducts.push(
                  products.map((product) => {
                    return addAttributes(product, images);
                  })
                );
              }
            }

            return newProducts;
          })
        );
        newProducts = newProducts.reduce((arr, item) => {
          return arr.concat(item);
        });
        res.send(newProducts);
        return;
      }
      res.send([]);
      return;
      break;
    // create products
    case 'POST':
      {
       await generateProducts(res, req.query.id, null);
       return;
      }
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});

