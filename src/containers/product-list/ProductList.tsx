import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProductAction } from '../../store/products/actions'
import { productListSelector } from '../../store/products/selectors'
import Swal from 'sweetalert2'
import styles from './productlist.module.css'

const ProductList = () => {
	const productList = useSelector(productListSelector)
	const dispatch = useDispatch()

	const handlerDelete = (id: any) => {
		Swal.fire({
			title: '¿Esta seguro?',
			text: ' ¿ de eliminar este producto ? ',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si'
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(deleteProductAction(id))
			}
		})
	}

	return (
		// <div className="mt-5 pt-2">
		<div className="row mt-5 pt-2 animate__animated  animate__fadeInDown">
			<div className="col">
				<div className="card">
					<div className="card-header">
						<div className="d-grid mt-1">
							<Link className="btn btn-outline-primary" type="button" to="/products/create">
								Nuevo
							</Link>
						</div>
					</div>
					<div className="card-body">
						{productList.length > 0 ? (
							<div className={styles.abs_center}>
								<table className="table">
									<thead>
										<tr>
											<th>#</th>
											<th>Nombre</th>
											<th>Precio</th>
											<th>Unidad</th>
											<th>Foto</th>
											<th className="text-end">Acciones</th>
										</tr>
									</thead>
									<tbody>
										{productList.map((p: any) => (
											<tr key={p.id}>
												<td>
													<div className="badge bg-dark">{p.id}</div>
												</td>
												<td>{p.nombre}</td>
												<td>${p.precio}</td>
												<td>{p.unidad}</td>
												<td>
													<img
														src={p.imagen}
														alt={p.nombre}
														width="70px"
														className="animate__animated animate__flip"
													/>
												</td>
												<td className="text-end">
													<div className="btn-group">
														<button
															className="btn btn-sm btn-outline-danger"
															onClick={() => handlerDelete(p.id)}
														>
															🗑
														</button>
														<Link
															className="btn btn-sm btn-outline-primary"
															to={`/products/detail/${p.id}`}
														>
															🔍
														</Link>
													</div>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						) : (
							<div className="alert alert-danger">No existen elementos</div>
						)}
					</div>
				</div>
			</div>
		</div>
		// </div>
	)
}

export default ProductList
