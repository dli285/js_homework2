//Инпуты
let studentsName = document.querySelector('#students-name')


//Кнопки
let addStudentsButton = document.querySelector('#add-student')

//Таблица
let studentsListElements = document.querySelector('#student-list')

let studentsArray = []

for (let i = 0; i < studentsArray.lenght; i++ ){
    console.log(students[i])
}

addStudentsButton.addEventListener('click', function() {
    let studentsNameValue = studentsName.value;
    
    let studentsString = `Студент: ${studentsNameValue}`

    studentsArray.push(studentsString)

    console.log(studentsArray)
    let innerHtmlWithStudents = ''

    studentsArray.forEach((item) => {
        innerHtmlWithStudents += `<div>${item}</div>`
    })

    studentsListElements.innerHTML = innerHtmlWithStudents
})