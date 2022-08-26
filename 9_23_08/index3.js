let div = document.querySelector('.text');
let table = document.createElement('table');

createTable(div);

function createTable(parent) {
	
	for (let i = 0; i <= 9; i++) {
		let tr = document.createElement('tr');
		
		for (var j = 1; j <= 10; j++) {
			let td = document.createElement('td');
            td.innerHTML = j + (10 * i);
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	parent.appendChild(table);
    
}

document.body.append(table);
