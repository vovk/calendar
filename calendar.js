$(document).ready(function(){

	var options = {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		timezone: 'UTC'
	}

	var today = new Date();
	var year =  today.getFullYear();
	var month = today.getMonth();
	var day = today.getDay();

	//считаем кол-во дней в месяце
	// var day_count = new Date(year, month, 0).getDate();
	var firstDay  = new Date( year, month, 1 );

	//функция - наименование месяца
	Date.prototype.getMonthName = function() {
	    var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	    return month[this.getMonth()];	
	}

	var monthName = today.getMonthName(); //текущий месяц по наименованию

	//функция - наименование дня недели
	Date.prototype.getDayName = function() {
		var day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		return day[this.getDay()];
	}

	//вывод в браузер
	$('.month span').html(year);
	$('.month p').html(monthName);

	for (var i = 1; i < firstDay.getDay(); i++) {
		$('.days').append('<li><a href="#">' + '*' + '</a></li>');
		$('.days li').css('visibility', 'hidden');

	}

	//проверяем
	// console.log('now: ' + year, monthName, day); 
	// console.log('first day: ' + firstDay + ' ' + firstDay.getDayName());

	//вывод
	while (firstDay.getMonth() == month) {
		if(firstDay.getDate() == today.getDate()){
			$('.days').append('<li><a href="#" data-toggle="modal" data-target="#myModal">' + firstDay.getDate() + '</a></li>');
		}
		else{
			$('.days').append('<li><a href="#" data-toggle="modal", data-target="#myModal">' + firstDay.getDate() + '</a></li>');
		}

        firstDay.setDate(firstDay.getDate() + 1);
	}

	//click
	$('.days li').click(function(){
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
		}
		else
			$(this).removeClass('active');
	});

	// var t = '';
	// var result;
	function addEventToCalendar(){
		$('.days li a').on("click", function(event){
			// $('.ok').on("click", function () {
			// 	t = $('.text').val();
			// 	console.log(t);
			// 	if(t){
			// 		$(event.target).parent().append('<img src="img/increase.png" class="event-img"/>');
			// 	}
			// })
			$('.ok').on("click", function () {
				t = $('.text').val();
				if(t){
					alert('Event add');
				}
				else{
					console.log('empty');
				}
			});
		});
	}
	addEventToCalendar();

	// function buttonCheck(result){
	// 	// if($('.text')
	// }

});