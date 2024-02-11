const windowDescriptions = {
	'1': { description: '№ 1 Одностворчатое окно', size: '1300 x 1460 мм' },
	'2': { description: '№ 2 Двухстворчатое окно', size: '1500 x 1400 мм' },
	'3': { description: '№ 3 Трехстворчатое окно', size: '2000 x 1500 мм' },
	'4': { description: '№ 4 Окно с фрамугой', size: '1600 x 1400 мм' },
	'5': { description: '№ 5 Арочное окно', size: '1800 x 1600 мм' },
	'6': { description: '№ 6 Балконный блок', size: '2200 x 2100 мм' },

};


const svgImages = {
	'1': 'img/svg/1.svg',
	'2': 'img/svg/2.svg',
	'3': 'img/svg/3.svg',
	'4': 'img/svg/4.svg',
	'5': 'img/svg/5.svg',
	'6': 'img/svg/6.svg',

};

const sashImages = {
	'1': {
		'option1': 'img/odnostvor/option1.png',
		'option2': 'img/odnostvor/option2.png',
		'option3': 'img/odnostvor/option3.png',
		'option4': 'img/odnostvor/option4.png',
	},
	'2': {
		'option1-option1': 'img/dvuhstvor/option1-option1.png',
		'option1-option2': 'img/dvuhstvor/option1-option2.png',
		'option1-option3': 'img/dvuhstvor/option1-option3.png',
		'option1-option4': 'img/dvuhstvor/option1-option4.png',
		'option2-option1': 'img/dvuhstvor/option2-option1.png',
		'option2-option2': 'img/dvuhstvor/option2-option2.png',
		'option2-option3': 'img/dvuhstvor/option2-option3.png',
		'option2-option4': 'img/dvuhstvor/option2-option4.png',
		'option3-option1': 'img/dvuhstvor/option3-option1.png',
		'option3-option2': 'img/dvuhstvor/option3-option2.png',
		'option3-option3': 'img/dvuhstvor/option3-option3.png',
		'option3-option4': 'img/dvuhstvor/option3-option4.png',
		'option4-option1': 'img/dvuhstvor/option4-option1.png',
		'option4-option2': 'img/dvuhstvor/option4-option2.png',
		'option4-option3': 'img/dvuhstvor/option4-option3.png',
		'option4-option4': 'img/dvuhstvor/option4-option4.png',
	},
	'3': {
		'option1-option1-option1': 'img/trehstvor/option1-option1-option1.png',
		'option1-option1-option2': 'img/trehstvor/option1-option1-option2.png',
		'option1-option1-option3': 'img/trehstvor/option1-option1-option3.png',
		'option1-option1-option4': 'img/trehstvor/option1-option1-option4.png',
		/********/
		'option1-option2-option1': 'img/trehstvor/option1-option2-option1.png',
		'option1-option2-option2': 'img/trehstvor/option1-option2-option2.png',
		'option1-option2-option3': 'img/trehstvor/option1-option2-option3.png',
		'option1-option2-option4': 'img/trehstvor/option1-option2-option4.png',
		/*******/
		'option1-option3-option1': 'img/trehstvor/option1-option3-option1.png',
		'option1-option3-option2': 'img/trehstvor/option1-option3-option2.png',
		'option1-option3-option3': 'img/trehstvor/option1-option3-option3.png',
		'option1-option3-option4': 'img/trehstvor/option1-option3-option4.png',
		/********/
		'option1-option4-option1': 'img/trehstvor/option1-option4-option1.png',
		'option1-option4-option2': 'img/trehstvor/option1-option4-option2.png',
		'option1-option4-option3': 'img/trehstvor/option1-option4-option3.png',
		'option1-option4-option4': 'img/trehstvor/option1-option4-option4.png',
		/********/
		'option2-option1-option1': 'img/trehstvor/option2-option1-option1.png',
		'option2-option1-option2': 'img/trehstvor/option2-option1-option2.png',
		'option2-option1-option3': 'img/trehstvor/option2-option1-option3.png',
		'option2-option1-option4': 'img/trehstvor/option2-option1-option4.png',
		/********/
		'option2-option2-option1': 'img/trehstvor/option2-option2-option1.png',
		'option2-option2-option2': 'img/trehstvor/option2-option2-option2.png',
		'option2-option2-option3': 'img/trehstvor/option2-option2-option3.png',
		'option2-option2-option4': 'img/trehstvor/option2-option2-option4.png',
		/********/
		'option2-option3-option1': 'img/trehstvor/option2-option3-option1.png',
		'option2-option3-option2': 'img/trehstvor/option2-option3-option2.png',
		'option2-option3-option3': 'img/trehstvor/option2-option3-option3.png',
		'option2-option3-option4': 'img/trehstvor/option2-option3-option4.png',
		/********/
		'option2-option4-option1': 'img/trehstvor/option2-option4-option1.png',
		'option2-option4-option2': 'img/trehstvor/option2-option4-option2.png',
		'option2-option4-option3': 'img/trehstvor/option2-option4-option3.png',
		'option2-option4-option4': 'img/trehstvor/option2-option4-option4.png',
		/********/
		'option3-option1-option1': 'img/trehstvor/option3-option1-option1.png',
		'option3-option1-option2': 'img/trehstvor/option3-option1-option2.png',
		'option3-option1-option3': 'img/trehstvor/option3-option1-option3.png',
		'option3-option1-option4': 'img/trehstvor/option3-option1-option4.png',
		/********/
		'option3-option2-option1': 'img/trehstvor/option3-option2-option1.png',
		'option3-option2-option2': 'img/trehstvor/option3-option2-option2.png',
		'option3-option2-option3': 'img/trehstvor/option3-option2-option3.png',
		'option3-option2-option4': 'img/trehstvor/option3-option2-option4.png',
		/********/
		'option3-option3-option1': 'img/trehstvor/option3-option3-option1.png',
		'option3-option3-option2': 'img/trehstvor/option3-option3-option2.png',
		'option3-option3-option3': 'img/trehstvor/option3-option3-option3.png',
		'option3-option3-option4': 'img/trehstvor/option3-option3-option4.png',
		/********/
		'option3-option4-option1': 'img/trehstvor/option3-option4-option1.png',
		'option3-option4-option2': 'img/trehstvor/option3-option4-option2.png',
		'option3-option4-option3': 'img/trehstvor/option3-option4-option3.png',
		'option3-option4-option4': 'img/trehstvor/option3-option4-option4.png',
		/********/
		'option4-option1-option1': 'img/trehstvor/option4-option1-option1.png',
		'option4-option1-option2': 'img/trehstvor/option4-option1-option2.png',
		'option4-option1-option3': 'img/trehstvor/option4-option1-option3.png',
		'option4-option1-option4': 'img/trehstvor/option4-option1-option4.png',
		/********/
		'option4-option2-option1': 'img/trehstvor/option4-option2-option1.png',
		'option4-option2-option2': 'img/trehstvor/option4-option2-option2.png',
		'option4-option2-option3': 'img/trehstvor/option4-option2-option3.png',
		'option4-option2-option4': 'img/trehstvor/option4-option2-option4.png',
		/********/
		'option4-option3-option1': 'img/trehstvor/option4-option3-option1.png',
		'option4-option3-option2': 'img/trehstvor/option4-option3-option2.png',
		'option4-option3-option3': 'img/trehstvor/option4-option3-option3.png',
		'option4-option3-option4': 'img/trehstvor/option4-option3-option4.png',
		/********/
		'option4-option4-option1': 'img/trehstvor/option4-option4-option1.png',
		'option4-option4-option2': 'img/trehstvor/option4-option4-option2.png',
		'option4-option4-option3': 'img/trehstvor/option4-option4-option3.png',
		'option4-option4-option4': 'img/trehstvor/option4-option4-option4.png',
	},
	'4': {
		/***** ALL OPTION 1 */
		'option1-option1-option1-option1': 'img/four/option1-option1-option1-option1.png',
		'option1-option1-option1-option2': 'img/four/option1-option1-option1-option2.png',
		'option1-option1-option2-option1': 'img/four/option1-option1-option2-option1.png',
		'option1-option1-option2-option2': 'img/four/option1-option1-option2-option2.png',
		'option1-option1-option3-option1': 'img/four/option1-option1-option3-option1.png',
		'option1-option1-option3-option2': 'img/four/option1-option1-option3-option2.png',
		'option1-option1-option4-option1': 'img/four/option1-option1-option4-option1.png',
		'option1-option1-option4-option2': 'img/four/option1-option1-option4-option2.png',
		'option1-option2-option1-option1': 'img/four/option1-option2-option1-option1.png',
		'option1-option2-option1-option2': 'img/four/option1-option2-option1-option2.png',
		'option1-option2-option2-option1': 'img/four/option1-option2-option2-option1.png',
		'option1-option2-option2-option2': 'img/four/option1-option2-option2-option2.png',
		'option1-option2-option3-option1': 'img/four/option1-option2-option3-option1.png',
		'option1-option2-option3-option2': 'img/four/option1-option2-option3-option2.png',
		'option1-option2-option4-option1': 'img/four/option1-option2-option4-option1.png',
		'option1-option2-option4-option2': 'img/four/option1-option2-option4-option2.png',
		'option1-option3-option1-option1': 'img/four/option1-option3-option1-option1.png',
		'option1-option3-option1-option2': 'img/four/option1-option3-option1-option2.png',
		'option1-option3-option2-option1': 'img/four/option1-option3-option2-option1.png', // Взято из 3 опции, т.к. нету 2 опции
		'option1-option3-option2-option2': 'img/four/option1-option3-option2-option2.png', // Взято из 3 опции, т.к. нету 2 опции
		'option1-option3-option3-option1': 'img/four/option1-option3-option3-option1.png',
		'option1-option3-option3-option2': 'img/four/option1-option3-option3-option2.png',
		'option1-option3-option4-option1': 'img/four/option1-option3-option4-option1.png',
		'option1-option3-option4-option2': 'img/four/option1-option3-option4-option2.png',
		'option1-option4-option1-option1': 'img/four/option1-option4-option1-option1.png',
		'option1-option4-option1-option2': 'img/four/option1-option4-option1-option2.png',
		'option1-option4-option2-option1': 'img/four/option1-option4-option2-option1.png',
		'option1-option4-option2-option2': 'img/four/option1-option4-option2-option2.png',
		'option1-option4-option3-option1': 'img/four/option1-option4-option3-option1.png',
		'option1-option4-option3-option2': 'img/four/option1-option4-option3-option2.png',
		'option1-option4-option4-option1': 'img/four/option1-option4-option4-option1.png',
		'option1-option4-option4-option2': 'img/four/option1-option4-option4-option2.png',


		/* ALL OPTION 2 */

		'option2-option1-option1-option1': 'img/four/option2-option1-option1-option1.png',
		'option2-option1-option1-option2': 'img/four/option2-option1-option1-option2.png',
		'option2-option1-option2-option1': 'img/four/option2-option1-option2-option1.png',
		'option2-option1-option2-option2': 'img/four/option2-option1-option2-option2.png',
		'option2-option1-option3-option1': 'img/four/option2-option1-option3-option1.png',
		'option2-option1-option3-option2': 'img/four/option2-option1-option3-option2.png',
		'option2-option1-option4-option1': 'img/four/option2-option1-option4-option1.png',
		'option2-option1-option4-option2': 'img/four/option2-option1-option4-option2.png',
		'option2-option2-option1-option1': 'img/four/option2-option2-option1-option1.png',
		'option2-option2-option1-option2': 'img/four/option2-option2-option1-option2.png',
		'option2-option2-option2-option1': 'img/four/option2-option2-option2-option1.png',
		'option2-option2-option2-option2': 'img/four/option2-option2-option2-option2.png',
		'option2-option2-option3-option1': 'img/four/option2-option2-option3-option1.png',
		'option2-option2-option3-option2': 'img/four/option2-option2-option3-option2.png',
		'option2-option2-option4-option1': 'img/four/option2-option2-option4-option1.png',
		'option2-option2-option4-option2': 'img/four/option2-option2-option4-option2.png',
		'option2-option3-option1-option1': 'img/four/option2-option3-option1-option1.png',
		'option2-option3-option1-option2': 'img/four/option2-option3-option1-option2.png',
		'option2-option3-option2-option1': 'img/four/option2-option3-option2-option1.png',
		'option2-option3-option2-option2': 'img/four/option2-option3-option2-option2.png',
		'option2-option3-option3-option1': 'img/four/option2-option3-option3-option1.png',
		'option2-option3-option3-option2': 'img/four/option2-option3-option3-option2.png',
		'option2-option3-option4-option1': 'img/four/option2-option3-option4-option1.png',
		'option2-option3-option4-option2': 'img/four/option2-option3-option4-option2.png',
		'option2-option4-option1-option1': 'img/four/option2-option4-option1-option1.png',
		'option2-option4-option1-option2': 'img/four/option2-option4-option1-option2.png',
		'option2-option4-option2-option1': 'img/four/option2-option4-option2-option1.png',
		'option2-option4-option2-option2': 'img/four/option2-option4-option2-option2.png',
		'option2-option4-option3-option1': 'img/four/option2-option4-option3-option1.png',
		'option2-option4-option3-option2': 'img/four/option2-option4-option3-option2.png',
		'option2-option4-option4-option1': 'img/four/option2-option4-option4-option1.png',
		'option2-option4-option4-option2': 'img/four/option2-option4-option4-option2.png',
		/* ALL OPTION 3 */

		'option3-option1-option1-option1': 'img/four/option3-option1-option1-option1.png',
		'option3-option1-option1-option2': 'img/four/option3-option1-option1-option2.png',
		'option3-option1-option2-option1': 'img/four/option3-option1-option2-option1.png',
		'option3-option1-option2-option2': 'img/four/option3-option1-option2-option2.png',
		'option3-option1-option3-option1': 'img/four/option3-option1-option3-option1.png',
		'option3-option1-option3-option2': 'img/four/option3-option1-option3-option2.png',
		'option3-option1-option4-option1': 'img/four/option3-option1-option4-option1.png',
		'option3-option1-option4-option2': 'img/four/option3-option1-option4-option2.png',
		'option3-option2-option1-option1': 'img/four/option3-option2-option1-option1.png',
		'option3-option2-option1-option2': 'img/four/option3-option2-option1-option2.png',
		'option3-option2-option2-option1': 'img/four/option3-option2-option2-option1.png',
		'option3-option2-option2-option2': 'img/four/option3-option2-option2-option2.png',
		'option3-option2-option3-option1': 'img/four/option3-option2-option3-option1.png',
		'option3-option2-option3-option2': 'img/four/option3-option2-option3-option2.png',
		'option3-option2-option4-option1': 'img/four/option3-option2-option4-option1.png',
		'option3-option2-option4-option2': 'img/four/option3-option2-option4-option2.png',
		'option3-option3-option1-option1': 'img/four/option3-option3-option1-option1.png',
		'option3-option3-option1-option2': 'img/four/option3-option3-option1-option2.png',
		'option3-option3-option2-option1': 'img/four/option3-option3-option2-option1.png',
		'option3-option3-option2-option2': 'img/four/option3-option3-option2-option2.png',
		'option3-option3-option3-option1': 'img/four/option3-option3-option3-option1.png',
		'option3-option3-option3-option2': 'img/four/option3-option3-option3-option2.png',
		'option3-option3-option4-option1': 'img/four/option3-option3-option4-option1.png',
		'option3-option3-option4-option2': 'img/four/option3-option3-option4-option2.png',
		'option3-option4-option1-option1': 'img/four/option3-option4-option1-option1.png',
		'option3-option4-option1-option2': 'img/four/option3-option4-option1-option2.png',
		'option3-option4-option2-option1': 'img/four/option3-option4-option2-option1.png',
		'option3-option4-option2-option2': 'img/four/option3-option4-option2-option2.png',
		'option3-option4-option3-option1': 'img/four/option3-option4-option3-option1.png',
		'option3-option4-option3-option2': 'img/four/option3-option4-option3-option2.png',
		'option3-option4-option4-option1': 'img/four/option3-option4-option4-option1.png',
		'option3-option4-option4-option2': 'img/four/option3-option4-option4-option2.png',


		/* ALL OPTION 4 */
		'option4-option1-option1-option1': 'img/four/option4-option1-option1-option1.png',
		'option4-option1-option1-option2': 'img/four/option4-option1-option1-option2.png',
		'option4-option1-option2-option1': 'img/four/option4-option1-option2-option1.png',
		'option4-option1-option2-option2': 'img/four/option4-option1-option2-option2.png',
		'option4-option1-option3-option1': 'img/four/option4-option1-option3-option1.png',
		'option4-option1-option3-option2': 'img/four/option4-option1-option3-option2.png',
		'option4-option1-option4-option1': 'img/four/option4-option1-option4-option1.png',
		'option4-option1-option4-option2': 'img/four/option4-option1-option4-option2.png',
		'option4-option2-option1-option1': 'img/four/option4-option2-option1-option1.png',
		'option4-option2-option1-option2': 'img/four/option4-option2-option1-option2.png',
		'option4-option2-option2-option1': 'img/four/option4-option2-option2-option1.png',
		'option4-option2-option2-option2': 'img/four/option4-option2-option2-option2.png',
		'option4-option2-option3-option1': 'img/four/option4-option2-option3-option1.png',
		'option4-option2-option3-option2': 'img/four/option4-option2-option3-option2.png',
		'option4-option2-option4-option1': 'img/four/option4-option2-option4-option1.png',
		'option4-option2-option4-option2': 'img/four/option4-option2-option4-option2.png',
		'option4-option3-option1-option1': 'img/four/option4-option3-option1-option1.png',
		'option4-option3-option1-option2': 'img/four/option4-option3-option1-option2.png',
		'option4-option3-option2-option1': 'img/four/option4-option3-option2-option1.png',
		'option4-option3-option2-option2': 'img/four/option4-option3-option2-option2.png',
		'option4-option3-option3-option1': 'img/four/option4-option3-option3-option1.png',
		'option4-option3-option3-option2': 'img/four/option4-option3-option3-option2.png',
		'option4-option3-option4-option1': 'img/four/option4-option3-option4-option1.png',
		'option4-option3-option4-option2': 'img/four/option4-option3-option4-option2.png',
		'option4-option4-option1-option1': 'img/four/option4-option4-option1-option1.png',
		'option4-option4-option1-option2': 'img/four/option4-option4-option1-option2.png',
		'option4-option4-option2-option1': 'img/four/option4-option4-option2-option1.png',
		'option4-option4-option2-option2': 'img/four/option4-option4-option2-option2.png',
		'option4-option4-option3-option1': 'img/four/option4-option4-option3-option1.png',
		'option4-option4-option3-option2': 'img/four/option4-option4-option3-option2.png',
		'option4-option4-option4-option1': 'img/four/option4-option4-option4-option1.png',
		'option4-option4-option4-option2': 'img/four/option4-option4-option4-option2.png',
	},
	'5': {
		'option1-option1-option1': 'img/five/option1-option1-option1.png',
		'option1-option1-option2': 'img/five/option1-option1-option2.png',
		'option1-option1-option3': 'img/five/option1-option1-option3.png',
		'option1-option1-option4': 'img/five/option1-option1-option4.png',
		'option1-option2-option1': 'img/five/option1-option2-option1.png',
		'option1-option2-option2': 'img/five/option1-option2-option2.png',
		'option1-option2-option3': 'img/five/option1-option2-option3.png',
		'option1-option2-option4': 'img/five/option1-option2-option4.png',
		'option1-option3-option1': 'img/five/option1-option3-option1.png',
		'option1-option3-option2': 'img/five/option1-option3-option2.png',
		'option1-option3-option3': 'img/five/option1-option3-option3.png',
		'option1-option3-option4': 'img/five/option1-option3-option4.png',
		'option1-option4-option1': 'img/five/option1-option4-option1.png',
		'option1-option4-option2': 'img/five/option1-option4-option2.png',
		'option1-option4-option3': 'img/five/option1-option4-option3.png',
		'option1-option4-option4': 'img/five/option1-option4-option4.png',

		'option2-option1-option1': 'img/five/option2-option1-option1.png',
		'option2-option1-option2': 'img/five/option2-option1-option2.png',
		'option2-option1-option3': 'img/five/option2-option1-option3.png',
		'option2-option1-option4': 'img/five/option2-option1-option4.png',
		'option2-option2-option1': 'img/five/option2-option2-option1.png',
		'option2-option2-option2': 'img/five/option2-option2-option2.png',
		'option2-option2-option3': 'img/five/option2-option2-option3.png',
		'option2-option2-option4': 'img/five/option2-option2-option4.png',
		'option2-option3-option1': 'img/five/option2-option3-option1.png',
		'option2-option3-option2': 'img/five/option2-option3-option2.png',
		'option2-option3-option3': 'img/five/option2-option3-option3.png',
		'option2-option3-option4': 'img/five/option2-option3-option4.png',
		'option2-option4-option1': 'img/five/option2-option4-option1.png',
		'option2-option4-option2': 'img/five/option2-option4-option2.png',
		'option2-option4-option3': 'img/five/option2-option4-option3.png',
		'option2-option4-option4': 'img/five/option2-option4-option4.png',

		'option3-option1-option1': 'img/five/option3-option1-option1.png',
		'option3-option1-option2': 'img/five/option3-option1-option2.png',
		'option3-option1-option3': 'img/five/option3-option1-option3.png',
		'option3-option1-option4': 'img/five/option3-option1-option4.png',
		'option3-option2-option1': 'img/five/option3-option2-option1.png',
		'option3-option2-option2': 'img/five/option3-option2-option2.png',
		'option3-option2-option3': 'img/five/option3-option2-option3.png',
		'option3-option2-option4': 'img/five/option3-option2-option4.png',
		'option3-option3-option1': 'img/five/option3-option3-option1.png',
		'option3-option3-option2': 'img/five/option3-option3-option2.png',
		'option3-option3-option3': 'img/five/option3-option3-option3.png',
		'option3-option3-option4': 'img/five/option3-option3-option4.png',
		'option3-option4-option1': 'img/five/option3-option4-option1.png',
		'option3-option4-option2': 'img/five/option3-option4-option2.png',
		'option3-option4-option3': 'img/five/option3-option4-option3.png',
		'option3-option4-option4': 'img/five/option3-option4-option4.png',

		'option4-option1-option1': 'img/five/option4-option1-option1.png',
		'option4-option1-option2': 'img/five/option4-option1-option2.png',
		'option4-option1-option3': 'img/five/option4-option1-option3.png',
		'option4-option1-option4': 'img/five/option4-option1-option4.png',
		'option4-option2-option1': 'img/five/option4-option2-option1.png',
		'option4-option2-option2': 'img/five/option4-option2-option2.png',
		'option4-option2-option3': 'img/five/option4-option2-option3.png',
		'option4-option2-option4': 'img/five/option4-option2-option4.png',
		'option4-option3-option1': 'img/five/option4-option3-option1.png',
		'option4-option3-option2': 'img/five/option4-option3-option2.png',
		'option4-option3-option3': 'img/five/option4-option3-option3.png',
		'option4-option3-option4': 'img/five/option4-option3-option4.png',
		'option4-option4-option1': 'img/five/option4-option4-option1.png',
		'option4-option4-option2': 'img/five/option4-option4-option2.png',
		'option4-option4-option3': 'img/five/option4-option4-option3.png',
		'option4-option4-option4': 'img/five/option4-option4-option4.png',
	},
	'6': {
		'option1-option1-option1': 'img/six/option1-option1-option1.png',
		'option1-option1-option2': 'img/six/option1-option1-option2.png', // PENDING
		'option1-option1-option3': 'img/six/option1-option1-option3.png', // PENDING
		'option1-option1-option4': 'img/six/option1-option1-option4.png', // PENDING
		'option1-option2-option1': 'img/six/option1-option2-option1.png',
		'option1-option2-option2': 'img/six/option1-option2-option2.png',
		'option1-option2-option3': 'img/six/option1-option2-option3.png',
		'option1-option2-option4': 'img/six/option1-option2-option4.png',
		'option1-option3-option1': 'img/six/option1-option3-option1.png', // PENDING
		'option1-option3-option2': 'img/six/option1-option3-option2.png',
		'option1-option3-option3': 'img/six/option1-option3-option3.png',
		'option1-option3-option4': 'img/six/option1-option3-option4.png',
		'option1-option4-option1': 'img/six/option1-option4-option1.png',
		'option1-option4-option2': 'img/six/option1-option4-option2.png',
		'option1-option4-option3': 'img/six/option1-option4-option3.png',
		'option1-option4-option4': 'img/six/option1-option4-option4.png',
	},
};
