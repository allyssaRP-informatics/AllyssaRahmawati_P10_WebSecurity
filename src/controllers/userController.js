exports.getProfile = (req, res) => {

    res.status(200).json({
        message: "Profil berhasil diakses",
        user: req.user
    });

};