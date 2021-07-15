import { generateProductsWith } from '../../../../utils/helper';
const dbConnect = require('../../../../utils/dbConnect');
export default dbConnect(async (req, res) => {
    switch (req.method) {
        case 'POST':
            await generateProductsWith(res, req.body);
            return;
            break;
        default:
            res.send({ status: false, message: 'Not found!' });
    }
});
