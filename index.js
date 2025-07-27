const express = require("express");
const app = express();
app.use(express.json());

app.post("/validar-web", (req, res) => {
    const website = (req.body.website || "").toLowerCase();

    const dominiosNoValidos = [
        "facebook.com",
        "instagram.com",
        "linkedin.com",
        "linktr.ee",
        "youtube.com",
        "tiktok.com",
        "twitter.com",
        "wa.me",
        "goo.gl",
        "bit.ly",
        "maps.app.goo.gl",
        "forms.gle"
    ];

    const esWebValida = !dominiosNoValidos.some(dominio => website.includes(dominio));

    res.json({
        tieneWeb: esWebValida ? "Sí" : "No",
        websiteFiltrado: esWebValida ? website : ""
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
