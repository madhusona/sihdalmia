const watson = require('watson-developer-cloud');
console.log(process.env.WATSON_USERNAME);
const assistant = new watson.AssistantV2({
  username: process.env.WATSON_USERNAME,
  password: process.env.WATSON_PASSWORD,
  url:      process.env.WATSON_URL,
  version:  process.env.WATSON_VERSION
});

exports.getsession = body =>
  new Promise((resolve, reject) => {

    assistant.createSession({
      assistant_id: process.env.WATSON_ASSISTANT_ID,
    }, function (error, response) {
      if (error) {
       // return res.send(error);
       console.log(error);
          reject(error);
      } else {
       // return res.send(response);
       console.log(response);
          resolve(response);
      }
    });

  });

exports.getMessage = body =>
  new Promise((resolve, reject) => {
    console.log(body.input);
    assistant.message(
      {
       // workspace_id: process.env.WATSON_WORKSPACE_ID,
        input: { text: body.input },
        assistant_id: process.env.WATSON_ASSISTANT_ID,
        session_id: body.sid,
      },
      function(err, response) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(response);
          resolve(response);
        }
      }
    );
  });