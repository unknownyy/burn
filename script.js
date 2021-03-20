let database = firebase.database()

document.getElementById("my-form").addEventListener("submit", function(event){
  event.preventDefault();
  let noteString = document.getElementById("note_input").value;

  database.ref('notes').push(noteString);
  document.getElementById("note_input").value = "";
  alert("Note added!");
});

database.ref('notes').on('value', (snapshot) => {
  let notes = snapshot.val();
  document.getElementById('notes-container').innerHTML = "";
  let table = "";
  for (let id in notes){
    let note =  notes[id];
    table += `<tr><td>${note}</td></tr>`
  }
  document.getElementById('notes-container').innerHTML = table
});