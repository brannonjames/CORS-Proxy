const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const PORT = process.env.PORT || 8000;

// allow cors
app.use(cors());

// parse incoming JSON
app.use(bodyParser.json());

// create network call to url in query param
function forwardRequest(req, res) {
  var url = req.query.url;
  var data = req.body;
  var method = req.method.toLowerCase();
  axios({
      url: url,
      data: data,
      method: method,
    })
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (err) {
      console.error(err);
      res.status(err.status || 500).send(err);
    });
}

app.route('/')
  .get(forwardRequest)
  .post(forwardRequest)
  .put(forwardRequest)
  .delete(forwardRequest);

app.get('/ping', function (req, res) {
  res.sendStatus(200);
});

app.listen(PORT, function () {
  console.log('Server up and running');
});