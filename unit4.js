1. PASS
2. FAIL (внимательно читай постановку задачи !)
3. FAIL (внимательно читай постановку задачи !)
4. FAIL (В правильном решении у чая начало позиции 21 )
5. FAIL (Знаки припинанич не слова! Ошибка подсчета на такой строке. "Строка      из русских слов что-то про ... Эммм чай ? ")
6. PASS
7. FAIL (Не проходит решение на смещении 1 !!)

// 1. Дана строка-предложение, содержащая избыточные пробелы. 
// Преобразовать ее так, чтобы между словами был ровно один пробел.

const str = "I  am   learning    js  as  there is   no choise   but it   is super   cool"

function oneSpace(str) {
    let str2 = str.replace(/\s\s+/g, ' ')
    return str2
}

oneSpace(str)

// 2. Дана строка S и число N. 
// Преобразовать строку S в строку длины N следующим образом:
// если длина строки S больше N, то отбросить первые символы, 
// если длина строки S меньше N, то в ее начало добавить символы "." (точка).


// логика - 1 преобразовать N в строку, 2 сравнить количество символов и получить разницу
// 3 если больше то добавить, если меньше то убрать

const s = "someString"
const n = 12222
// !! Присваивать константе новое значение нельзя.

n = n.toString ()  // Зачем это ?????? См. условие задачи.

function compareStr (s,n) {
    if ( s.length > n.length ) {
        let z = s.length - n.length
        let dot = "."

        console.log ( dot.repeat(z) + n)
    } else if (s.length < n.length) {
        let z = n.length - s.length
        console.log ( n.slice(z))
    }
    else {
        console.log ("Длины одинаковы, можно сделать чаю")
    }
}
compareStr(s,n)

// 3. Даны два числа: N1 и N2, и две строки: S1 и S2. 
// Получить из этих строк новую строку,
// объединив N1 первых символов строки S1 и N2 последних символов строки S2.

const n1 = 3
const n2 = 3
const s1 = "string one"
const s2 = "string two"

function newStr2 (){    // Тут до сих пор путаюсь что передавать в () функции....
    // передовать все чем оперирует функция function newStr2 (n1, n2, s1, s2)
    let ss1 = s1.slice(n1)
    let ss2 = s2.split('').reverse().join('').slice(n2)

    let newStr = ss1 + ss2

    return newStr
}

newStr2()

// 4. Даны две строки: S1 и S2. 
// Проверить, содержится ли строка S2 в строке S1. 
// Если да, то вывести номер позиции, начиная с которой
// S2 содержится в S1, если нет, то вывести 0.

const s1 = "Сахар портит хороший чай"
const s2 = "чай"

if (s1.includes(s2)) {
    s1.split(" ").findIndex(function (elem){return elem == s2})
}
else {
    console.log (0)
}

const s1 = "Сахар портит хороший чай"
const s2 = "чай"

function strWrap() {
    if (s1.includes(s2)) {
        let y = s1.split(" ").findIndex(function (elem) {
            return elem == s2
        })
        return y //  на сколько правильно тут оформлен вывод вплане дополнительной переменной
        // лучше назвать это возвратом значения. Вполне корректно.
    } else {
        return 0
    }
}
strWrap()


// 5. Дана строка, состоящая из русских слов, 
// разделенных пробелами (одним или несколькими). 
// Определить количество слов в строке.

const rusWordStr = "Строка      из русских слов что-то про... Эммм чай?"

function wordCount (){
    let a = rusWordStr.replace(/\s\s+/g, ' ').split(" ").length
    return a
}
wordCount()




// 6. Дана строка-предложение на русском языке. 
// Преобразовать строку так, чтобы каждое слово 
// начиналось с заглавной буквы.



var str = "предложение на русском языке"

function firstCharToUpperCase () {
    let upperCaseWords = " "
    str = str.split(" ")
    for (var i = 0; i < str.length; i += 1) {
        upperCaseWords += str[i].substring(0, 1).toUpperCase() + str[i].substring(1, str[i].length) + " "
    }
    resutl = upperCaseWords.trim() // как можно красиво обрезать без доп переменной?
    return resutl
}

firstCharToUpperCase ()

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
