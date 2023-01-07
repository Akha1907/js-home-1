let money = Number(prompt("Alisher sayohatga chiqishni istasangiz to'plamgan pullarizi kiriting va shu orqali bilishingiz mumkun?"))
let airplane = 500
let hotel = 200
let museum = 1400
let overall = ((airplane + hotel) * 10.900)+ (museum * 12272.64)
if (money > overall){
    console.log("Oq yo'l, Alisher.!")
    document.write("Oq yo'l, Alisher.!")
} else if (money < overall){
    console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan.!")
    document.write("Alisher, ozgina sabr qilish kerak bo'lar ekan.!")
}