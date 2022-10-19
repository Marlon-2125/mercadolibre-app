import { IoSearchOutline } from 'react-icons/io5'
import { FormEvent, useEffect, useState } from 'react'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { setSearchProducts } from '../../../core/products/application/SearchProductsUseCase'
import { useSearchProductsMutation } from '../../../core/products/infrastructure/ProductsRepository'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
	const dispatch = useAppDispatch()
	const [searchTerm, setSearchTerm] = useState('')
	const [searchProducts, result] = useSearchProductsMutation()

	const navigate = useNavigate()

	const handleSearchProduct = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (searchTerm === '') {
			return
		}
		searchProducts(searchTerm)
	}

	useEffect(() => {
		if (result.data !== undefined) {
			dispatch(setSearchProducts(result.data))
			navigate(`/items?search=${searchTerm}`)
		}
	}, [result.data])

	return (
		<>
			<header className="bg-yellow-meli py-2 px-6">
				{/* header */}
				<div className="max-w-6xl m-auto">
					<div className="m-auto gap-3 flex justify-between items-center">
						<a href="/" className="logo bg-logo-large w-40 bg-no-repeat h-9 hidden lg:block" />
						<a href="/" className="logo bg-logo-small w-11 h-7 bg-contain bg-no-repeat lg:hidden" />
						<form onSubmit={handleSearchProduct} className="w-full lg:w-10/12 h-10 flex relative gap-3 items-center">
							<input
								type="text"
								placeholder="Nunca dejes de buscar..."
								className="w-full h-full rounded-sm shadow-md pl-8 lg:py-2 lg:px-3 outline-none font-normal text-sm relative"
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
							<IoSearchOutline color="#b4b4b4" size={'1.2em'} className="lg:hidden absolute left-2 top-[10px]"/>
							<button className="hidden lg:block right-3 top-1/4 absolute search-button w-6">
								<IoSearchOutline color="#666670" size={'1.2em'} />
							</button>
						</form>
					</div>
				</div>
			</header>
		</>
	)
}
