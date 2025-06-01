const BASE_URL = 'https://pineglade.github.io/dabt';

const PROJECT_NAME = 'Сказки о деде Андрее и бабке Тане';

const DESCRIPTION =
	'Юмор. Современные бытовые сказки о деде Андрее и бабке Тане.';

const CONTENTS = [
	'/nesostoyavshayasya-svadba',
	'/vodka-i-eyo-posledstviya',
	'/skazka-o-porosyonke'
];

const ALL_PAGES = ['', ...CONTENTS];

const TITLES: { [routeId: string]: string } = {
	'/nesostoyavshayasya-svadba': 'Несостояв­шаяся свадьба',
	'/skazka-o-porosyonke': 'Сказка о поросёнке',
	'/vodka-i-eyo-posledstviya': 'Водка и её послед­ствия'
};

export { ALL_PAGES, BASE_URL, CONTENTS, DESCRIPTION, PROJECT_NAME, TITLES };
