class AboutController {
	async getAboutText(req, res) {
		res.header("Access-Control-Allow-Origin", "*");
		res.send('Sed lobortis et sem vel hendrerit. Duis tempor orci lorem. ' +
			'Interdum et malesuada fames ac ante ipsum primis in faucibus. ' +
			'Donec at dui quis augue aliquam mollis. Aliquam erat volutpat. ' +
			'Aenean efficitur tortor id nunc faucibus tincidunt. ' +
			'Ut sagittis id diam rutrum eleifend. ' +
			'Donec vestibulum dapibus ullamcorper. Sed id elit arcu. ' +
			'Nulla euismod, nulla et tristique laoreet, diam eros tempor erat, id dignissim tellus ante vitae augue. ' +
			'Morbi sed sem vel sapien aliquam pellentesque sed quis risus. Nulla diam purus, congue id eros a, euismod consectetur nisl. ' +
			'Morbi a velit vitae ex mollis cursus id eget est. Suspendisse pellentesque leo nulla, consequat commodo lacus finibus in. ' +
			'Quisque sodales faucibus nunc, vel imperdiet arcu molestie vitae.')
	}
}

module.exports = new AboutController()