const router = require('express').Router();

let db = {
  user: []
}

router.post('/', (req, res) => {
  console.log(req.body)
  const addUser = { id: '1', name: req.body.data.name, password: req.body.data.password }
  db.user.push(addUser)
  console.log(db.user)

  res.json({ user: db.user })
})

router.delete('/del', (req, res) => {

  db.user = db.user.filter(el => el.id !== req.body.id)
  res.sendStatus(200)
})

module.exports = router
