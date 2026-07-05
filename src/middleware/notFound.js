const notFound = (req, res, next) => {

    res.status(404).json({
        message: 'Endpoint tidak ditemukan'
    });

};

module.exports = notFound;