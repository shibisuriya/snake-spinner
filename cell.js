export default class Cell {
	constructor({ pos, data, helpers }) {
		// The 'Cell' class is tightly couple with the 'Grid' class.
		this.helpers = helpers;
		this.pos = pos;
		this.data = data;
		this.createCell();
	}
	createCell() {
		const cell = document.createElement('div');
		const { left, top } = this.pos;
		Object.assign(cell.style, {
			left,
			top,
			width: this.helpers.getCellSize(),
			height: this.helpers.getCellSize(),
			position: 'absolute',
			boxSizing: 'border-box',
		});
		this.element = cell;
		this.helpers.getContainer().appendChild(cell);
	}
	set(classes) {
		this.reset();
		this.getElement().classList.add(...classes);
	}
	reset() {
		const cellElement = this.getElement();
		const classList = Array.from(cellElement.classList);
		cellElement.classList.remove(...classList);
	}
	getElement() {
		return this.element;
	}
	getData() {
		return this.data;
	}
}
