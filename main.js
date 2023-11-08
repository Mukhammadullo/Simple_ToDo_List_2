let tbody = document.querySelector(".tbody")
let btnNew = document.querySelector(".btnNew")
let dialogAdd = document.querySelector(".dialogAdd")
let dialogSetings = document.querySelector(".dialogSetings")
let dialogSetings_delete = document.querySelector(".dialogSetings_delete")
let dialogAdd_btnx = document.querySelector(".dialogAdd_btnx")
let dialogAdd_save = document.querySelector(".dialogAdd_save")
let dialogAdd_img = document.querySelector(".dialogAdd_img")
let dialogAdd_name = document.querySelector(".dialogAdd_name")
let dialogAdd_email = document.querySelector(".dialogAdd_email")
let dialogAdd_state = document.querySelector(".dialogAdd_state")
let dialogAdd_city = document.querySelector(".dialogAdd_city")
let dialogAdd_phone = document.querySelector(".dialogAdd_phone")

// dialogAdd_btnx
dialogAdd_btnx.onclick = () => {
    dialogAdd.close()
}
// dialogAdd show
btnNew.onclick = () => {
    dialogAdd.showModal()
}


let data = [
    {
        id: 1,
        img: "/img/av1.svg",
        name: "Jacob Jones",
        email: "email@exemple.com",
        city: "Dushanbe",
        phone: "88888 0090",
        isComplete: false
    },
    {
        id: 2,
        img: "/img/av1.svg",
        name: "Jacob Jones",
        email: "email@exemple.com",
        city: "Kulob",
        phone: "88888 0090",
        isComplete: false
    },
    {
        id: 3,
        img: "/img/av1.svg",
        name: "Jacob Jones",
        email: "email@exemple.com",
        city: "Dushanbe",
        phone: "88888 0090",
        isComplete: false
    },
    {
        id: 4,
        img: "/img/av1.svg",
        name: "Jacob Jones",
        email: "email@exemple.com",
        city: "Bokhtar",
        phone: "88888 0090",
        isComplete: false
    },
    {
        id: 5,
        img: "/img/av1.svg",
        name: "Jacob Jones",
        email: "email@exemple.com",
        city: "Dushanbe",
        phone: "88888 0090",
        isComplete: false
    },
    {
        id: 6,
        img: "/img/av1.svg",
        name: "Jacob Jones",
        email: "email@exemple.com",
        city: "Khujand",
        phone: "88888 0090",
        isComplete: false
    },
    {
        id: 7,
        img: "/img/av1.svg",
        name: "Jacob Jones",
        email: "email@exemple.com",
        city: "Dushanbe",
        phone: "88888 0090",
        isComplete: false
    },
    {
        id: 8,
        img: "/img/av1.svg",
        name: "Jacob Jones",
        email: "email@exemple.com",
        city: "Hisor",
        phone: "88888 0090",
        isComplete: false
    }
]


// get
function get() {
    tbody.innerHTML = ""
    data.forEach((elem) => {

        let tr = document.querySelector("tr")


        let tdImg = document.createElement("img")
        tdImg.src = elem.img


        let tdName = document.createElement("tr")
        tdName.innerHTML = elem.name


        let tdEmail = document.createElement("td")
        tdEmail.innerHTML = elem.email


        let tdCity = document.createElement("td")
        tdCity.innerHTML = elem.city


        let tdStatus = document.createElement("td")
        tdStatus.innerHTML = "INECTIVE"



        let tdPhone = document.createElement("td")
        tdPhone.innerHTML = elem.phone

        let tdThreedot = document.createElement("td")
        tdThreedot.innerHTML = "..."
        tdThreedot.classList.add("tdThreedot")
        tdThreedot.onclick = () => {
            dialogSetings.showModal()
        }

        // delete
        dialogSetings_delete.onclick = () => {
            delUser(elem.id)
        }

        tbody.append(tdName, tdEmail, tdCity, tdStatus, tdPhone, tdThreedot)


    })
}
get()



// delete
function delUser(id) {
    data = data.filter((elem) => {
        return elem.id != id
    })
    get()
    dialogSetings.close()
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
    get()
}




