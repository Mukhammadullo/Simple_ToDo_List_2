let tbody = document.querySelector(".tbody")
let btnNew = document.querySelector(".btnNew")
let dialogAdd = document.querySelector(".dialogAdd")
let dialogSetings = document.querySelector(".dialogSetings")
let dialogSetings_delete = document.querySelector(".dialogSetings_delete")
let dialogSetings_edit = document.querySelector(".dialogSetings_edit")
let dialogAdd_btnx = document.querySelector(".dialogAdd_btnx")
let dialogAdd_save = document.querySelector(".dialogAdd_save")
let dialogAdd_img = document.querySelector(".dialogAdd_img")
let dialogAdd_name = document.querySelector(".dialogAdd_name")
let dialogAdd_surname = document.querySelector(".dialogAdd_surname")
let dialogAdd_email = document.querySelector(".dialogAdd_email")
let dialogAdd_state = document.querySelector(".dialogAdd_state")
let dialogAdd_city = document.querySelector(".dialogAdd_city")
let dialogAdd_phone = document.querySelector(".dialogAdd_phone")
let dialogAdd_cancel = document.querySelector(".dialogAdd_cancel")
let dialogEdit = document.querySelector(".dialogEdit")
let EditImg = document.querySelector(".EditImg")
let EditName = document.querySelector(".EditName")
let EditEmail = document.querySelector(".EditEmail")
let EditCity = document.querySelector(".EditCity")
let EditPhone = document.querySelector(".EditPhone")
let dialogEditbtn = document.querySelector(".dialogEditbtn")
let inpSearch = document.querySelector(".inpSearch")
let dialogEditbtnCancel = document.querySelector(".dialogEditbtnCancel")
let dialogEdit_btnx = document.querySelector(".dialogEdit_btnx")
let dialogSetings_view = document.querySelector(".dialogSetings_view")
let dialogInfo = document.querySelector(".dialogInfo")
let info_btnx = document.querySelector(".info_btnx")
let imgInfo = document.querySelector(".imgInfo")
let infoName = document.querySelector(".infoName")
let infoEmail = document.querySelector(".infoEmail")
let infoCity = document.querySelector(".infoCity")
let infoStatus = document.querySelector(".infoStatus")
let infoPhone = document.querySelector(".infoPhone")
let InfoDel = document.querySelector(".InfoDel")
let InfobtnEdit = document.querySelector(".InfobtnEdit")

let inpSelCity = document.querySelector(".inpCity")
inpSelCity.onclick = () => {
}



InfobtnEdit.onclick = () => {
    dialogEdit.showModal()
}

info_btnx.onclick = () => {
    dialogInfo.close()
    dialogSetings.close()
}

// dialogSetings_view
dialogSetings_view.onclick = () => {
    dialogInfo.showModal()
}

// dialogEdit_btnx
dialogEdit_btnx.onclick = () => {
    dialogSetings.close()
    dialogEdit.close()
}

// dialogEditbtnCancel
dialogEditbtnCancel.onclick = () => {
    dialogSetings.close()
    dialogEdit.close()
}

dialogAdd_cancel.onclick = () => {
    dialogAdd.close()
}
// dialogAdd_btnx
dialogAdd_btnx.onclick = () => {
    dialogAdd.close()
}
// dialogAdd show
btnNew.onclick = () => {
    dialogAdd.showModal()
}


// btnEdit
dialogSetings_edit.onclick = () => {
    dialogEdit.showModal()
}


// dialogEditbtn
dialogEditbtn.onclick = () => {
    dialogEdit.close()
}

let data = [
    {
        id: 1,
        img: "/img/av1.svg",
        name: "Jacob Jones",
        email: "jackson.graham@example.com",
        city: "Dushanbe",
        phone: "88888 0090",
        isComplete: false
    },
    {
        id: 2,
        img: "/img/av2.svg",
        name: "Heny Hawkins",
        email: "hell.email@exemple.com",
        city: "Kulob",
        phone: "88888 0090",
        isComplete: false
    },
    {
        id: 3,
        img: "/img/av3.svg",
        name: "Jenny Wilson",
        email: "bill.sandears@example.com",
        city: "Bokhtar",
        phone: "88888 0090",
        isComplete: false
    }
]

let search = document.querySelector(".inpSearch2")
//search
search.oninput = () => {
    let word = search.value.toLowerCase().trim()
    let data2 = data.filter(el => {
        return el.name.toLowerCase().trim().includes(word)
    })
    get(data2)
}


