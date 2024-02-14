document.addEventListener('DOMContentLoaded', function () {
	var calculateBtn = document.getElementById('calculate-btn');
	var modal = document.getElementById('contact-modal');
	var closeModal = document.querySelector('.close');
	var contactForm = document.getElementById('contact-form');
	var initWindowType = '1';

	//	document.querySelectorAll('*').forEach(el => {
	//		if (el.offsetWidth > document.documentElement.clientWidth) {
	//			console.log('Проблемный элемент:', el);
	//		}
	//	});

	function getImagePath(combinationKey, windowType) {

		if (sashImages[windowType] && sashImages[windowType][combinationKey]) {
			return sashImages[windowType][combinationKey];
		}
		return 'img/default.png';
	}


	function getCombinationKey(selectors) {
		const keyParts = selectors.map(selector => {
			const selectedOption = selector.querySelector('.custom-option.selected');
			return selectedOption ? selectedOption.dataset.value : '';
		});

		return keyParts.filter(part => part !== '').join('-');
	}




	calculateBtn.addEventListener('click', function () {
		modal.style.display = 'block';
	});

	closeModal.addEventListener('click', function () {
		modal.style.display = 'none';
	});


	function initializeWindowTypeSelection(windowBlockContainer) {

		if (!windowBlockContainer)
			var windowTypeOptions = document.querySelectorAll('.window-type-option');
		else
			windowTypeOptions = windowBlockContainer.querySelectorAll('.window-type-option');


		windowTypeOptions.forEach(function (option) {
			option.addEventListener('click', function () {

				windowTypeOptions.forEach(function (opt) {
					opt.classList.remove('selected');
				});


				this.classList.add('selected');
				var windowType = this.dataset.type;


				var windowBlockContainer = this.closest('.calculator-layout');

				const descriptionElement = windowBlockContainer.querySelector('.main-window-description-par');
				const sizeElement = windowBlockContainer.querySelector('.main-window-size');

				const windowImage = windowBlockContainer.querySelector('.window-display-image-img');
				const miniatureImage = windowBlockContainer.querySelector('.img-miniature');


				if (descriptionElement && sizeElement && windowDescriptions[windowType]) {
					descriptionElement.textContent = `${windowDescriptions[windowType].description}`;
					sizeElement.textContent = `${windowDescriptions[windowType].size}`;
				}


				var newSrc;
				var newMiniatureSrc;
				switch (windowType) {
					case '1':
						newSrc = 'img/odnostvor.png';
						newMiniatureSrc = 'img/svg/1.svg';
						break;
					case '2':
						newSrc = 'img/dvuhstvor.png';
						newMiniatureSrc = 'img/svg/2.svg';
						break;
					case '3':
						newSrc = 'img/trehstvor.png';
						newMiniatureSrc = 'img/svg/3.svg';
						break;
					case '4':
						newSrc = 'img/framuga.png';
						newMiniatureSrc = 'img/svg/4.svg';
						break;
					case '5':
						newSrc = 'img/arochnoe.png';
						newMiniatureSrc = 'img/svg/5.svg';
						break;
					case '6':
						newSrc = 'img/balcon.png';
						newMiniatureSrc = 'img/svg/6.svg';
						break;
				}

				if (windowImage) {
					windowImage.src = newSrc;
				}
				if (miniatureImage) {
					miniatureImage.src = newMiniatureSrc;
				}

				updateSashes(windowType, windowBlockContainer);
				bindInputEvents(windowBlockContainer);
				initializeDeleteButtons(windowBlockContainer);
			});
		});
	}


	initializeWindowTypeSelection();

	function updateSashes(windowType, windowBlockContainer) {

		var sashesContainer;
		const sashesNumber = {
			'1': 1,
			'2': 2,
			'3': 3,
			'4': 4,
			'5': 3,
			'6': 3
		}[windowType] || 0;

		if (!windowBlockContainer)
			sashesContainer = document.querySelector('.window-sashes-wrapper');
		else
			sashesContainer = windowBlockContainer.querySelector('.window-sashes-wrapper');


		sashesContainer.innerHTML = '';
		for (let i = 0; i < sashesNumber; i++) {
			let optionsHTML = '';
			let triggerText = 'Поворотное';
			let selectedValue = 'option1';

			if (windowType === '6') {
				if (i === 0) {
					optionsHTML = `<span class="custom-option selected" data-value="option1">Дверь</span>`;
					triggerText = 'Дверь';
					selectedValue = 'option1';
				} else {
					optionsHTML = `<span class="custom-option" data-value="option1">Нет</span>
												<span class="custom-option" data-value="option2">Поворотное</span>
												<span class="custom-option" data-value="option3">Поворотно-откидное</span>
												<span class="custom-option" data-value="option4">Глухое</span>`;
					triggerText = 'Нет';
					selectedValue = 'option1';
				}
			} else if (windowType === '4' && i === 3) {
				optionsHTML = `
					<span class="custom-option selected" data-value="option1">Глухое</span>
					<span class="custom-option" data-value="option2">Откидное</span>`;
				triggerText = 'Глухое';
				selectedValue = 'option1';
			} else {
				optionsHTML = `
					<span class="custom-option selected" data-value="option1">Поворотное</span>
					<span class="custom-option" data-value="option2">Поворотно-откидное</span>
					<span class="custom-option" data-value="option3">Глухое</span>`;
				triggerText = 'Поворотное';
				selectedValue = 'option1';
			}


			// Создаем HTML для селекта
			const selectHTML = `
					<div class="custom-select image-changing" data-stvorka="stvorka${i + 1}" data-window-type="${windowType}">
							<span class="custom-select-span">${i + 1} створка</span>
							<div class="custom-select__trigger"><span>${triggerText}</span>
								<div class="arrow"></div>
							</div>
							<div class="custom-options">
								${optionsHTML}
							</div>
					</div>
				`;


			const selectWrapper = document.createElement('div');
			selectWrapper.classList.add('custom-select-wrapper');
			selectWrapper.innerHTML = selectHTML;
			sashesContainer.appendChild(selectWrapper);


			const newSelect = selectWrapper.querySelector('.custom-select');
			const selectedOption = newSelect.querySelector(`.custom-option[data-value="${selectedValue}"]`);
			if (selectedOption) {
				selectedOption.classList.add('selected');
			}
		}

		initializeCustomSelects();
	}

	updateSashes(initWindowType);


	function bindInputEvents(windowBlockContainer) {
		const widthInput = windowBlockContainer.querySelector('input[name="window_width"]');
		const heightInput = windowBlockContainer.querySelector('input[name="window_height"]');
		const widthDisplay = windowBlockContainer.querySelector('.coordonates-bottom .coordonates-number');
		const heightDisplay = windowBlockContainer.querySelector('.coordonates-right .coordonates-number');


		function updateDisplayValue(input, display) {
			display.textContent = input.value;
		}

		widthInput.addEventListener('input', function () {
			updateDisplayValue(this, widthDisplay);
		});

		heightInput.addEventListener('input', function () {
			updateDisplayValue(this, heightDisplay);
		});
	}

	function bindToggleEvent(windowBlockContainer) {
		var toggleButton = windowBlockContainer.querySelector('.toggle-collapse');
		toggleButton.addEventListener('click', function () {
			windowBlockContainer.classList.toggle('collapsed');

		});
	}

	var initialWindowBlocks = document.querySelectorAll('.calculator-layout');
	initialWindowBlocks.forEach(bindInputEvents);
	initialWindowBlocks.forEach(bindToggleEvent);


	function initializeCustomSelects(container) {

		if (!container)
			var customSelects = document.querySelectorAll('.custom-select');
		else
			customSelects = container.querySelectorAll('.custom-select');

		customSelects.forEach(select => {
			const trigger = select.querySelector('.custom-select__trigger');
			trigger.onclick = toggleSelect;
			select.querySelectorAll('.custom-option').forEach(option => {
				option.onclick = selectOption;
			});
		});
	}

	function toggleSelect(event) {
		const select = event.currentTarget.closest('.custom-select');
		const isOpen = select.classList.contains('open');
		closeAllSelects();
		if (!isOpen) {
			select.classList.add('open');
		}
		event.stopPropagation();
	}

	function selectOption(event) {
		const option = event.currentTarget;
		const select = option.closest('.custom-select');
		const windowBlockContainer = select.closest('.calculator-layout');
		const trigger = select.querySelector('.custom-select__trigger span');
		select.querySelectorAll('.custom-option').forEach(opt => opt.classList.remove('selected'));
		option.classList.add('selected');
		trigger.textContent = option.textContent;
		select.classList.remove('open');
		if (select.classList.contains('image-changing')) {
			updateCombination(select, windowBlockContainer);
		}
	}

	function closeAllSelects() {
		document.querySelectorAll('.custom-select.open').forEach(select => {
			select.classList.remove('open');
		});
	}

	function updateCombination(select, windowBlockContainer) {

		const windowType = select.getAttribute('data-window-type');
		const selectors = windowBlockContainer.querySelectorAll(`.custom-select[data-window-type="${windowType}"]`);

		const combinationKey = getCombinationKey(Array.from(selectors));
		updateImage(combinationKey, windowType, windowBlockContainer);
	}




	function updateImage(combinationKey, windowType, windowBlockContainer) {

		var imagePath = getImagePath(combinationKey, windowType);
		var windowImage = windowBlockContainer.querySelector('.window-display-image-img');
		windowImage.src = imagePath;

	}




	window.addEventListener('click', function () {
		var customSelects = document.querySelectorAll('.custom-select');
		customSelects.forEach(function (select) {
			select.classList.remove('open');
		});
	});


	initializeCustomSelects();

	contactForm.addEventListener('submit', function (event) {
		event.preventDefault();


		var customerData = {
			city: this.querySelector('input[name="city"]').value,
			name: this.querySelector('input[name="name"]').value,
			phone: this.querySelector('input[name="phone"]').value,
			email: this.querySelector('input[name="email"]').value,
			comments: this.querySelector('textarea[name="comments"]').value,
		};


		modal.style.display = 'none';


		var allFormData = collectAllFormData();
		allFormData.customer = customerData;

		console.log(allFormData);


	});

	window.addEventListener('click', function (event) {
		if (event.target === modal) {
			modal.style.display = 'none';
		}
	});




	function initializeDeleteButtons(windowBlockContainer) {
		windowBlockContainer.querySelectorAll('.delete-btn').forEach(button => {
			button.addEventListener('click', function () {
				this.closest('.calculator-layout').remove();
			});
		});
	}


	function cloneWindowOptions() {

		var container = document.querySelector('.window-calculator');
		const newIndex = document.querySelectorAll('.calculator-layout').length + 1;
		var allBlovks = document.querySelectorAll('.calculator-layout');

		var lastWindowBlock = allBlovks[allBlovks.length - 1];
		allBlovks.forEach(block => block.classList.add('collapsed'));



		var newWindowBlock = lastWindowBlock.cloneNode(true);
		var existingDeleteButton = newWindowBlock.querySelector('.delete-btn');
		if (existingDeleteButton) {
			existingDeleteButton.remove();
		}

		var deleteButtonContainer = document.createElement('div');
		deleteButtonContainer.classList.add('delete-btn');
		deleteButtonContainer.innerHTML = `
			 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				  <path d="M4.5 5V22H19.5V5H4.5Z" stroke="currentColor" stroke-width="1.5" />
				  <path d="M10 10V16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" />
				  <path d="M14 10V16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" />
				  <path d="M2 5H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" />
				  <path d="M8 5L9.6445 2H14.3885L16 5H8Z" stroke="currentColor" stroke-width="1.5" />
			 </svg>
		`;
		if (newIndex > 1) {
			newWindowBlock.querySelector('.container-description').appendChild(deleteButtonContainer);
		}


		var inputs = newWindowBlock.querySelectorAll('input');
		var selects = newWindowBlock.querySelectorAll('select');

		newWindowBlock.querySelectorAll('input, select, textarea').forEach((elem, index) => {
			if (elem.id) {

				const newId = `${elem.id}-${newIndex}-${index}`;
				elem.id = newId;

				const label = newWindowBlock.querySelector(`label[for="${elem.id}"]`);
				if (label) label.setAttribute('for', newId);
			}
		});

		inputs.forEach(function (input) {

			if (input.type === 'text') {
				input.checked = false;
			}
		});

		selects.forEach(function (select) {

			select.selectedIndex = 0;
		});


		newWindowBlock.querySelectorAll('.selected').forEach(function (selected) {
			selected.classList.remove('selected');
		});
		newWindowBlock.classList.remove('collapsed');

		var windowImage = newWindowBlock.querySelector('.window-display-image');
		windowImage.src = 'img/default.png';


		container.appendChild(newWindowBlock);


		newWindowBlock.scrollIntoView({ behavior: 'smooth' });
		initializeWindowTypeSelection(newWindowBlock);

		initializeCustomSelects(newWindowBlock);
		bindInputEvents(newWindowBlock);
		bindToggleEvent(newWindowBlock);
		initializeDeleteButtons(newWindowBlock);
	}


	var addWindowBtn = document.getElementById('add-window-btn');
	addWindowBtn.addEventListener('click', cloneWindowOptions);

});



