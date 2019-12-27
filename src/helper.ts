function importFromJson(file: string, callback: Function) {
	fetch(file)
		.then(e => e.json()
			.then(json => {
				callback(json)
			})
		)
}