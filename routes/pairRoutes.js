const express = require('express')
const pairRouter = express.Router()
const Pair = require('../models/Pair')

pairRouter.route('/')
    .get((req, res) => {
        console.log(req)
        Pair.find((err, allTheItems) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(allTheItems)
        })
    })
    .post((req, res) => {
        console.log(req.body)
        const newItem = new Pair(req.body)
        newItem.save((err, newSavedItem) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send({newSavedItem: newSavedItem, msg: "Food item updated"})
        })
    })

pairRouter.route('/:id')
    .get((req, res) => {
        Pair.findById(req.params.id, (err, foundItem) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(foundItem)
        })
    })
    .put((req, res) => {
        Pair.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true },
            (err, updatedPair) => {
                if (err) return res.status(500).send(err)
                return res.status(201).send(updatedPair)
            }
        )
    })
    .delete((req,res) => {
        Pair.findOneAndRemove(
            { _id: req.params.id },
            (err, deletedItem) => {
                if (err) return res.status(500).send(err)
                return res.status(202).send({ deletedItem, msg: "Item deleted" })
            }
        )
    })

module.exports = pairRouter
