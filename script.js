console.log('The DOM is ready');
$(readyNow);

let employee = [];


function readyNow(){
    //console.log('HIIII ');
    $('#addEmployeeBtn').on('click', addNewEmployee);
    //$('#addEmployeeBtn').on('click', appendToDom);
   
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
    let updateTd = $('.employee-data');
    $(updateTd).empty();
    
    for(person of employee){
        $('.employee-data').empty().append(`
        <td type = "text">` + person.firstName + `</td> <td type = "text">` +person.lastName + `</td>
         <td type = "number">` + person.ID + `</td> <td tyype = "text">` + person.title + `</td> <td type = "number" class = "salary">` + person.annualSalary + `</td>
        `);
    }
        $('#first-name').val(''),
        $('#last-name').val(''),
        $('#ID').val(''),
        $('#title').val(''),
        $('#annual-salary').val('')
    } // end appendToDom function


