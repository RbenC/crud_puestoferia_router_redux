import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import { createProductAction } from '../../store/products/actions'
import styles from './productcreate.module.css'

const ProductCreate = () => {
	const [ nombre, handlerNombre ] = useInput('')
	const [ precio, handlerPrecio ] = useInput('0')
	const [ cantidad, handlerCantidad ] = useInput('0')
	const [ unidad, handlerUnidad ] = useInput('')
	const [ imagen, handlerImagen ] = useInput('https://')
	const dispatch = useDispatch()
	const history = useHistory()

	const handlerSave = (event: any) => {
		event.preventDefault()
		dispatch(
			createProductAction({
				id: new Date().getTime(),
				nombre,
				precio,
				cantidad,
				unidad,
				imagen
			})
		)
		history.push('/products')
	}

	return (
		<div className="container">
			<div className={styles.abs_center}>
				<div className="row">
					<div className="col">
						<div className="card">
							<div className="card-header">
								<h4>Producto Nuevo</h4>
								<div className="btn-group">
									<Link className="btn btn-outline-primary mx-3" to="/products">
										📖
									</Link>
								</div>
							</div>
							<form onSubmit={handlerSave} className={styles.form}>
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
	)
}

export default ProductCreate
