'use strict';

const time = document.querySelector('h2');
const alarmTime = document.querySelector('p');
const timeInput = document.forms['alarm']['time'];
const setAlarm = document.forms['alarm']['set'];

const currentTime = new Date();
let hour = currentTime.getHours();
let minute = currentTime.getMinutes();
const aTime = new Date();

const alarm = new Audio('assets/media/police.mp3');
alarm.type = 'audio/mp3';

document.addEventListener('keypress', function(event) {
	if (timeInput.value.trim().length === 2 && event.key != ':') {
		timeInput.value += ':';
	}
});

setAlarm.addEventListener('click', function() {
	const timeCheck = timeInput.value.split(':');
	if (timeInput.value.trim().length === 5 && !isNaN(timeCheck[0]) && !isNaN(timeCheck[1])) {
		aTime.setHours(timeCheck[0], timeCheck[1], 0);
		alarmTime.innerHTML = `<i class="fa-solid fa-bell"></i> ${timeCheck[0]}:${timeCheck[1]}`
	}
});

setInterval(() => {
	let hour = currentTime.getHours();
	let minute = currentTime.getMinutes();
	let second = currentTime.getSeconds();
	if (second < 60) currentTime.setHours(hour, minute, second + 1);
	else currentTime.setHours(hour, minute + 1, 0);

	if (currentTime.getTime() === aTime.getTime()) {
		setTimeout(function() {
			alarm.play();
			time.classList.add('alarm');
			setTimeout(function() { time.classList.remove('alarm')}, 25000);
		}, 1000);
	}
	time.innerText = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
}, 1000);