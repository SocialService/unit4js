// 7. Дана строка-предложение на русском языке и
// число k (0 < k < 10). Зашифровать строку,
// выполнив циклическую замену каждой буквы
// на букву того же регистра, расположенную
// в алфавите на k-й позиции после шифруемой буквы
// (например, для k = 2 "А" перейдет в "В", "а" — в "в",
// "Б" — в "Г", "я" — в "б" и т.д.).
// Букву "ё" в алфавите не учитывать, знаки препинания и пробелы не изменять.

function secretStr (str, num) {
    if (num >= 0 && num <= 10) {
        let lowerCaseStr = str.toLowerCase()
        let alph = "абвгдежзийклмнопрстуфхцчшщъыьэюя".split('')
        let incoded = ""

        for (let i = 0; i < str.length; i += 1) {
            let currentLetter = lowerCaseStr[i]
            if (currentLetter === " ") {
                incoded += currentLetter
                continue
            }
            if (currentLetter === ".") {
                incoded += currentLetter
                continue
            }
            if (currentLetter === ",") {
                incoded += currentLetter
                continue
            }
            let currentIndex = alph.indexOf(currentLetter)
            let newIndex = currentIndex + num
            if (newIndex > 32) newIndex = newIndex - 33
            if (str[i] === str[i].toUpperCase()) {
                incoded += alph[newIndex].toUpperCase()
            }
            else incoded += alph[newIndex]
        }
        return incoded
    }
    else {
        console.log ("Шифровать не получиться num не в рамках от 1 до 10")
    }

}

secretStr("Предложение На русскОм язЫке",2)

