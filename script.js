const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list__container');

function addTask() {
	if (inputBox.value === '') {
		alert('You must write something!');
	} else {
		let li = document.createElement('li');
		li.innerHTML = inputBox.value;
		
		listContainer.insertBefore(li, listContainer.firstChild);

		let span = document.createElement('span');
		span.innerHTML = '';
		li.appendChild(span);
	}
	inputBox.value = '';
	saveDate();
}

function handleKeyPress(event) {
	if (event.key === 'Enter' && document.activeElement === inputBox) {
		addTask();
	}
}

listContainer.addEventListener(
	'click',
	function (e) {
		if (e.target.tagName === 'LI') {
			e.target.classList.toggle('checked');
			saveDate();
		} else if (e.target.tagName === 'SPAN') {
			e.target.parentElement.remove();
			saveDate();
		}
	},
	false,
);

function saveDate() {
	localStorage.setItem('date', listContainer.innerHTML);
}

function showTask() {
	listContainer.innerHTML = localStorage.getItem('date');
}
showTask();
