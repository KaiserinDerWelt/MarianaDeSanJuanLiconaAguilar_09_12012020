import VerticalLayout from "./VerticalLayout.js";
import ErrorPage from "./ErrorPage.js";
import LoadingPage from "./LoadingPage.js";
import eyeBlueIcon from "../assets/svg/eye_blue.js";
import Actions from "./Actions.js";

const row = (bill) => {
	return `
    <tr>
      <td>${bill.type}</td>
      <td>${bill.name}</td>
      <td>${bill.date}</td>
      <td>${bill.amount} €</td>
      <td>${bill.status}</td>
      <td>
        <div class="icon-actions">
          <div id="eye" data-testid="icon-eye" data-bill-url=${bill.fileUrl}>
          ${eyeBlueIcon}
          </div>
        </div>
      </td>
    </tr>
    `;
};

const rows = (data) => {
	return data && data.length ? data.map((bill) => row(bill)).join("") : "";
};

export default ({ data: bills, loading, error }) => {
	const modal = () => `
    <div class="modal" id="modaleFile" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Fee</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          </div>
        </div>
      </div>
    </div>
  `;

	if (loading) {
		return LoadingPage();
	} else if (error) {
		return ErrorPage(error);
	}

	return `
    <div class='layout'>
      ${VerticalLayout(120)}
      <div class='content'>
        <div class='content-header'>
          <div class='content-title'> Mis documentos y facturas</div>
          <button type="button" data-testid='btn-new-bill' class="btn btn-primary">Nuevo documento o factura</button>
        </div>
        <div id="data-table">
        <table id="example" class="table table-striped" style="width:100%">
          <thead>
              <tr>
                <th>Categoria</th>
                <th>Etiqueta</th>
                <th>Fecha</th>
                <th>Cantidad</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
          </thead>
          <tbody data-testid="tbody">
            ${rows(bills)}
          </tbody>
          </table>
        </div>
      </div>
      ${modal()}
    </div>`;
};
