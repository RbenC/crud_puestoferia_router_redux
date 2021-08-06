import { Link } from 'react-router-dom'
import styles from './dashboard.module.css'

const Comments = () => {
	return (
		<div className={styles.abs_comments}>
			<div className="container">
				<h2 className="text-center m-4 pb-4">Clientes Satisfechos opinan</h2>
				<div className="card-group">
					<div className="card text-center">
						<div className="text-center">
							<img src="../../../imgs/customer1.jpg" alt="imagen1" className={styles.imgcustomers} />
						</div>
						<div className="card-body">
							<h5 className="card-title">Matías</h5>
							<p className="card-text">La calidad es excelente, me gusta su color y gran variedad.</p>
						</div>
						<div className="card-footer">
							<small className="text-muted">Ultimo mensaje hace 10 minutos</small>
						</div>
					</div>

					<div className="card text-center">
						<div className="text-center">
							<img src="../../../imgs/customer2.jpg" alt="imagen2" className={styles.imgcustomers} />
						</div>
						<div className="card-body">
							<h5 className="card-title">Cristina</h5>
							<p className="card-text">La calidad es excelente, me gusta su color y gran variedad.</p>
						</div>
						<div className="card-footer">
							<small className="text-muted">Ultimo mensaje hace 10 minutos</small>
						</div>
					</div>

					<div className="card text-center">
						<div className="text-center">
							<img src="../../../imgs/customer3.jpg" alt="imagen3" className={styles.imgcustomers} />
						</div>
						<div className="card-body">
							<h5 className="card-title">Carolina</h5>
							<p className="card-text">La calidad es excelente, me gusta su color y gran variedad.</p>
						</div>
						<div className="card-footer">
							<small className="text-muted">Ultimo mensaje hace 10 minutos</small>
						</div>
					</div>
				</div>
				<div>
					<p className="mx-5 px-5 mt-4">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos natus illo earum nisi
						dolorum facilis aut libero odit provident. Dolor in tempore explicabo aperiam soluta culpa aut
						iusto fugit nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
					</p>

					<p className="mx-5 px-5">
						Quas ut repudiandae quis et cumque impedit ex quam incidunt ipsam est eveniet, reprehenderit
						quibusdam, temporibus doloribus sapiente odio optio voluptates commodi. Lorem ipsum dolor sit
						amet consectetur, adipisicing elit. Nulla aspernatur cupiditate neque unde vero, incidunt
						voluptate, porro assumenda, iusto tempora obcaecati quibusdam! Excepturi, doloremque accusamus
						sequi vero unde consequatur corporis.
					</p>
				</div>

				<div className="d-grid my-3 pt-2 ">
					<Link className="btn btn-outline-success" type="button" to="/products">
						Vamos a comprar!!!
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Comments
