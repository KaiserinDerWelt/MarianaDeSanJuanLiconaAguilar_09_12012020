import { ROUTES_PATH } from "../constants/routes.js";
import { formatDate, formatStatus } from "../app/format.js";
import Logout from "./Logout.js";

export default class {
	constructor({ document, onNavigate, firestore, localStorage }) {
		this.document = document;
		this.onNavigate = onNavigate;
		this.firestore = firestore;
		const buttonNewBill = document.querySelector(
			`button[data-testid="btn-new-bill"]`
		);
		if (buttonNewBill) {
			buttonNewBill.addEventListener("click", this.handleClickNewBill);
		}
		const iconEye = document.querySelectorAll(
			`div[data-testid="icon-eye"]`
		);

		if (iconEye) {
			iconEye.forEach((icon) => {
				icon.addEventListener("click", (icon) =>
					this.handleClickIconEye(icon)
				);
			});
		}
		new Logout({ document, localStorage, onNavigate });
	}

	handleClickNewBill = () => {
		this.onNavigate(ROUTES_PATH["NewBill"]);
	};
//Show image in eye icon
	handleClickIconEye = (icon) => {
		console.log(icon.currentTarget);
		const billUrl = icon.currentTarget.getAttribute("data-bill-url");
		const imgWidth = Math.floor($("#modaleFile").width() * 0.5);
		$("#modaleFile")
			.find(".modal-body")
			.html(
				`<div style='text-align: center;'><img width=${imgWidth} src=${billUrl} /></div>`
			);
		if (typeof $("#modaleFile").modal === "function") {
			$("#modaleFile").modal("show");
		}

		// $("#modaleFile").modal();
	};

	// no need to cover this function by tests
	getBills = () => {
		const userEmail = localStorage.getItem("user")
			? JSON.parse(localStorage.getItem("user")).email
			: "";
		if (this.firestore) {
			return this.firestore
				.bills()
				.orderBy("date", "asc")
				.get()
				.then((snapshot) => {
					const bills = snapshot.docs
						.map((doc) => ({
							...doc.data(),
							date: formatDate(doc.data().date),
							status: formatStatus(doc.data().status),
						}))
						.filter((bill) => bill.email === userEmail);
					return bills;
				})
				.catch((error) => error);
		}
	};
}
