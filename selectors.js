console.log("***********Selectors*********")

document.title = "FS19"

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

console.log(document.getElementById("add-new-item"));

// id si add-new-item olan elemanı seçer
const headerText = document.getElementById("add-new-item")


//! seçilen elemanın style ını manipüle ettik
// herşey key-value şeklinde yazılır
headerText.style.color = "blue"
headerText.style.backgroundColor = "orange"
headerText.style.border = "2px solid black"

//! Note property'lerde kebap-case yerine camel-case notasyonu ile yazılır


const addBtn = document.getElementById("btn")
console.log(addBtn);


//! innerHTML kullanılmayacak açık var hacklenirsin

const myİnput = document.getElementById("input")
console.log(myİnput.value);


//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================


//* ==========================================
//*              QUERYSELECTOR()
//* ==========================================


//* ==========================================
//*              QUERYSELECTORALL()
//* ==========================================