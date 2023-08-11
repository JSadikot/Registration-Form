var form = document.getElementById("form");
var submit = document.querySelector(".form-btn");
var element = form.elements;
var show = document.querySelector(".show");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    data();

    form.reset();

});

function data() {
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var name = document.createElement("div");
    var en = document.createElement("div");
    var branch = document.createElement("div");
    var email = document.createElement("div");
    var mobile = document.createElement("div");
    var skills = document.createElement("div");

    name.innerHTML = "NAME: " + element[0].value;
    en.innerHTML = "Enroll. No.: " + element[1].value;
    branch.innerHTML = "BRANCH: " + element[2].value;
    email.innerHTML = "EMAIL: " + element[3].value;
    mobile.innerHTML = "MOBILE: " + element[4].value;
    if (element[5].checked) {
        skills.innerHTML = "SKILLS: HTML";
    }
    if (element[6].checked) {
        skills.innerHTML = "SKILLS: CSS";
    }
    if (element[7].checked) {
        skills.innerHTML = "SKILLS: JavaScript";
    }
    if (element[5].checked && element[6].checked) {
        skills.innerHTML = "SKILLS: HTML , CSS ";
    }
    if (element[6].checked && element[7].checked) {
        skills.innerHTML = "SKILLS: CSS, JavaScript ";
    }
    if (element[5].checked && element[7].checked) {
        skills.innerHTML = "SKILLS: HTML , JavaScript ";
    }
    if (element[5].checked && element[6].checked && element[7].checked) {
        skills.innerHTML = "SKILLS: HTML, CSS, JavaScript ";
    }

    div2.appendChild(name);
    div2.appendChild(en);
    div2.appendChild(branch);
    div2.appendChild(email);
    div2.appendChild(mobile);
    div2.appendChild(skills);
    div1.appendChild(div2);
    show.appendChild(div1);

    div1.classList.add("box");
    div2.classList.add('div2');
    show.classList.add("show");

}

