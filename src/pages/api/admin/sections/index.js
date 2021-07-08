const dbConnect = require('../../../../../utils/dbConnect');
const { Section, Category } = require('../../../../../models');
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
const { isAdmin } = require('../../../../../utils/middleware');
export default dbConnect(async (req, res) => {
    const { user } = getSession(req, res);
    var admin = await isAdmin(user?.sub);
    if (admin) {
        switch (req.method) {
            case 'GET':
                let { page, limit, sort, key } = req.query;
                page = parseInt(page);
                const skipItems = page
                    ? page == 1
                        ? 0
                        : (parseInt(page) - 1) * limit
                    : 0;
                limit = limit ? parseInt(limit) : defaultLimit;
                sort = sort != 'default' ? (sort == 'name_asc' ? 1 : -1) : 0;
                let regex = '';
                if (key != 'default') {
                    regex = new RegExp(key, 'i');
                }
                key = key != 'default' ? { name: regex } : {};
                const getAllSections = async () => {
                    const total = await Section.find(key).count();
                    let data = await Section.find(key)
                        .skip(skipItems)
                        .limit(limit)
                        .sort({ name: sort })
                        .exec();
                    return {
                        sections: data,
                        page,
                        total,
                        from: total ? skipItems + 1 : 0,
                        to: total < limit + skipItems ? total : limit + skipItems,
                        pages: Math.ceil(total / limit),
                    };
                };
                let allSectionData = await getAllSections();
                res.json({ ...allSectionData });
                break;
            case 'PUT':
                var _id = req.query.Id.split(",");
                var data = {
                    name: req.body.name,
                    shortName: req.body.name.substring(0, 3)
                }
                let findData = await Section.findOne({ name: req.body.name });
                if (findData) {
                    res.json({ status: 400, 'message': 'Section already exists' });
                } else {
                    var updateData = await Section.updateMany({ _id: { $in: _id } }, data);
                    if (updateData.nModified == 0) {
                        res.json({ status: 400, 'message': 'sections not found' });
                    }
                    res.json({ status: 200, 'message': 'sections updated' });
                }
                break;
            case 'DELETE':
                const deleteId = req.query.Id.split(",");
                var deleteData = await Section.deleteMany({ _id: { $in: deleteId } });
                if (deleteData.deletedCount == 0) {
                    res.json({ status: 400, 'message': 'Section not found' });
                }
                await Category.updateMany({ section: { $in: deleteId } }, { section: null });
                res.json({ status: 200, 'message': 'Section deleted!' });
                break;
            case 'POST':
                let findDataPost = await Section.findOne({ name: req.body.name });
                if (findDataPost) {
                    res.json({ status: 400, message: 'Section already exists' });
                } else {
                    var dataSection = await Section.insertMany([{ name: req.body.name, shortName: req.body.name.substring(0, 3) }]);
                    console.log(dataSection)
                    if (dataSection.length == 0) {
                        res.json({ status: 400, 'message': 'Something is error' });
                    }
                    res.json({ status: 200, 'message': 'section created!' });
                }
                break;

            default:
                res.send({ status: 403, message: 'Not found!' });
        }
    } else {
        res.send({ status: 403, message: 'you are not authorized' });
    }

});


