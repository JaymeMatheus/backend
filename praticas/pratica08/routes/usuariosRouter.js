const express = require("express")
const { verificarToken, gerarToken } = require("../middlewares/authMiddleware")
const router = express.Router()

router.post("/login", (req, res) => {
  const usuario = req.body.usuario
  const senha = req.body.senha
  if (!usuario || !senha) return res.status(422).json({ msg: "Campos obrigatórios ausentes" })
  const token = gerarToken({ email: usuario })
  res.status(200).json({ token })
})

router.post("/renovar", verificarToken, (req, res) => {
  const token = gerarToken({ email: req.usuario.email })
  res.status(200).json({ token })
})

module.exports = router
