import VerticalLayout from "./VerticalLayout.js";

export default () => {
	return `
    <div class='layout'>
      ${VerticalLayout(120)}
      <div class='content'>
        <div class='content-header'>
          <div class='content-title'> Factura o documento para aprobacion </div>
        </div>
        <div class="form-newbill-container content-inner">
          <form data-testid="form-new-bill">
            <div class="row">
                <div class="col-md-6">
                  <div class="col-half">
                    <label for="expense-type" class="bold-label">Documentos o facturas</label>
                      <select required class="form-control blue-border" data-testid="expense-type">
                        <option>Documento Fiscal</option>
                        <option>Identificacion</option>
                        <option>Factura</option>
                      </select>
                  </div>
                  <div class="col-half">
                    <label for="expense-name" class="bold-label">Personalidad</label>
                    <input type="text" class="form-control blue-border" data-testid="expense-name" placeholder="Persona Fisica o Moral" />
                  </div>
                  <div class="col-half">
                    <label for="datepicker" class="bold-label">Fecha</label>
                    <input required type="date" class="form-control blue-border" data-testid="datepicker" />
                  </div>
                  <div class="col-half">
                    <label for="amount" class="bold-label">Valor de factura si aplica</label>
                    <input required type="number" class="form-control blue-border input-icon input-icon-right" data-testid="amount" placeholder="348"/>
                  </div>
                  <div class="col-half-row">
                    <div class="flex-col"> 
                      <label for="vat" class="bold-label">IVA</label>
                      <input type="number" class="form-control blue-border" data-testid="vat" placeholder="70" />
                    </div>
                    <div class="flex-col">
                      <label for="pct" class="white-text">% Financiamiento</label>
                      <input required type="number" class="form-control blue-border" data-testid="pct" placeholder="20" />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="col-half">
                    <label for="commentary" class="bold-label">Comentarios</label>
                    <textarea class="form-control blue-border" data-testid="commentary" rows="3"></textarea>
                  </div>
                  <div class="col-half">
                    <label for="file" class="bold-label">Documento o factura</label>
                    <input required type="file" accept="image/*,.pdf" class="form-control blue-border" data-testid="file" />
                  </div>
                </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="col-half">
                  <button data-testid='btn-send-bill' type="submit" id='btn-send-bill' class="btn btn-primary">Enviar</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
};
