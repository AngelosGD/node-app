import { Router } from "express";
const router = Router();

//Pagina Principal
router.get("/", (req, res) => res.render("index", {title: 'My First Web Site With NodeJs'}));

//Para la pagina sobre nosotros
router.get("/about", (req, res) => res.render("about"));

//Para la pagina contacto
router.get("/contact", (req, res) => res.render("contact"));

export default router
