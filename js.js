var note_array = [];

window.onload = checkStorage;

function checkStorage() {

    if (localStorage.note_storage) {
        var note_from_local_storage = localStorage.note_storage;
        note_array = JSON.parse(note_from_local_storage);
        showNotes();
    }
}

function showNotes() {
    for (var i = 0; i < note_array.length; i++) {

        var div1 = document.createElement("div");
        div1.classList.add("notes2", "div" + [i] + "");
        var del_div = document.getElementsByClassName("div" + [i] + "");
        div1.style.backgroundImage = "url('images/notebg.png')";

        var new_date = note_array[i].date1;
        var new_time = note_array[i].time1;
        var new_task = note_array[i].task1;

        var p1 = document.createElement("p");
        p1.classList.add("all-p", "pdate");
        p1.innerHTML = new_date;

        var p2 = document.createElement("p");
        p2.classList.add("all-p", "ptime");
        p2.innerHTML = new_time;

        var p3 = document.createElement("p");
        p3.classList.add("all-p", "ptask");
        p3.innerHTML = new_task;

        var button1 = document.createElement("button");
        button1.classList.add("glyphicon", "glyphicon-trash");
        button1.setAttribute("onclick", "deleteNote(" + i + ")");

        div1.appendChild(button1);
        div1.appendChild(p1);
        div1.appendChild(p2);
        div1.appendChild(p3);

        fadeIn1(div1);

        document.getElementById("notes").appendChild(div1);
    }
}

function fadeIn1(div1) {
    setTimeout(function () {
        div1.classList.add("fade-in")
    }, 1000);
}

function checkForm() {

    var time_form = document.getElementById("datetime");
    var date_form = document.getElementById("date");
    var task_form = document.getElementById("textarea");

    if (time_form.value == "" && date_form.value == "" && task_form.value == "") {
        document.getElementById("img-form4").style.display = "block";
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = "You must enter all Fields!!!";
    } else if (time_form.value == "" && date_form.value == "") {
        document.getElementById("img-form4").style.display = "block";
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = "You must enter Time & Date!!!";
    } else if (date_form.value == "" && task_form.value == "") {
        document.getElementById("img-form4").style.display = "block";
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = "You must enter Date & Task!!!";
    } else if (time_form.value == "" && task_form.value == "") {
        document.getElementById("img-form4").style.display = "block";
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = "You must enter Time & Task!!!";
    } else if (time_form.value == "") {
        document.getElementById("img-form4").style.display = "block";
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = "You must enter Time!!!";
    } else if (date_form.value == "") {
        document.getElementById("img-form4").style.display = "block";
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = "You must enter Date!!!";
    } else if (task_form.value == "") {
        document.getElementById("img-form4").style.display = "block";
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = "You must enter Task!!!";
    } else {
        document.getElementById("img-form4").style.display = "none";
        document.getElementById("error").style.display = "none";
        createNote();
    }
}

function createNote() {
    var date_note = document.getElementById("date").value;
    var time_note = document.getElementById("datetime").value;
    var task_note = document.getElementById("textarea").value;

    var obj_note = {
        date1: date_note,
        time1: time_note,
        task1: task_note
    };
    createStorage(obj_note);
}

function createStorage(obj_note) {
    note_array.push(obj_note);
    var note_data = JSON.stringify(note_array);
    localStorage.note_storage = note_data;
}

function deleteNote(del_note) {
    note_array.splice(del_note, 1);
    var delete_div = document.querySelector(".div" + [del_note] + "");
    delete_div.classList.remove("fade-in");

    delete_div.classList.add("remove");

    var data = JSON.stringify(note_array);
    localStorage.note_storage = data;

    setTimeout(function () {
        location = "index1.html"
    }, 1000);
}


function erase1(erase) {
    var change_date = document.getElementById("btn-date").id;
    var change_time = document.getElementById("btn-time").id;
    var change_task = document.getElementById("btn-task").id;

    if (change_date == erase.id) {
        document.getElementById("date").value = "";
    } else if (change_time == erase.id) {
        document.getElementById("datetime").value = "";
    } else if (change_task == erase.id) {
        document.getElementById("textarea").value = "";
    }
}