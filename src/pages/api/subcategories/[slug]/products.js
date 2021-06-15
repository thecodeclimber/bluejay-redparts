const dbConnect = require('../../../../../utils/dbConnect');
const { Product, SubCategory, Attribute } = require('../../../../../models');
const { generateProducts } = require('../../../../../utils/helper');

export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      const defaultLimit = 8;
      let { page, limit, sort, length } = req.query;
      page = parseInt(page);
      const skipItems =  page ? (page == 1) ? 0 : (parseInt(page) - 1) * limit : 0;
      limit = limit ? parseInt(limit) : defaultLimit; 
      sort = sort != 'default' ? sort == 'name_asc' ? 1: -1 : 0;
      
      const getAllProducts = async () => {
        const subcategoryData = await SubCategory.find({});
        if(length)
        length = await Attribute.findOne({name: 'length', values : {$elemMatch: {value: req.query.length}}},'values.$');
        
        if(!length)
        return { 
          products: [], 
          page,
          total: 0, 
          from: 0,
          to: 0,
          pages: 1
         };


        let subcategoryId = '';
        subcategoryData.map((subcategory) => {
          if (
            subcategory.name.toLowerCase().replace(/ /g, '_') === req.query.slug
          ) {
            subcategoryId = subcategory._id;
          }
        });

        const total = await Product.find({sub_category: subcategoryId,}).count();
        let subcategoryProducts = await Product.find({
          sub_category: subcategoryId,
        })
          .populate({ path: 'category' })
          .populate({ path: 'section' })
          .populate({ path: 'sub_category' })
          .populate({ path: 'attributes', match: { value: length.values[0]._id} })
          .skip(skipItems)
          .limit(limit)
          .sort({ name: sort })
          .exec();
          return { 
            products: subcategoryProducts, 
            page,
            total, 
            from: skipItems + 1,
            to: total < (limit + skipItems) ? total: limit + skipItems,
            pages: Math.ceil( total / limit)
           };
      };
      let allProductsData = await getAllProducts();

      if (req.query.diameter) {
        const attribute = 'diameter';
        let searchedValues = Object.values(req.query);
        searchedValues = searchedValues[0].split(',');
        const data = await Attribute.find({});

        const searchedAttributeIds = [];
        if (data) {
          data.forEach((item) => {
            if (attribute.includes(item.name)) {
              item.values.forEach((att) => {
                if (searchedValues.includes(att.value)) {
                  searchedAttributeIds.push(`${att._id}`);
                }
              });
            }
          });
        }
        const searchedProducts = [];
        allProductsData.products.forEach((product) => {
          product.attributes.forEach((att) => {
            if (searchedAttributeIds.includes(`${att.value}`)) {
              searchedProducts.push(product);
            }
          });
        });
        let total = searchedProducts.length
        res.json({...allProductsData, products: searchedProducts, total, to: total < (limit + skipItems) ? total: limit + skipItems });
        return;
      }
      res.json({...allProductsData});
      break;
    case 'POST': {
      await generateProducts(res, null, req.query.id);
      return;
    }
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
