const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const admin = require('firebase-admin')
admin.initializeApp()
const db = admin.firestore()
const app = express()

app.use(cors({ origin: true }))

app.get('/users', async (req, res) => {
    const usersRef = await db.collection('users').get()

    let users = usersRef.docs.map((doc) => {
        return doc.data()
    })

    res.send(users)
})

exports.api = functions.region('europe-west1').https.onRequest(app)
