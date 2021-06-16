const dbConnect = require('../../../../../utils/dbConnect');
const { generateProducts } = require('../../../../../utils/helper');
const { Attribute, Product, Category } = require('../../../../../models');
export default dbConnect(async (req, res) => {
  switch (req.method) {
    case 'GET':
      let { page, limit, sort } = req.query;
      const skipItems =  page ? (page == 1) ? 0 : (parseInt(page) - 1) * limit : 0;
      limit = limit ? parseInt(limit) : defaultLimit; 
      sort = sort != 'default' ? sort == 'name_asc' ? 1: -1 : 0;

      const getAllProducts = async () => {
        const categoryData = await Category.find({
          name: req.query.slug.replace(/_/g, ' '),
        });
        const total = await Product.find({category: categoryData[0]._id}).count();
        let categoryProducts = await Product.find({
          category: categoryData[0]._id,
        })
          .populate({ path: 'category' })
          .populate({ path: 'section' })
          .populate({ path: 'sub_category' })
          .populate({ path: 'attributes' })
          .skip(skipItems)
          .limit(limit)
          .sort({ name: sort })
          .exec();

          return { 
            products: categoryProducts, 
            page,
            total, 
            from: total ? skipItems + 1 :0 ,
            to: total < (limit + skipItems) ? total: limit + skipItems,
            pages: Math.ceil( total / limit)
           };
      };
      let allProductsData = await getAllProducts();
      if (req.query?.diameter) {
        const attribute = 'diameter';
        let searchedValues = Object.values(req.query);
        searchedValues = searchedValues[0].split(',');
        const data = await Attribute.find({name: 'diameter'});

        let searchedAttributeIds =  data.values.filter(({value})=> {
          return searchedValues.includes(String(value))
        })

        searchedAttributeIds = await Promise.all(searchedAttributeIds.map(async ({_id})=>String(_id)));
        let searchedProducts = allProductsData.products.filter(product=>{
          let attribute = product.attributes.find(({value})=>searchedAttributeIds.includes(String(value)));
          if(attribute) return true;
          return false;
        })
        console.log(searchedAttributeIds, searchedProducts);
        let total = searchedProducts.length
        res.json({...allProductsData, products: searchedProducts, total, from: total?allProductsData.from:0, to: total < (limit + skipItems) ? total: limit + skipItems });
        return;
      }
      res.json({...allProductsData});
      break;
    // create products
    case 'POST': {
      await generateProducts(res, req.query.slug, null);
      return;
    }
    default:
      res.send({ status: false, message: 'Not found!' });
  }
});
