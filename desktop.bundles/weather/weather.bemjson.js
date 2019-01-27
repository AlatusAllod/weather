({
	block: 'page',
	title: 'Weather',
	favicon: '/assets/img/favicon.ico',
	head: [
		{
			elem: 'css',
			url: 'weather.min.css'
		},
		{
			elem: 'meta', attrs: {
				name: 'viewport',
				content: 'width=device-width, initial-scale=1.0'
			}
		}
	],
	scripts: [{ elem: 'js', url: 'weather.min.js' }],
	mods: { theme: 'original' },
	content: [
		{
			elem: 'title',
			tag: 'h1',
			content: [
				'Прогноз погоды'
			]
		},
		{
			block: 'weather-container',
			content: [
				{
					elem: 'navigation',
					elemMods: {
						scroll: 'back',
						disabled: true
					},
				},
				{
					block: 'weather-card',
					content: [
						{
							elem: 'day-of-the-week',
							mix: {
								elem: 'content',
								elemMods: { info: 'secondary' }
							},
							tag: 'p'
						},
						{
							elem: 'day-of-the-month',
							mix: { elem: 'content' },
							tag: 'p'
						},
						{
							elem: 'icon',
							tag: 'img'
						},
						{
							elem: 'day-temperature',
							mix: { elem: 'content' },
							tag: 'p'
						},
						{
							elem: 'night-temperature',
							mix: {
								elem: 'content',
								elemMods: { info: 'secondary' }
							},
							tag: 'p'
						},
						{
							elem: 'rainfall',
							mix: {
								elem: 'content',
								elemMods: { info: 'secondary' }
							},
							tag: 'p'
						}
					]
				},
				{
					block: 'weather-card',
					content: [
						{
							elem: 'day-of-the-week',
							mix: {
								elem: 'content',
								elemMods: { info: 'secondary' }
							},
							tag: 'p'
						},
						{
							elem: 'day-of-the-month',
							mix: { elem: 'content' },
							tag: 'p'
						},
						{
							elem: 'icon',
							tag: 'img'
						},
						{
							elem: 'day-temperature',
							mix: { elem: 'content' },
							tag: 'p'
						},
						{
							elem: 'night-temperature',
							mix: {
								elem: 'content',
								elemMods: { info: 'secondary' }
							},
							tag: 'p'
						},
						{
							elem: 'rainfall',
							mix: {
								elem: 'content',
								elemMods: { info: 'secondary' }
							},
							tag: 'p'
						}
					]
				},
				{
					block: 'weather-card',
					content: [
						{
							elem: 'day-of-the-week',
							mix: {
								elem: 'content',
								elemMods: { info: 'secondary' }
							},
							tag: 'p'
						},
						{
							elem: 'day-of-the-month',
							mix: { elem: 'content' },
							tag: 'p'
						},
						{
							elem: 'icon',
							tag: 'img'
						},
						{
							elem: 'day-temperature',
							mix: { elem: 'content' },
							tag: 'p'
						},
						{
							elem: 'night-temperature',
							mix: {
								elem: 'content',
								elemMods: { info: 'secondary' }
							},
							tag: 'p'
						},
						{
							elem: 'rainfall',
							mix: {
								elem: 'content',
								elemMods: { info: 'secondary' }
							},
							tag: 'p'
						}
					]
				},
				{
					block: 'weather-card',
					content: [
						{
							elem: 'day-of-the-week',
							mix: {
								elem: 'content',
								elemMods: { info: 'secondary' }
							},
							tag: 'p'
						},
						{
							elem: 'day-of-the-month',
							mix: { elem: 'content' },
							tag: 'p'
						},
						{
							elem: 'icon',
							tag: 'img'
						},
						{
							elem: 'day-temperature',
							mix: { elem: 'content' },
							tag: 'p'
						},
						{
							elem: 'night-temperature',
							mix: {
								elem: 'content',
								elemMods: { info: 'secondary' }
							},
							tag: 'p'
						},
						{
							elem: 'rainfall',
							mix: {
								elem: 'content',
								elemMods: { info: 'secondary' }
							},
							tag: 'p'
						}
					]
				},
				{
					elem: 'navigation',
					elemMods: {
						scroll: 'forward'
					}
				}
			]
		}
	]
})
