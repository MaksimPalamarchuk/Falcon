let ukTexts = [
    'Falcon 9', 'Falcon Heavy', 'Dragon', 'Оновлення', 'Про нас', 'Галерея', 'Магазин',
    'Falcon Heavy', 'Найпотужніша діюча ракета у світі, яка перевершує за потужністю інші вдвічі.',
    'Короткий опис Falcon Heavy', 'ВИСОТА', 'ДІАМЕТР', 'МАСА', 'КОРИСНЕ НАВАНТАЖЕННЯ НА ННО', 'КОРИСНЕ НАВАНТАЖЕННЯ НА ГПО', 'КОРИСНЕ НАВАНТАЖЕННЯ НА МАРС',
    '70 м / 229,6 футів', '12,2 м / 39,9 футів', '1 420 788 кг / 3 125 735 фунтів', '63 800 кг / 140 660 фунтів', '26 700 кг / 58 860 фунтів',
    '16 800 кг / 37 040 фунтів', 'НЕЛЕПЕЖНА ПРОДУКТИВНІСТЬ', 'З тягою понад 5 мільйонів фунтів при старті, Falcon Heavy є найпотужнішою ракетою, що зараз літає. Для порівняння, стартова тяга Falcon Heavy дорівнює приблизно вісімнадцяти літакам Boeing 747, що працюють на повну потужність. Falcon Heavy може підняти на орбіту вагу, еквівалентну повністю завантаженому лайнеру Boeing 737 — разом із пасажирами, багажем та паливом.',
    'Twitter', 'Youtube', 'Instagram', 'Flickr', 'LinkedIn', 'Політика конфіденційності', 'З додатковими запитаннями звертайтесь: rideshare@spacex.com',
]
let enTexts = [
    'Falcon 9', 'Falcon Heavy', 'Dragon', 'Updates', 'About', 'Gallery', 'Shop', 'Falcon Heavy', 'The most powerful operational rocket in the world by a factor of two',
    'Falcon Heavy Overview', 'HEIGHT', 'MASS', 'PAYLOAD TO LEO', 'PAYLOAD TO GTO', 'PAYLOAD TO MARS', '70 m /229.6 ft',
    '12.2 m /39.9 ft', '1,420,788 kg /3,125,735 lb', '63,800 kg /140,660 lb', '26,700 kg /58,860 lb', '16,800 kg /37,040 lb',
    'UNMATCHED PERFORMANCE', 'With more than 5 million pounds of thrust at liftoff, Falcon Heavy is the most capable rocket flying. Bycomparison, the liftoff thrust of the Falcon Heavy equals approximately eighteen 747 aircraft at full power. Falcon Heavy can lift the equivalent of a fully loaded 737 jetliner—complete with passengers, luggage and fuel—to orbit.',
    'Twitter','Youtube','Instagram','Flickr','LinkedIn','Privacy','Policy','For additional questions, contact rideshare@spacex.com',
]



function translateToUk() {
    let targets = document.querySelectorAll(".target")
    console.log(targets)
    for (let i = 0; i < targets.length; i++) {
        targets[i].textContent = ukTexts[i]
    }
}



function translateToEn() {
    let targets = document.querySelectorAll(".target")
    console.log(targets)
    for (let i = 0; i < targets.length; i++) {
        targets[i].textContent = enTexts[i]
    }
}