import React, { useState } from 'react'

const React_101 = () => {
	const [name, setName] = useState('World')
	const changeName = () => {
		const names = ['Alexander', 'Kefini', 'Jacob']
		const num = Math.floor(Math.random() * names.length)
		setName(names[num])
	}
	return (
		<>
			<main>
				<p>Hello {name}</p>
				<button onClick={changeName}>click Me</button>
			</main>
		</>
	)
}

export default React_101