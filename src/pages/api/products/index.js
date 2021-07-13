const dbConnect = require('../../../../utils/dbConnect');
const { Product } = require('../../../../models');

import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(dbConnect(async (req, res) => {
  const { user } = getSession(req, res);
  switch (req.method) {
    case 'GET':
      try {
        let products = await Product.find({});
        res.json({ products });
      } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Something went wrong!' });
      }
      break;
    default:
      res.send({ status: false, message: 'Not found!' });
  }
}));
