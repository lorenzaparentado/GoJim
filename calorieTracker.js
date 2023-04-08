function addItem(event) {
  event.preventDefault();
	const food = document.getElementById('food').value;
	const calories =                    document.getElementById('calories').value;
	const itemList = document.getElementById('item-list');
	const listItem = document.createElement('li');
	listItem.innerHTML = `${food}: ${calories} calories`;
	itemList.appendChild(listItem);
	document.getElementById('food').value = '';
	document.getElementById('calories').value = '';
}