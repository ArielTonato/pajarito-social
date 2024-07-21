import { Router } from 'express';
import jwt from 'jsonwebtoken';

export const internRouter = Router();
const ruta = "/views/interns/";

const verifyTokenAndRedirect = (req, res, successRedirectPath, failureRedirectPath) => {
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

internRouter.get("/", (req, res) => {
    const token = req.cookies.access_token;
    if (token) {
        verifyTokenAndRedirect(req, res, '/principal', '/');
    } else {
        return res.sendFile(process.cwd() + `${ruta}index.html`);
    }
});

internRouter.get('/registro', (req, res) => {
    const token = req.cookies.access_token;
    if (token) {
        verifyTokenAndRedirect(req, res, '/principal', '/');
    } else {
        return res.sendFile(process.cwd() + `${ruta}register.html`);
    }
});

internRouter.get('/principal', (req, res) => {
    const token = req.cookies.access_token;
    if (token) {
        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) {
                return res.redirect('/');
            } else {
                return res.sendFile(process.cwd() + `${ruta}principal.html`);
            }
        });
    } else {
        return res.redirect('/');
    }
});
