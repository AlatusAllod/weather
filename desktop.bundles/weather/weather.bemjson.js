({
	block: 'page',
	title: 'Weather',
	favicon: '/assets/img/favicon.ico',
	head: [
		{ elem: 'css', url: 'weather.min.css' }
	],
	scripts: [{ elem: 'js', url: 'weather.min.js' }],
	mods: { theme: 'original' },
	content: [
		{
			block: 'weather-container',
			content: [
				{
					block: 'weather-card',
					content: [
						{
							elem: 'day-of-the-week',
							tag: 'p'
						},
						{
							elem: 'day-of-the-month',
							tag: 'p'
						},
						{
							elem: 'icon',
							tag: 'img'
						},
						{
							elem: 'day-temperature',
							tag: 'p'
						},
						{
							elem: 'night-temperature',
							tag: 'p'
						},
						{
							elem: 'rainfall',
							tag: 'p'
						}
					]
				},
				{
					block: 'weather-card',
					content: [
						{
							elem: 'day-of-the-week',
							tag: 'p'
						},
						{
							elem: 'day-of-the-month',
							tag: 'p'
						},
						{
							elem: 'icon',
							tag: 'img'
						},
						{
							elem: 'day-temperature',
							tag: 'p'
						},
						{
							elem: 'night-temperature',
							tag: 'p'
						},
						{
							elem: 'rainfall',
							tag: 'p'
						}
					]
				},
				{
					block: 'weather-card',
					content: [
						{
							elem: 'day-of-the-week',
							tag: 'p'
						},
						{
							elem: 'day-of-the-month',
							tag: 'p'
						},
						{
							elem: 'icon',
							tag: 'img'
						},
						{
							elem: 'day-temperature',
							tag: 'p'
						},
						{
							elem: 'night-temperature',
							tag: 'p'
						},
						{
							elem: 'rainfall',
							tag: 'p'
						}
					]
				}
			]
		}
	]
})
