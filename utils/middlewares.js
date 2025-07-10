import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verifyTokenAndRedirect = (req, res, successRedirectPath, failureRedirectPath) => {
    const token = req.cookies.access_token;
    if (token) {
        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) {
                return res.redirect(failureRedirectPath);
            } else {
                return res.redirect(successRedirectPath);
            }
        });
    } else {
        return res.redirect(failureRedirectPath);
    }
};