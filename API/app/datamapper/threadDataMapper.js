const client = require('./client');

const threadDataMapper = {
    async getAllThreads(sewaddict_id) {
        const result = await client.query(`
        SELECT * FROM sewing_thread WHERE sewaddict_id = $1`, [sewaddict_id]);

        if (result.rowCount == 0) {
            return null;
        } else {
            return result.rows
        };
    }
};

module.exports = threadDataMapper;