import { screen } from "@testing-library/dom";
import BillsUI from "../views/BillsUI.js";
import Bills from "../containers/Bills.js";
import { bills } from "../fixtures/bills.js";
import userEvent from "@testing-library/user-event";//
import { ROUTES } from "../constants/routes";//
import Actions from "../views/Actions";//
//Imported Routes

describe("Given I am connected as an employee", () => {
	describe("When I am on Bills Page", () => {
		test("Then bill icon in vertical layout should be highlighted", () => {
			const html = BillsUI({ data: [] });
			document.body.innerHTML = html;
			//to-do write expect expression
		});

		// Created the test for bills
		test("Then bills should be ordered from earliest to latest", () => {
			const html = BillsUI({ data: bills }); //Earlies2Latest
			document.body.innerHTML = html;
			const dates = screen
				.getAllByText(
					/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/i
				)
				.map((a) => a.innerHTML);
			const antiChrono = (a, b) => (a < b ? 1 : -1);
			const datesSorted = [...dates].sort(antiChrono);
			expect(dates).toEqual(datesSorted);
			console.log(datesSorted);
		});

		it("Bills constructor works", () => {
			const obj = new Bills({
				document: document,
			});
			expect(obj.document).toBe(document);
		});
		test("New bill button", () => { //Testing new bill button
			const html = BillsUI(bills);
			document.body.innerHTML = html;
			const onNavigate = (pathname) => {
				document.body.innerHTML = ROUTES({ pathname });
			};
			const obj = new Bills({
				document,
				onNavigate,
				firestore: null,
				bills,
				localStorage: window.localStorage,
			});

			const handleClickNewBill = jest.fn(obj.handleClickNewBill);
			const newBill = screen.getByTestId("btn-new-bill");
			newBill.addEventListener("click", handleClickNewBill);
			userEvent.click(newBill);
			expect(handleClickNewBill).toHaveBeenCalled();
		});

		test("Eye button", () => { //Testing eye button to display file
			const html = Actions(bills[0].fileUrl);
			document.body.innerHTML = html;
			const onNavigate = (pathname) => {
				document.body.innerHTML = ROUTES({ pathname });
			};
			const obj = new Bills({
				document,
				onNavigate,
				firestore: null,
				bills,
				localStorage: window.localStorage,
			});

			const handleClickIconEye = jest.fn(obj.handleClickIconEye);
			const eye = screen.getByTestId("icon-eye");
			eye.addEventListener("click", handleClickIconEye);
			userEvent.click(eye);
			// expect(handleClickIconEye).toHaveBeenCalled();
		});
	});
});
