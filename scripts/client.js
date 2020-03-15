console.log("client js");

const employeeArray = [];

$(document).ready(init);

function init() {
    $(".js-employeeForm-add").on('submit', submitEmployee);
    $(".js-table-body").on('click', '.js-btn-delete', deleteEmployee);
}

function deleteEmployee() {
    // console.log('delete', event);
    console.log('DELETE:', this);
    // $(this).parent().parent().remove();  Does not affect [] only DOM.
    // $(this).data('index'); WILL GIVE BACK ALL DATA need to SPECIFY:
    const employeeIndex = $(this).data('index'); //specify
    console.log('deleted:', employeeIndex);

    employeeArray.splice(employeeIndex, 1);   // affect [].

    render();
    console.log('Employee Array:', employeeArray);
}

function submitEmployee(event) {
    event.preventDefault();
    console.log("in submitEmployee");

    const employeeObject = {
        firstName: $('.js-input-firstName').val(),
        lastName: $('.js-input-lastName').val(),
        idNumber: $('.js-input-employeeID').val(),
        title: $('.js-input-title').val(),
        annualSalary: parseFloat($('.js-input-salary').val()),
    };
    employeeArray.push(employeeObject);
    console.log('Employees', employeeArray)
    render();
}

function render() {
    $('.js-table-body').empty();
    let totalCost = 0;
    for (let i = 0; i < employeeArray.length; i++) {
        const individualEmployee = employeeArray[i];
        totalCost += individualEmployee.annualSalary;
        $('.js-table-body').append(`
        <tr>
        <td>${individualEmployee.firstName}</td>
        <td>${individualEmployee.lastName}</td>
        <td>${individualEmployee.idNumber}</td>
        <td>${individualEmployee.title}</td>
        <td>$${individualEmployee.annualSalary}</td>
        <td><button class="js-btn-delete" data-index="${i}">Delete</td>
        </tr>
        `);
    }

    $('.js-total-cost').text(`$${totalCost}`);
}
