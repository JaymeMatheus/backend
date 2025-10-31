const request = require("supertest")
const app = require("../app")

describe("Testes da API REST", () => {
  let token
  let novoToken

  test("GET /produtos sem token deve retornar 401 e msg 'Não autorizado'", async () => {
    const res = await request(app).get("/produtos")
    expect(res.status).toBe(401)
    expect(res.body).toHaveProperty("msg", "Não autorizado")
  })

  test("GET /produtos com token inválido deve retornar 401 e msg 'Token inválido'", async () => {
    const res = await request(app)
      .get("/produtos")
      .set("authorization", "123456789")
    expect(res.status).toBe(401)
    expect(res.body).toHaveProperty("msg", "Token inválido")
  })

  test("POST /usuarios/login deve retornar 200 e conter propriedade token", async () => {
    const res = await request(app)
      .post("/usuarios/login")
      .send({ usuario: "email@exemplo.com", senha: "abcd1234" })
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty("token")
    token = res.body.token
  })

  test("GET /produtos com token válido deve retornar 200 e JSON", async () => {
    const res = await request(app)
      .get("/produtos")
      .set("authorization", token)
    expect(res.status).toBe(200)
    expect(res.headers["content-type"]).toMatch(/json/)
  })

  test("POST /usuarios/renovar deve retornar 200 e novo token", async () => {
    const res = await request(app)
      .post("/usuarios/renovar")
      .set("authorization", token)
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty("token")
    novoToken = res.body.token
  })

  test("GET /produtos com novo token deve retornar 200 e JSON", async () => {
    const res = await request(app)
      .get("/produtos")
      .set("authorization", novoToken)
    expect(res.status).toBe(200)
    expect(res.headers["content-type"]).toMatch(/json/)
  })
})
