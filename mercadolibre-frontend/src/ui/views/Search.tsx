import { useEffect } from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import { useGetSelectedProductMutation, useObtainSearchedProductsQuery } from '../../core/products/infrastructure/ProductsRepository'
import { Spinner } from '../components/spinner/Spinner'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { setSearchProducts } from '../../core/products/application/SearchProductsUseCase'
import { setSelectedProducts } from '../../core/products/application/FindProductUseCase'

export const Search = () => {
	const dispatch = useAppDispatch()	
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const product = queryParams.get('search') as string;

	const navigate = useNavigate()

	const title = product !== undefined && product !== null && product.charAt(0).toUpperCase() + product.slice(1)

	const { isLoading, data } = useObtainSearchedProductsQuery(title)

	const state = useAppSelector(state => state.searchProducts.productList)

	const [getSelectedProduct, result] = useGetSelectedProductMutation()

	//* Recupera objetos de la búsqueda al recargar
	useEffect(() => {
		if (product !== undefined && product !== null) {
			document.title = `${title} | MercadoLibre 📦`
			dispatch(setSearchProducts(data))
		}		

		if (product === null || product === undefined) {
			navigate(`/`)
		}
		
		if (data !== undefined) {
			dispatch(setSearchProducts(data))
		}

		if (result.data !== undefined) {
			dispatch(setSelectedProducts(result.data.item))
			navigate(`/items/${result.data.item.id}`)
		}
	}, [data, result.data])

	//* Llama al hook useGetSelectedProductQuery para fetchear datos del item, tomando como argumento su ID
	const handleSelectProduct = (id: string) => {
		getSelectedProduct(id)
	}
	return (
		<main className='text-gray-meli overflow-x-auto'>
			{
				state === undefined || isLoading
					? (<Spinner />
					)
					: (
						<div className="App items-center min-h-screen pb-20 overflow-x-hidden bg-background-meli px-3">							
							{state.categories.length > 0 && 
								<nav className='flex text-gray-700 max-w-6xl mx-auto mt-8' aria-label="Breadcrumb">
									<ol className='inline-flex items-center space-x-1 md:space-x-3 text-sm font-light'>{state.categories.map((category: string, index: number) => (										
										<>{index !== 0 ? <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
															<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
														 </svg> : ''}
										<li className="inline-flex items-center">{category}</li></>
									))}
									</ol>
								</nav>}
							<div className='search-main gap-8 flex w-full xl:w-5/6 max-w-6xl mx-auto mt-8'>								
								<section className='search-catalog bg-white shadow-sm rounded-sm w-full'>
									<ol className='flex flex-col'>
									{state.items.slice(0,4).map((product: {id: string, title: string, picture: string, free_shipping: boolean, price: number, condition: string, address: string }) => (
											<li key={product.id}>
												<div className='product-card w-full bg-white py-5 px-5 flex gap-5 '>
													<div className='card-img-container w-40 h-40 min-w-[160px]'>
														<img onClick={() => handleSelectProduct(product.id)} className='cursor-pointer object-contain' src={`${product.picture}`}/>
													</div>
													<div onClick={() => handleSelectProduct(product.id)} className='w-auto product-info flex flex-col text-left gap-2 justify-center cursor-pointer'>														
														<span className='font-medium text-2xl'>$ {product.price?.toLocaleString('es-AR')}
														{product.free_shipping && <span className='text-green-600 font-medium text-sm font-sans'> Envio gratis</span>}	
														</span>														
														<div className='product-search__title'>
															<h2 className='text-xl font-light'>{product.title}</h2>
														</div>														
													</div>
													<div onClick={() => handleSelectProduct(product.id)} className='w-80 product-address hidden lg:flex flex-col text-center gap-2 justify-center text-right cursor-pointer'>
														<h3 className='text-sm font-light'>{product.address}</h3>
													</div>
												</div>
												<hr/>
											</li>
										))}
									</ol>
								</section>
							</div>
						</div>
					)
			}
		</main>
	)
}
