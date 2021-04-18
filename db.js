var mongoose = require('mongoose');
var uri = "mongodb+srv://admin:rnuuIkHIQPpESjFB@cluster0.ntvqy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true });
