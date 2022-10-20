import { useAppSelector } from '../../hooks/reduxHooks'
import ReactImageMagnify from 'react-image-magnify'

export const ProductDetails = () => {
	const { selectedProduct } = useAppSelector<any>(state => state.findProduct)

	// Obtiene la imágen con mayor resolución
	const regex = /-V/i

	const imageProps = {
		smallImage: {
			alt: selectedProduct.title,
			isFluidWidth: true,
			src: selectedProduct.picture.replace(regex, '-F')
		},
		largeImage: {
			src: selectedProduct.picture.replace(regex, '-F'),
			width: Math.ceil(400) * 2,
			height: Math.ceil(400) * 2
		},
		hoverDelayInMs: 0,
		fadeDurationInMs: 0,
		enlargedImageContainerStyle: { background: '#fff', zIndex: 9, bottom: '5%', display: 'flex', justifyContent: 'center', overflow: 'hidden' },
		enlargedImageContainerClassName: 'm-auto w-full',
		enlargedImageClassName: 'object-contain w-full',
		enlargedImageContainerDimensions: { width: 400, height: 400 },
		lensStyle: { background: '#0000006b', cursor: 'zoom-in' },
		shouldUsePositiveSpaceLens: true,
		imageStyle: { width: '100%', height: '100%' }
	}

	return (
		<>			
			<div className='flex flex-col'>
				<div className='flex flex-col'>
					<div className='flex flex-col md:flex-row'>
						<div className='gallery flex'>
							<div className='img-container flex flex-col gap-4 w:4/6'>
								<div key={selectedProduct.picture} className='w-11 h-11 outline outline-1 outline-gray-300 rounded-sm'>
									<img src={selectedProduct.picture} className="object-contain w-full h-full max-h-[500px]" />
								</div>
							</div>

							<div className="w-[450px] max-h-[550px]">
								<figure className='flex text-center justify-center pl-5 mt-6 h-full items-center'>
									<ReactImageMagnify {...imageProps} className="mr-5 h-full"/>
								</figure>
							</div>
						</div>

						<div className='title w-[341px] mt-8 flex flex-col gap-4 w:2/6'>
							<div className='condition-rating'>
								<span className='text-gray-400 text-sm'>{selectedProduct.condition == 'new' ? 'Nuevo' : 'Usado' } | {selectedProduct.sold_quantity} vendidos</span>
							</div>
							<h1 className="text-xl font-bold">{selectedProduct.title}</h1>
							<div className='prices flex flex-col'>
								<span className='price text-3xl'>$ {selectedProduct.price.toLocaleString('es-AR')}</span>
							</div>
							<div className='flex w-full flex-col  gap-2'>
								<button className='bg-blue-500 hover:bg-blue-600 transition-colors ease-in py-3 rounded-md text-white font-medium text-sm'>Comprar Ahora</button>								
							</div>
						</div>
					</div>
				</div>
				<div className="flex mt-8">
					<div className="flex flex-col">
						<div className="title-description w-full">
							<h3 className="text-xl font-bold pb-3">Descripción del producto</h3>
						</div>
						<div className='description-container flex flex-col gap-4 w:6/6 whitespace-pre-line'>
							{selectedProduct.description}
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
