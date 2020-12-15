import { screen } from "@testing-library/dom";
import NewBillUI from "../views/NewBillUI.js";
import NewBill from "../containers/NewBill.js";
import userEvent from "@testing-library/user-event";

describe("Given I am connected as an employee", () => {
	describe("When I am on NewBill Page", () => {
		test("Then ...", () => {
			const html = NewBillUI();
			document.body.innerHTML = html;
			//to-do write assertion
		});
		it("NewBill constructor works", () => {
			const obj = new NewBill({
				document: document,
			});
			expect(obj.document).toBe(document);
		});
		test("Test submit", () => {
			const html = NewBillUI();
			document.body.innerHTML = html;
			const onNavigate = (pathname) => {
				document.body.innerHTML = ROUTES({ pathname });
			};
			const obj = new NewBill({
				document,
				onNavigate,
				firestore: null,
				localStorage: window.localStorage,
			});

			const handleSubmit = jest.fn(obj.handleSubmit);
			const file = screen.getByTestId("file");
			const newBill = screen.getByTestId("btn-send-bill");
			newBill.addEventListener("click", handleSubmit);
			userEvent.click(newBill);
			expect(handleSubmit).toHaveBeenCalled();
		});
	});
});
