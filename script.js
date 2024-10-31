let firstName = prompt("Napiš své křestní jméno, bez diakritiky:")
let surname = prompt("Napiš své přijmení, bez diakritiky:")

surname = surname.trim().slice(0, 5).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").padEnd(5, '0')
firstName = firstName.trim().slice(0,3).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").padEnd(3, '0')
console.log(surname)
console.log(firstName)

const parsedEmail = {
userName: surname + firstName,
atIndex: "@",
domain: "fit.cvut.cz",
}

document.body.innerHTML += `Tvůj e-mail je: ${parsedEmail.userName}${parsedEmail.atIndex}${parsedEmail.domain}`
