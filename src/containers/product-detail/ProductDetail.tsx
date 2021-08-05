import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import { productListSelector } from '../../store/products/selectors'
import { updateProductAction } from '../../store/products/actions'
import styles from './productdetail.module.css'

const ProductDetail = () => {
	const { id }: any = useParams()
	const productList = useSelector(productListSelector)
	const dispatch = useDispatch()
	const history = useHistory()

	const [ nombre, handlerNombre, setNombre ] = useInput('')
	const [ precio, handlerPrecio, setPrecio ] = useInput('0')
	const [ cantidad, handlerCantidad, setCantidad ] = useInput('0')
	const [ unidad, handlerUnidad, setUnidad ] = useInput('')
	const [ imagen, handlerImagen, setImagen ] = useInput('')

	useEffect(
		() => {
			const p = productList.find((e) => e.id === parseInt(id))
			if (p) {
				setNombre(p.nombre)
				setPrecio(p.precio)
				setCantidad(p.cantidad)
				setUnidad(p.unidad)
				setImagen(p.imagen)
			}
		},
		[ productList, id, setNombre, setPrecio, setCantidad, setUnidad, setImagen ]
	)

	const handlerSave = (event: any) => {
		event.preventDefault()
		dispatch(
			updateProductAction({
				id: Number.parseInt(id),
				nombre,
				precio,
				cantidad,
				unidad,
				imagen
			})
		)
		history.push('/products')
	}

	return productList.find((e) => e.id === parseInt(id)) ? (
		<div className="container">
			<div className={styles.abs_center}>
				<div className="row">
					<div className="col">
						<div className="card">
							<div className="card-header">
								<h4>Actualizar Producto</h4>
								<div className="btn-group">
									<Link className="btn btn-outline-primary mx-3" to="/products">
										📖
									</Link>
								</div>
							</div>
							<form onSubmit={handlerSave}>
								<div className="card-body">
									<label>Nombre</label>
									<input
										type="text"
										className="form-control"
										value={nombre}
										onChange={handlerNombre}
									/>
									<label>Precio</label>
									<input
										type="number"
										className="form-control"
										value={precio}
										onChange={handlerPrecio}
									/>
									<label>Cantidad</label>
									<input
										type="number"
										className="form-control"
										value={cantidad}
										onChange={handlerCantidad}
									/>
									<label>Unidad</label>
									<input
										type="text"
										className="form-control"
										value={unidad}
										onChange={handlerUnidad}
									/>
									<label>Imagen</label>
									<input
										type="text"
										className="form-control"
										value={imagen}
										onChange={handlerImagen}
									/>
									<div className="text-center">
										<img src={imagen} alt={nombre} width="100px" />
									</div>
								</div>
								<div className="card-footer">
									<button
										className="btn btn-primary mt-3"
										disabled={
											nombre === '' ||
											precio === '' ||
											cantidad === '' ||
											unidad === '' ||
											imagen === ''
										}
									>
										Guardar
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div>Loading...</div>
	)
}

export default ProductDetail
