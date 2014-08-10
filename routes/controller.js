/*
 * Render jade templates
 */
module.exports = function (app) {
/*
    app.post('/save', function(req, res) {
        console.log('just rendering /save')
        var newTodo = {};
        newTodo.name = req.body['todo-text'];
        newTodo.id = newTodo.name.replace(" ", "-");

        var redis;
        if (process.env.REDISTOGO_URL) {
            var rtg   = require("url").parse(process.env.REDISTOGO_URL);
            redis = require("redis").createClient(rtg.port, rtg.hostname);
            redis.auth(rtg.auth.split(":")[1]);
        } else {
            redis = require("redis").createClient();
        }
        redis.hset("Todo", newTodo.id, newTodo.name);

        res.redirect("back");
    });
*/
    app.get('/', function (req, res) {
        console.log('just rendering /')
        res.render('index');
    });
/*
    app.get('/pr', function (req, res) {
        console.log('just rendering /pr')
        var todos = [];
        if (process.env.REDISTOGO_URL) {
            var rtg   = require("url").parse(process.env.REDISTOGO_URL);
            redis = require("redis").createClient(rtg.port, rtg.hostname);
            redis.auth(rtg.auth.split(":")[1]);
        } else {
            redis = require("redis").createClient();
        }
        redis.hgetall("Todo", function(err, objs) {
            console.log('just fetching some objects')
            for(var k in objs) {
                todos.push( { text: objs[k] });
            }
            res.render('pr', {
                title: 'New Todo List',
                todos: todos
            });
        });
    });
*/
}
