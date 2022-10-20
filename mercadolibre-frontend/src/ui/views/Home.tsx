import { useEffect } from 'react'

export const Home = () => {
	useEffect(() => {
		document.title = 'Mercado Libres'
	}, [])

	return (
		<div className="App items-center h-full pb-20 overflow-x-hidden">
		</div>
	)
}
