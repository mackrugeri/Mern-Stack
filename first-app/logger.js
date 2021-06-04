var url = 'http://mylogger.io/log';

function log(Message)
{
    console.log(Message);
}

module.exports.log = log;
module.exports.url = url;
// module.exports.calling_from_outside = url