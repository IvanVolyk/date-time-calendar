function createCalendar(elem, year, month) {
    elem = document.querySelector(elem);

    if (!year || !month) {
        let d = new Date();
        year = d.getFullYear();
        month = d.getMonth() + 1;
    }

    let mon = month - 1;
    let d = new Date(year, mon);
    let today = new Date(); // текущая дата

    let months = [        'Січень',        'Лютий',        'Березень',        'Квітень',        'Травень',        'Червень',        'Липень',        'Серпень',        'Вересень',        'Жовтень',        'Листопад',        'Грудень',    ];

    let table = `<table>
        <caption>${months[mon]} ${year}</caption>
        <tr>
            <th>Пн</th>
            <th>Вт</th>
            <th>Ср</th>
            <th>Чт</th>
            <th>Пт</th>
            <th>Сб</th>
            <th>Нд</th>
        </tr>
        <tr>
    `;

    for (let i=0; i<getDay(d); i++) {
        table += '<td></td>';
    }

    while (d.getMonth() == mon) {
        if (d.getDate() === today.getDate() && d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear()) {
            table += '<td class="today">' + d.getDate() + '</td>'; // добавляем класс "today"
        } else {
            table += '<td>' + d.getDate() + '</td>';
        }
        
        if (getDay(d) % 7 == 6) {
            table += '</tr><tr>'
        }
        d.setDate(d.getDate()+1)
    }

    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>'
        }
    }

    table += '</tr></table>';
    elem.innerHTML = table
}
function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

createCalendar('.container');


function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var timeString = hours + ':' + minutes + ':' + seconds;
  document.getElementById('time').innerHTML = timeString;

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById('time').innerHTML = xmlhttp.responseText;
    }
  }
  xmlhttp.open('GET', 'get_time.php', true);
  xmlhttp.send();

  setTimeout(updateTime, 100);
}

setTimeout(updateTime, 100);





