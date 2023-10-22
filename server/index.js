const express = require("express");
const morgan = require('morgan');
const cors = require('cors'); //avoid cors error
const cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');
const APIRouter = require('./router')
const MetadataRouter = require('./router/MetadataRouter')
const CourseRouter = require('./router/CourseRouter')
const RequestMentorRouter = require('./router/RequestMentorRouter')
const app = express();
const path = require('path');
const CourseController = require("./controller/CourseController");
require("dotenv").config();
require('./controller/DatabaseController').connect(process.env.MONGODB_URI)
app.use(express.static(path.resolve(__dirname, 'client')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// cookieParser middleware
app.use(cookieParser())

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json({limit:"50mb"}));
app.use(morgan('combined'));
app.use(cors({ origin: '*' }));  //avoid "cors" error

app.use("/api",APIRouter);
app.use("/metadata",MetadataRouter);

app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/html', 'home.html'));
});

// app.get('/exam', (req, res) => {
//     console.log(req.params)
//     res.sendFile(path.resolve(__dirname, 'client/html', 'exam.html'));
// });

app.get('/exam', (req, res) => {
    console.log(req.query)
    res.render(path.resolve(__dirname, 'client/html', 'exam.ejs'), req.query);
});

app.get('/upload-entranceDocument', (req, res) => {
    // console.log(req.query.communityId)
    //res.render(path.resolve(__dirname, 'client/html', 'upload-entranceDocument.ejs'), req.query);
    res.sendFile(path.resolve(__dirname, 'client/html', 'upload-entranceDocument.html'));
});

app.get('/request-mentor', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/html', 'request-mentor.html'));
});

app.get('/notification', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/html', 'notification.html'));
});

app.use('/course',CourseRouter)

app.use('/request-mentor',RequestMentorRouter)


app.use((err, req, res, next) => {
    if (err) res.status(400).send({err})
});

app.use('/', (req, res, next) => {
    res.status(404).send({error:"Page not found."})
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});