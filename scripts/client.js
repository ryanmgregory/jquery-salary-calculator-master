console.log("client js");

const employeeArray = [];

$(document).ready(init);

function init() {
    $(".js-employeeForm-add").on('submit', submitEmployee);
}

function submitEmployee(event) {
    event.preventDefault();
    console.log("in submitEmployee");

    const employeeObject = {
        firstName: $('.js-input-firstName').val(),
        lastName: $('.js-input-lastName').val(),
        idNumber: $('.js-input-employeeID').val(),
        title: $('.js-input-title').val(),
        annualSalary: $('.js-input-salary').val(),
    };
    employeeArray.push(employeeObject);
    console.log('Employees', employeeArray)
}