function collectAllFormData() {
	var allFormData = {
		windows: [],
	};


	var windowBlocks = document.querySelectorAll('.calculator-layout');
	windowBlocks.forEach(function (block) {

		var windowData = {
			type: block.querySelector('.window-type-option.selected')?.dataset.type,
			sashes: Array.from(block.querySelectorAll('.window-sashes-wrapper .custom-select')).map(sashSelect => {
				return sashSelect.querySelector('.custom-option.selected')?.textContent.trim();
			}),
			width: block.querySelector('input[name="window_width"]').value,
			height: block.querySelector('input[name="window_height"]').value,
			glassPackage: block.querySelector('.window-item-parametr .custom-select .custom-option.selected.pack')?.dataset.value,
			color: block.querySelector('.parametrs-fill-window .custom-select .custom-option.selected.color')?.dataset.value,
			houseType: block.querySelector('.additional-options .custom-select .custom-option.selected.house-type')?.textContent.trim(),
			additionalOptions: Array.from(block.querySelectorAll('.additional-checkboxes input[type="checkbox"]:checked')).map(checkbox => {
				return checkbox.value;
			})
		};

		allFormData.windows.push(windowData);
	});

	console.log(allFormData);
	return allFormData;
}


var calculateBtn = document.getElementById('calculate-btn');
calculateBtn.addEventListener('click', function () {
	collectAllFormData();
});