// get
function get(data) {
    tbody.innerHTML = ""
    data.forEach((elem) => {

        let tr = document.createElement("tr")

        let divName = document.createElement("div")
        divName.classList.add("divName")
        let divTwo = document.createElement("div")
        let tdName = document.createElement("td")


        let tdImg = document.createElement("img")
        tdImg.src = elem.img


        let name = document.createElement("h3")
        name.innerHTML = elem.name


        let tdEmail = document.createElement("h5")
        tdEmail.innerHTML = elem.email
        divTwo.append(name, tdEmail)
        divName.append(tdImg, divTwo)
        tdName.appendChild(divName)


        let tdCity = document.createElement("td")
        tdCity.innerHTML = elem.city


        let btnIn = document.createElement("button")
        btnIn.innerHTML = "inective"
        btnIn.classList.add("btnIn")
        let tdBtnIn = document.createElement("td")
        tdBtnIn.append(btnIn)



        let tdPhone = document.createElement("td")
        tdPhone.innerHTML = elem.phone

        let tdThreedot = document.createElement("td")
        tdThreedot.innerHTML = "..."
        tdThreedot.classList.add("tdThreedot")
        tdThreedot.onclick = () => {
            infoUser(elem.id)
            dialogSetings.showModal()
        }

        // delete
        dialogSetings_delete.onclick = () => {
            delUser(elem.id)
        }

        InfoDel.onclick = () => {
            delUser(elem.id)
            dialogInfo.close()
        }


        // dialogSetings_edit
        dialogSetings_edit.onclick = () => {
            editUser(elem.id)
        }



        // Complete
        // btnIn.onclick = () => {
        //     if (elem.isComplete == true) {
        //         btnCom.innerHTML = "true"
        //         btnCom.style.backgroundColor = "green"
        //     }
        //     btnIn.onclick = () => {
        //         completeuser(elem.id)
        //     }
        // }

        tr.append(tdName, tdCity, tdBtnIn, tdPhone, tdThreedot)
        tbody.appendChild(tr)

    })
}
get(data)

let inpCityjon = document.querySelector(".inpCity")

inpCityjon.onclick = () => {
    if (inpCityjon.value == "All cites") {
        get(data)
    }
    if (inpCityjon.value == "Dushanbe") {
        let a = data.filter(el => el.city == "Dushanbe")
        get(a)
    }
    if (inpCityjon.value == "Bokhtar") {
        let a = data.filter(el => el.city == "Bokhtar")
        get(a)
    }
}

// delete
function delUser(id) {
    let data2 = data.filter((elem) => {
        return elem.id != id
    })
    dialogSetings.close()
    get(data2)
}


// add
dialogAdd_save.onclick = () => {
    let newUser = {
        id: new Date(),
        img: dialogAdd_img.value,
        name: dialogAdd_name.value,
        email: dialogAdd_email.value,
        city: dialogAdd_city.value,
        phone: dialogAdd_phone.value,
        isComplete: false
    }
    data.push(newUser)
    dialogAdd.close()
    dialogAdd_img.value = ""
    dialogAdd_name.value = ""
    dialogAdd_email.value = ""
    dialogAdd_city.value = ""
    dialogAdd_phone.value = ""
    get(data)
}




// edit

let idx
function editUser(id) {
    dialogEdit.showModal()
    let user = data.find((elem) => elem.id == id)
    EditImg.value = user.img
    EditName.value = user.name
    EditEmail.value = user.email
    EditCity.value = user.city
    EditPhone.value = user.phone
    idx = user.id
}

dialogEditbtn.onclick = () => {
    let data2 = data.map((elem) => {
        if (elem.id == idx) {
            elem.img = EditImg.value
            elem.name = EditName.value
            elem.email = EditEmail.value
            elem.city = EditCity.value
            elem.phone = EditPhone.value
        }
        return elem
    })
    get(data2)
    dialogEdit.close()
    dialogSetings.close()
}






// infoUser
function infoUser(id) {
    let userIn = data.find((elem) => elem.id == id)
    infoName.innerHTML = userIn.name
    imgInfo.src = userIn.img
    infoName.innerHTML = userIn.name
    infoEmail.innerHTML = userIn.email
    infoCity.innerHTML = userIn.city
    infoStatus.innerHTML = userIn.isComplete
    infoPhone.innerHTML = userIn.phone
}


// complete
// function completeuser(id) {
//     data = data.map((elem) => {
//         if (elem.id == id) {
//             elem.complete = !elem.complete
//         }
//         return elem
//     })
//     get();
// }
