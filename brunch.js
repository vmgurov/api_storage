<script>
    // Функция для получения номера недели в рамках года
    Date.prototype.getWeek = function() {
        var onejan = new Date(this.getFullYear(), 0, 1);
        return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
    }

    // Получаем номер недели
    var weekNumber = (new Date()).getWeek();

    // Список допустимых дней недели
    var dayNames = ['vs', 'pn', 'vt', 'sr', 'ch', 'pt', 'sb'];
    var now = new Date();

    // День недели сегодня
    var dayName = dayNames[now.getDay()]

    // 0 - четная неделя, 1 - нечетная неделя
    var pictures = {
        0: {
            'pn': 'https://amsrus.ru/wp-content/uploads/2015/02/13.-Lama-odomashnennaya-alpaka.jpg',
            'vt': 'https://amsrus.ru/wp-content/uploads/2015/02/13.-Lama-odomashnennaya-alpaka.jpg',
            'sr': 'https://amsrus.ru/wp-content/uploads/2015/02/13.-Lama-odomashnennaya-alpaka.jpg',
            'ch': 'https://amsrus.ru/wp-content/uploads/2015/02/13.-Lama-odomashnennaya-alpaka.jpg',
            'pt': 'https://amsrus.ru/wp-content/uploads/2015/02/13.-Lama-odomashnennaya-alpaka.jpg',
            'sb': 'https://amsrus.ru/wp-content/uploads/2015/02/13.-Lama-odomashnennaya-alpaka.jpg',
            'vs': 'https://amsrus.ru/wp-content/uploads/2015/02/13.-Lama-odomashnennaya-alpaka.jpg'
        },
        1: {
            'pn': 'https://amsrus.ru/wp-content/uploads/2015/02/13.-Lama-odomashnennaya-alpaka.jpg',
            'vt': 'https://amsrus.ru/wp-content/uploads/2015/02/13.-Lama-odomashnennaya-alpaka.jpg',
            'sr': 'https://amsrus.ru/wp-content/uploads/2015/02/13.-Lama-odomashnennaya-alpaka.jpg',
            'ch': 'https://amsrus.ru/wp-content/uploads/2015/02/13.-Lama-odomashnennaya-alpaka.jpg',
            'pt': 'https://amsrus.ru/wp-content/uploads/2015/02/13.-Lama-odomashnennaya-alpaka.jpg',
            'sb': 'https://amsrus.ru/wp-content/uploads/2015/02/13.-Lama-odomashnennaya-alpaka.jpg',
            'vs': 'https://amsrus.ru/wp-content/uploads/2015/02/13.-Lama-odomashnennaya-alpaka.jpg'
        }
    }

    // Добавляем картинку к слою
    var img = document.createElement("img"); 
 
    img.src = pictures[weekNumber % 2][dayName]; 
    var src = document.getElementById("picture_place"); 
    
    src.appendChild(img); 
</script>
