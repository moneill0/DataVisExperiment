// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCMxqlNKDuvKl9U5Xj0DcaytLNuVoNDwy8",
  authDomain: "experiment-fccd0.firebaseapp.com",
  databaseURL: "https://experiment-fccd0.firebaseio.com",
  projectId: "experiment-fccd0",
  storageBucket: "experiment-fccd0.appspot.com",
  messagingSenderId: "275141810661",
  appId: "1:275141810661:web:09431fe5cd19e55b48b70c",
  measurementId: "G-93Q8JZ0Z79"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference results collection where all the input data will be stored
var resultsRef = firebase.database().ref('results');

// generates a random participantID
function genID(limit) {
    return Math.random().toString(36).substr(2, limit);
}

var participantID = genID(6); // random participantID
console.log(participantID);

// Listen for when the user hits the submit button for each vis
document.getElementById('formVis1').addEventListener('submit', submitVis1);
document.getElementById('formVis2').addEventListener('submit', submitVis2);
document.getElementById('formVis3').addEventListener('submit', submitVis3);


// submit form for Vis1 -> big-diff
function submitVis1(e) {
    e.preventDefault();

    // Get values
    var vis = "vis1";
    var truePercent = 50; // the smaller is 50% of the larger (10/20)
    var inputResult = getInputVal('answerVis1');

    // save result
    saveResult(participantID, vis, truePercent, inputResult);
}

// submit form for Vis2 -> no-diff
function submitVis2(e) {
    e.preventDefault();

    // Get values
    var vis = "vis2";
    var truePercent = 100; // the two dots are the same size (15/15)
    var inputResult = getInputVal('answerVis2');

    // save result
    saveResult(participantID, vis, truePercent, inputResult);
}

// submit form for Vis3 -> slight-diff
function submitVis3(e) {
    e.preventDefault();

    // Get values
    var vis = "vis3";
    var truePercent = 85; // the smaller is 85% of the larger (17/20)
    var inputResult = getInputVal('answerVis3');

    // save result
    saveResult(participantID, vis, truePercent, inputResult);
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save result to firebase
function saveResult(pID, vis, truePercent, inputResult) {
    var newResultRef = resultsRef.push();
    newResultRef.set({ ParticipantID: pID, Vis: vis, TruePercent: truePercent, ReportedPercent: inputResult });
}
