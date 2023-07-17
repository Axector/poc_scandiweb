class HomeController {
	async getHomeText(req, res) {
		res.header("Access-Control-Allow-Origin", "*");
		res.send('Quisque semper felis velit, et feugiat ligula dignissim eget. ' +
			'Proin consectetur ante vitae interdum aliquet. ' +
			'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ' +
			'Vestibulum aliquam rutrum tortor scelerisque consectetur. Etiam vel erat at tortor maximus maximus. ' +
			'Donec blandit nunc at eros semper, sit amet gravida nisl cursus. Nullam malesuada lobortis iaculis. ' +
			'Morbi id ligula nec arcu interdum dapibus a et metus. Nam ut diam enim. ' +
			'Duis aliquam ultricies urna a accumsan. ' +
			'Proin varius ipsum vel urna maximus, id pharetra metus sagittis. Quisque molestie, ' +
			'purus eget condimentum bibendum, risus lacus porta turpis, ut feugiat elit justo vitae purus. ' +
			'Quisque porta eros sit amet porttitor fermentum. Nullam scelerisque, ex id efficitur tincidunt, ' +
			'metus erat dictum elit, sit amet ornare lectus quam sed tellus. Morbi malesuada aliquam lacus eget sagittis. ' +
			'Suspendisse sagittis lacus felis, quis blandit arcu venenatis ultricies.')
	}

	async getRandomNumber(req, res) {
		const number = Math.floor(Math.random() * 1000)
		res.header("Access-Control-Allow-Origin", "*");
		res.send(`${number}`)
	}
}

module.exports = new HomeController()
