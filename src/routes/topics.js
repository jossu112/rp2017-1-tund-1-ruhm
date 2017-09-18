const express = require('express')
const router = express.Router()

const Topic = require('../models/topics')

router.get('/', (req, res) => {
  Topic.find({}).then(entries => {
    return res.json({ topics: entries })
  }).catch(e => {
    console.error(e)
    return res.status(400).send({ error: { msg: 'something went wrong here' } })
  })
})

router.get('/:id', (req, res, next) => {
  const {id} = req.params
  if (!id) return res.status(400)

  return res.json({ topics: [] })
})

module.exports = router
