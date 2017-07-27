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

	
	var firstDay  = new Date( year, month, 1 );
	var lastDay = new Date(year, month + 1, 1);


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

	Date.prototype.daysInMonth = function() {
		return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
	};
	//считаем кол-во дней в месяце
	

	//вывод
	$('.month span').html(year);
	$('.month p').html(monthName);


	console.log(firstDay.getDate(), firstDay.getDay(), lastDay.getDate(), lastDay.getDay());
	console.log(today.daysInMonth());

	//вывод дней
	function outputDate(){
		for (var i = 1; i < today.getDay(); i++) {
			$('.days').append('<li><a href="#">' + '*' + '</a></li>');
			$('.days li').css('visibility', 'hidden');

		}
		// for (i = firstDay.getDay(); i <= day_count; i++){
		// 	if(firstDay.getDate() == today.getDate()){
		// 		$('.days').append('<li><a href="#" data-toggle="modal" data-target="#myModal">' + firstDay.getDate() + '</a></li>');
		// 	}
		// 	else{
		// 		$('.days').append('<li><a href="#" data-toggle="modal", data-target="#myModal">' + firstDay.getDate() + '</a></li>');
		// 	}
		// 	firstDay.setDate(firstDay.getDate() + 1);

		// }

		// while (firstDay.getMonth() == month) {
		// 	if(firstDay.getDate() == today.getDate()){
		// 		$('.days').append('<li><a href="#" data-toggle="modal" data-target="#myModal">' + firstDay.getDate() + '</a></li>');
		// 	}
		// 	else{
		// 		$('.days').append('<li><a href="#" data-toggle="modal", data-target="#myModal">' + firstDay.getDate() + '</a></li>');
		// 	}

	 //        firstDay.setDate(firstDay.getDate() + 1);
		// }


	}

	//click
	function activeClick(){
		$('.days li').click(function(){
			if(!$(this).hasClass('active')){
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
			}
			else
				$(this).removeClass('active');
		});
	}
	function addEventToCalendar(){
		$('.days li a').on("click", function(event){
			$('.ok').on("click", function () {
				t = $('.text').val();
				console.log(t);
				if(t){
					$(event.target).parent().append('<img src="img/increase.png" class="event-img"/>');
				}
			})
		});
	}

	outputDate();
	//activeClick();
	//addEventToCalendar();

	// $('.right').on("click", function(){

	// 	var next_month = month + 1;
	// 	next_firstDay = new Date(year, next_month, 1);
	// 	console.log(next_firstDay);
	// });
});