new TypeIt("#typing", {
	speed: 150,
	loop: true,
	startDelay: 400,
  })
	.type("Ronya", { delay: 300 })
	.pause(200)
	.move(-3, { delay: 300 })
	.pause(200)
	.type("o", { delay: 400 })
	.pause(400)
	.move(null, { to: "END" })
	.pause(600)
	.delete(null, { delay: 800})
	.type('Руня', { delay: 400 })
	.pause(1000)
	.delete(null, { delay: 800})
	.go();