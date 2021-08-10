import styles from './dashboard.module.css'

const Dashboard = () => {
	return (
		<div className={styles.abs_center}>
			<div className="container">
				<h2 className="text-center mt-5 p-5 ">¿Desea comprar frutas y verduras de calidad ? </h2>
				<div className="row row-cols-2">
					<div className="col">
						<h2 className="text-center">Visita nuestro puesto de Feria Santaolalla</h2>
						<hr />
						<p className={styles.nova}>
							Desde hace cuatro años ofrecemos productos nacionales agrícolas de gran calidad e importamos
							aquellos que complementan la dieta alimentaria. Para que usted disfrute con seguridad y
							placer
						</p>
					</div>
					<div className="col text-center animate__animated animate__fadeInUp">
						<img src="../../../frutas.PNG" alt="logo" width="80%" />
					</div>
				</div>
				<div className="row row-cols-1">
					<div className="col">
						<p className="m-5">
							Nuestros productos tienen el sello de garantía Santaolalla, para que usted esté seguro de su
							calidad. Venga y escoja productos de gran variedad nacional e internacional.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
