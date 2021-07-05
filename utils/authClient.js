const axios = require("~/axios");

exports.isAdminClient = async () => {
    const res = await axios.get('/admin');
    return res.data.status;
}