
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#today-date").html(todayDate);

var newMilitaryTime=[9,10,11,12,13,14,15,16,17]
var currentHour=moment().hour()


for (let i = 0; i < newMilitaryTime.length; i++) {
    if(currentHour===newMilitaryTime[i]) {
         $("#"+newMilitaryTime[i]).addClass("present")
    }

    if (currentHour>newMilitaryTime[i]){
        $("#"+newMilitaryTime[i]).addClass("past")
    }
    
    if(currentHour<newMilitaryTime[i]){
        $("#"+newMilitaryTime[i]).addClass("future")
    }
}

$(document).ready(function() { 

    let timeEl = $('<p>');
    let dayEl = $('<p>');
    let clearBtn = $('#clearBtn');
    
    let savedItem9 = $('#9');
    let savedItem10 = $('#10');
    let savedItem11 = $('#11');
    let savedItem12 = $('#12');
    let savedItem1 = $('#1');
    let savedItem2 = $('#2');
    let savedItem3 = $('#3');
    let savedItem4 = $('#4');
    let savedItem5 = $('#5');
    
        savedItem9.val(localStorage.getItem('9'));
        savedItem10.val(localStorage.getItem('10'));
        savedItem11.val(localStorage.getItem('11'));
        savedItem12.val(localStorage.getItem('12'));
        savedItem1.val(localStorage.getItem('1'));
        savedItem2.val(localStorage.getItem('2'));
        savedItem3.val(localStorage.getItem('3'));
        savedItem4.val(localStorage.getItem('4'));
        savedItem5.val(localStorage.getItem('5'));
    
    
    let button9 = $('#btn-9');
    let button10 = $('#btn-10');
    let button11 = $('#btn-11');
    let button12 = $('#btn-12');
    let button1 = $('#btn-1');
    let button2 = $('#btn-2');
    let button3 = $('#btn-3');
    let button4 = $('#btn-4');
    let button5 = $('#btn-5');
    

function checkTime() {
    
    if (parseInt(savedItem9.attr('data-hour')) > newMilitaryTime) {
        savedItem9.removeClass('past present future');
        SavedItem9.addClass('future');

    } else if (parseInt(savedItem9.attr('data-hour')) === newMilitaryTime) {
        savedItem9.removeClass('past present future');
        savedItem9.addClass('present');
    } else {
        savedItem9.removeClass('past present future');
        savedItem9.addClass('past');
    }


    if (parseInt(savedItem10.attr('data-hour')) > newMilitaryTime) {
        savedItem10.removeClass('past present future');
        savedItem10.addClass('future');
    
    } else if (parseInt(savedItem10.attr('data-hour')) === newMilitaryTime) {
        savedItem10.removeClass('past present future');
        savedItem10.addClass('present');
    } else {
        savedItem10.removeClass('past present future');
        savedItem10.addClass('past');
    }
    
    if (parseInt(savedItem11.attr('data-hour')) > newMilitaryTime) {
        savedItem11.removeClass('past present future');
        savedItem11.addClass('future');
    
    } else if (parseInt(savedItem11.attr('data-hour')) === newMilitaryTime) {
        savedItem11.removeClass('past present future');
        savedItem11.addClass('present');
    } else {
        savedItem11.removeClass('past present future');
        savedItem11.addClass('past');
    }
    
    if (parseInt(savedItem12.attr('data-hour')) > newMilitaryTime) {
        savedItem12.removeClass('past present future');
        savedItem12.addClass('future');
    
    } else if (parseInt(savedItem12.attr('data-hour')) === newMilitaryTime) {
        savedItem12.removeClass('past present future');
        savedItem12.addClass('present');
    } else {
        savedItem12.removeClass('past present future');
        savedItem12.addClass('past');
    }
    
    if (parseInt(savedItem1.attr('data-hour')) > newMilitaryTime) {
        savedItem1.removeClass('past present future');
        savedItem1.addClass('future');
    
    } else if (parseInt(savedItem1.attr('data-hour')) === newMilitaryTime) {
        savedItem1.removeClass('past present future');
        savedItem1.addClass('present');
    } else {
        savedItem1.removeClass('past present future');
        savedItem1.addClass('past');
    }
    
    if (parseInt(savedItem2.attr('data-hour')) > newMilitaryTime) {
        savedItem2.removeClass('past present future');
        savedItem2.addClass('future');
    
    } else if (parseInt(savedItem2.attr('data-hour')) === newMilitaryTime) {
        savedItem2.removeClass('past present future');
        savedItem2.addClass('present');
    } else {
        savedItem2.removeClass('past present future');
        savedItem2.addClass('past');
    }
    
    if (parseInt(savedItem3.attr('data-hour')) > newMilitaryTime) {
        savedItem3.removeClass('past present future');
        savedItem3.addClass('future');
    
    } else if (parseInt(savedItem3.attr('data-hour')) === newMilitaryTime) {
        savedItem3.removeClass('past present future');
        savedItem3.addClass('present');
    } else {
        savedItem3.removeClass('past present future');
        savedItem3.addClass('past');
    }
    
    if (parseInt(savedItem4.attr('data-hour')) > newMilitaryTime) {
        savedItem4.removeClass('past present future');
        savedItem4.addClass('future');
    
    } else if (parseInt(savedItem4.attr('data-hour')) === newMilitaryTime) {
        savedItem4.removeClass('past present future');
        savedItem4.addClass('present');
    } else {
        savedItem4.removeClass('past present future');
        savedItem4.addClass('past');
    }
    
    if(parseInt(savedItem5.attr('data-hour')) > newMilitaryTime) {
        savedItem5.removeClass('past present future');
        savedItem5.addClass('future');
    
    } else if (parseInt(savedItem5.attr('data-hour')) === newMilitaryTime) {
        savedItem5.removeClass('past present future');
        savedItem5.addClass('present');
    } else {
        savedItem5.removeClass('past present future');
        savedItem5.addClass('past');
    }
    

}



function clear() {
    localStorage.clear();

    savedItem9.val('');
    savedItem10.val('');
    savedItem11.val('');
    savedItem12.val('');
    savedItem1.val('');
    savedItem2.val('');
    savedItem3.val('');
    savedItem4.val('');
    savedItem5.val('');

}

function tick() {

    dayEl.text(moment().format('LL'));
      timeEl.text(moment().format('hh:mm:ssA'));
      $('.jumbotron').append(dayEl);
      $('.jumbotron').append(timeEl);

    

}



tick();
setInterval(tick, 1000);
setInterval(checkTime, 600000);
clearBtn.on('click', clear);

button9.on('click', function() {
    event.preventDefault();
    if (savedItem9.val() !== '') {
        localStorage.setItem('9', savedItem9.val());
    }
});

button10.on('click', function() {
    event.preventDefault();
    if (savedItem10.val() !== '') {
        localStorage.setItem('10', savedItem10.val());
    }

});

button11.on('click', function() {
    event.preventDefault();
    if (saveditem11.val() !== '') {
        localStorage.setItem('11', SavedItem11.val());

    }

});

button12.on('click', function() {
    event.preventDefault();
    if (savedItem12.val() !== '') {
        localStorage.setItem('12', savedItem12.val());

    }
});

button1.on('click', function() {
    event.preventDefault();
    if (savedItem1.val() !== '') {
        localStorage.setItem('1', savedItem1.val());

    }

});

button2.on('click', function() {
    event.preventDefault();
    if (savedItem2.val() !== '') {
        localStorage.setItem('', savedItem2.val());

    }

});

button3.on('click', function() {
    event.preventDefault();
    if (savedItem3.val() !== '') {
        localStorage.setItem('3', savedItem3.val());

    }

});

button4.on('click', function() {
    event.preventDefault();

    if (savedItem4.val() !== '') {
        localStorage.setItem('4', savedItem4.val());

    }

});

button5.on('click', function() {
    event.preventDefault();

    if (savedItem5.val() !== '') {
        localStorage.setItem('5', savedItem5.val());

    }

});



checkTime();


});