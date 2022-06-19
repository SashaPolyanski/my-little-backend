const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const bodyParser = require('body-parser')


let transporter = nodemailer.createTransport({
    service: 'gmail', // host: 'smtp.ethereal.email',
    port: 25,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'wowcirclesashapolyanski@gmail.com', pass: 'fzgoksbbpgdrntbt',
    },
    tls: {
        rejectUnauthorized: false
    }
})
//

// })


const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
const port = 3020

app.post('/sendMessage', async (req, res) => {
    let {message, email, name} = req.body
    let result = await transporter.sendMail({

        from: 'PortfolioJobs',
        to: 'SashaPolyanski@gmail.com',
        subject: 'PortfolioJobs',
        html: `This <i>message</i> was sent from: 
                <div> name: ${name}</div>
                <div>email: ${email}</div>
                <div>message: ${message}</div>`
    })

    res.send('success')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
