console.log('The DOM is ready');
$(readyNow);

let employee = [];


function readyNow(){
    //console.log('HIIII ');
    $('.SubmitBtn').on('click', addNewEmployee);
    //$('#button').on('click', appendToDom);
   
} // end onRead

function addNewEmployee(){
console.log('Adding Employee!');

let newPerson = {
    firstName: $('#first-name').val(),
    lastName: $('#last-name').val(),
    ID: $('#ID').val(),
    title: $('#title').val(),
    annualSalary: $('#annual-salary').val()
}

employee.push(newPerson);

appendToDom();
} // end addEmployee

addNewEmployee();   // calling addNewEmployee function

function appendToDom(){
    console.log('Working!!!');
    //console.log($(this));
   // $('.employee-data').empty();
    
    for(person of employee){
        $('.employee-data').empty().append(`
        <td>${person.firstName}</td> <td>${person.lastName}</td>
         <td>${person.ID}</td> <td>${person.title}</td> <td>${person.annualSalary}</td>
        `);
    }
        $('#first-name').val(''),
        $('#last-name').val(''),
        $('#ID').val(''),
        $('#title').val(''),
        $('#annual-salary').val('')
    } // end appendToDom function


