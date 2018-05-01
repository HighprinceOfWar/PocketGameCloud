const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initalizeApp();


// [START addGame]
// [START addGameTrigger]
exports.addGame = functions.https.onRequest((req, res) => {
// [END addGameTrigger]
  // Grab the game metadata.
  const gameData = req.body;
  const fakeId = gameData.GameName + 'fakeId'
  // [START adminSdkAdd]
  // Push the new game into the Realtime Database using the Firebase Admin SDK.
  return admin.firestore().collection('gameMetadata').add({fakeId: gameData}).then((writeResult) => {
    // Send back a message that we've succesfully saved the game
    return res.json({result: `Game was created: ${writeResult.}.`});
  });
  // [END adminSdkAdd]
});
// [END addGame]