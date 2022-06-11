const express = require('express')
const router = express.Router()
const ModelHotel = require('../model/hotel.model')

router.get('/hotels/all', (req, res) => {
    ModelHotel.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
        return data
    })
})

router.get('/hotels/:id', (req, res) => {
    const id = req.params.id
    ModelHotel.findById(id, (err, data) =>{
        if(err) {
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
    })
})

router.post('/hotels/create', (req, res) => {
    const Hoteldata = req.body
    ModelHotel.create(Hoteldata, (err, data) => {
        if(err) {
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})


router.delete('/hotels/:id', (req, res) => {
    const id = req.params.id
    ModelHotel.findByIdAndDelete(id, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

router.put('/hotels/:id', (req, res) => {
    const id = req.params.id
    const hoteldata = req.body
    ModelHotel.findByIdAndUpdate(id, hoteldata, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.send(data)
        }
    })
})

module.exports = router