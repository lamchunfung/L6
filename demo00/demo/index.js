var getRawBody = require('raw-body');
var getFormBody = require('body/form');
var body = require('body');


/*
if you open the initializer feature, please implement the initializer function, as below:
module.exports.initializer = function(context, callback) {
    console.log('initializing');
    callback(null, '');
};
*/

const r = require('./route');

module.exports.handler = function (req, resp, context) {
    console.log('hello world')
    console.log(req.url)
    resp.setHeader('content-type', 'application/json')
    var uri = (req.url).split('/')
    if (uri.length == 0) {
        resp.send(JSON.stringify({ 'code': 400, 'body': 'Bad Request' }, null, ''))
    } else {
        var route = uri[uri.length - 1]
        console.log(route)
        switch (req.method) {
            case 'GET':
                resp.send(JSON.stringify({ 'code': 200, 'body': r.get(route) }))
                /* resp.send(JSON.stringify({
                    'code': 200, 'body': 'This is a GET request'
                })) */
                break
            case 'POST':
                resp.send(JSON.stringify({
                    'code': 200, 'body': 'This is a POST request'
                }))
        }
    }
}

/* module.exports.handler = function (req, resp, context) {
    console.log('hello world');

    var params = {
        path: req.path,
        queries: req.queries,
        headers: req.headers,
        method: req.method,
        requestURI: req.url,
        clientIP: req.clientIP,
    }

    getRawBody(req, function (err, body) {
        resp.setHeader('content-type', 'text/plain');
        for (var key in req.queries) {
            var value = req.queries[key];
            resp.setHeader(key, value);
        }
        params.body = body.toString();
        resp.send(JSON.stringify(params, null, '    '));
    });

    getFormBody(req, function(err, formBody) {
        for (var key in req.queries) {
          var value = req.queries[key];
          resp.setHeader(key, value);
        }
        params.body = formBody;
        console.log(formBody);
        resp.send(JSON.stringify(params));
    });
} */
