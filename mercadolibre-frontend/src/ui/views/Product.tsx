import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useObtainSelectedProductsQuery } from '../../core/products/infrastructure/ProductsRepository'
import { ProductDetails } from '../components/product-details/ProductDetails'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { setSelectedProducts } from '../../core/products/application/FindProductUseCase'

export const Product = () => {
	const { selectedProduct } = useAppSelector<any>(state => state.findProduct)
	const dispatch = useAppDispatch()

	const product = useParams().id

	const navigate = useNavigate()

	const { isSuccess, data } = useObtainSelectedProductsQuery(product)

	useEffect(() => {
		if (typeof data !== 'undefined') {
			dispatch(setSelectedProducts(data.item))
		} else {
			if(isSuccess) {
				navigate('/')
			}
		}
		document.documentElement.style.scrollBehavior = 'auto'
		setTimeout(() => window.scrollTo(0, 0), 5)
		setTimeout(() => {
			document.documentElement.style.scrollBehavior = 'smooth'
		}
			, 5)
	}, [isSuccess])

	return (
		<main className='text-gray-meli overflow-x-auto'>
			<div className="App items-center min-h-screen pb-20 overflow-x-hidden bg-background-meli px-3">
				{
					selectedProduct !== null && selectedProduct.path_from_root.length > 0 &&
					<nav className='flex text-gray-700 max-w-6xl mx-auto mt-8' aria-label="Breadcrumb">
						<ol className='inline-flex items-center space-x-1 md:space-x-3 text-sm font-light'>{selectedProduct.path_from_root.map((category: string, index: number) => (
							<>{index !== 0 ? <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
							</svg> : ''}
								<li className="inline-flex items-center">{category}</li></>
						))}
						</ol>
					</nav>
				}
				{
					selectedProduct === null
						? <div />
						:
						<section className='bg-white shadow-md w-full lg:max-w-[1184px] max-w-full h-full m-auto lg:rounded-md p-5 text-left mt-6 flex flex-col lg:justify-between lg:flex-row pb-20'>
							<ProductDetails />
							<div className='flex flex-col gap-3'>
							</div>
						</section>
				}
			</div>
		</main>

	)
}
