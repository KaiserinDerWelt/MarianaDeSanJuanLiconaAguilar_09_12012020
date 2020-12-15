import { ROUTES_PATH } from "../constants/routes.js";
import Logout from "./Logout.js";

export default class NewBill {
	constructor({ document, onNavigate, firestore, localStorage }) {
		this.document = document;
		this.onNavigate = onNavigate;
		this.firestore = firestore;
		const formNewBill = this.document.querySelector(
			`form[data-testid="form-new-bill"]`
		);
		formNewBill.addEventListener("submit", this.handleSubmit);
		const file = this.document.querySelector(`input[data-testid="file"]`);
		file.addEventListener("change", this.handleChangeFile);
		this.fileUrl = null;
		this.fileName = null;
		new Logout({ document, localStorage, onNavigate });
	}
	handleSubmit = (e) => {
		e.preventDefault();
		// Upload the Image
		const file = this.document.querySelector(`input[data-testid="file"]`)
			.files[0];
		const fileName = file?.name;
		this.firestore?.storage
			.ref(`justificatifs/${fileName}`)
			.put(file)
			.then((snapshot) => snapshot.ref.getDownloadURL())
			.then((url) => {
				// Add the bill to database

				// this.email = JSON.parse(localStorage.getItem("user")).email;

				// Push to firestore
				this.firestore
					.bills()
					.add({
						email: JSON.parse(localStorage.getItem("user")).email,
						type: e.target.querySelector(
							`select[data-testid="expense-type"]`
						).value,
						name: e.target.querySelector(
							`input[data-testid="expense-name"]`
						).value,
						amount: parseInt(
							e.target.querySelector(
								`input[data-testid="amount"]`
							).value
						),
						date: e.target.querySelector(
							`input[data-testid="datepicker"]`
						).value,
						vat: e.target.querySelector(`input[data-testid="vat"]`)
							.value,
						pct:
							parseInt(
								e.target.querySelector(
									`input[data-testid="pct"]`
								).value
							) || 20,
						commentary: e.target.querySelector(
							`textarea[data-testid="commentary"]`
						).value,
						fileUrl: url,
						fileName: fileName,
						status: "pending",
					})
					.then(() => {
						this.onNavigate(ROUTES_PATH["Bills"]);
					})
					.catch((error) => error);
			});
	};
}
