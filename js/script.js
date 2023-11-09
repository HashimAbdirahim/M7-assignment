// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let table = document.getElementById('employees')
let empId = document.getElementById('id')
let name = document.getElementById('name')
let ext = document.getElementById('extension')
let email = document.getElementById('email')
let department = document.getElementById('department')
let output = document.getElementById('empCount')
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow()
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell(0)
    let cellName = row.insertCell(1)
    let cellExt = row.insertCell(2)
    let cellEmail = row.insertCell(3)
    let cellDep = row.insertCell(4)
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(empId.value))
    cellName.appendChild(document.createTextNode(name.value))
    cellExt.appendChild(document.createTextNode(ext.value))
    cellEmail.appendChild(document.createTextNode(email.value))
    cellDep.appendChild(document.createTextNode(department.value))
    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm delete'
    deleteBtn.appendChild(document.createTextNode('x'))
    let cellBtn = row.insertCell(5)
    cellBtn.appendChild(deleteBtn)
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++
    output.value = `(${count})`
    
})

// DELETE EMPLOYEE

table.addEventListener('click', (e) => {
    // CHECK AND SEE IF THE DELETE BUTTON WAS CLICKED
    if (e.target.classList.contains('delete')) {
        // DISPLAY CONFIRMATION OF THE DELETE TO THE USER
        if (confirm('Are you sure you want to delete this Employee?')) {
            // REMOVE THE SELECTED ROW
            table.deleteRow(e.target.parentElement.parentElement.rowIndex)
            count--;
            if (count == 0){
                output.value = ''
            }
            else{
                output.value = `(${count})`
            }
        }
    }
})