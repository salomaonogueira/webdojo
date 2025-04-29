const express = require('express')
const cors = require('cors')

const app = express()
const port = 3333

// Habilita o CORS para todas as origens
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({message:'API do Curso Ninja do Cypress!'})
})

app.post('/api/users/register', (req, res) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Name is required!' });
  }

  if (!email) {
    return res.status(400).json({ message: 'Email is required!' });
  }

  if (!password) {
    return res.status(400).json({ message: 'Password is required!' });
  }

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Preencha todos os campos!' });
  }

  return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
