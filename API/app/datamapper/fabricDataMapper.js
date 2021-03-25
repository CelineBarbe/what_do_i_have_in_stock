const client = require('./client');

const fabricDataMapper = {
    async getAllFabrics(sewaddict_id) {
        const result = await client.query(`
        SELECT * FROM fabric WHERE sewaddict_id = $1`, [sewaddict_id]);

        if (result.rowCount == 0) {
            return null;
        } else {
            return result.rows
        };
    }
};

module.exports = fabricDataMapper;