console.log("client js");

const employeeArr = [];

$(document).ready(init);

function init() {
    $(".js-employeeForm-add").on('submit', submitEmployee);
}

function submitEmployee(event) {
    event.preventDefault();
    console.log("in submitEmployee");
}

