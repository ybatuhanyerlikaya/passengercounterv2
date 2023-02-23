let saveEl = document.getElementById("save-el")
let gecmisBilgi = localStorage.getItem("gecmisBilgi")
let countEl = document.getElementById("count-el")
let kisiEl=document.getElementById("total-people")
let gunSayac=[]
let count = 0
let toplam= 0
let i=0


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {

   saveEl.textContent+=count+","
    gunSayac.push(count)

    for(i=gunSayac.length-1; i<gunSayac.length;i++){
        toplam+=gunSayac[i]

    }
    kisiEl.textContent =`Total People: ${toplam} `
    count=0
    countEl.textContent=count

}

