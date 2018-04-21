var config = {
    apiKey: "AIzaSyB91tuFGa8nPYI0qzuvHEG0idsAwgRBLx8",
    authDomain: "blooddonate-6830c.firebaseapp.com",
    databaseURL: "https://blooddonate-6830c.firebaseio.com",
    projectId: "blooddonate-6830c",
    storageBucket: "blooddonate-6830c.appspot.com",
    messagingSenderId: "261240468769"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

 var ref = database.ref('donors');
  ref.on('value',gotData,errData);

function gotData(data)
{
	console.log(data);
var donors=data.val();
var keys=Object.keys(donors);
console.log(keys);
for(var i=0;i<keys.length;i++)
{
var k=keys[i];
var donorName=donors[k].donorName;
var donorAddress=donors[k].donorAddress;
var donorAge=donors[k].donorAge;
var donorPhone=donors[k].donorPhone;
var donorGender=donors[k].donorGender;
var donorBloodGroup=donors[k].donorBloodGroup;


var li=document.createElement('tr');
var donorData=donorName;
var textnode=document.createTextNode(donorData);
li.appendChild(textnode);
document.getElementById("donorName").appendChild(li);


var li1=document.createElement('tr');
var donorData=donorAddress;
var textnode=document.createTextNode(donorData);
li1.appendChild(textnode);
document.getElementById("donorAddress").appendChild(li1);


var li2=document.createElement('tr');
var donorData=donorAge;
var textnode=document.createTextNode(donorData);
li2.appendChild(textnode);
document.getElementById("donorAge").appendChild(li2);


var li3=document.createElement('tr');
var donorData=donorGender;
var textnode=document.createTextNode(donorData);
li3.appendChild(textnode);
document.getElementById("donorGender").appendChild(li3);


var li4=document.createElement('tr');
var donorData=donorBloodGroup;
var textnode=document.createTextNode(donorData);
li4.appendChild(textnode);
document.getElementById("donorBloodGroup").appendChild(li4);

var li5=document.createElement('tr');
var donorData=donorPhone;
var textnode=document.createTextNode(donorData);
li5.appendChild(textnode);
document.getElementById("donorPhone").appendChild(li5);
}
}
function errData(err)
{
	console.log(err);
alert(err);
}
