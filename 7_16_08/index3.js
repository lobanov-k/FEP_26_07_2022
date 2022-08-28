let str2 = [];

function removeLetter (str, [letter1, letter2]) { //Функция превращения заданной строки в массив
    str1 = str.split(''); 
    str2 = str1.filter(element => element !== letter1 && element !== letter2)
    console.log(str2.join('')); //Массив с удалёнными элементами превращаем в строку  
}

removeLetter('Vereshchak Vadim Vitaliyovych', ['V', 'a']); //Ввести строку и удаляемые элементы



