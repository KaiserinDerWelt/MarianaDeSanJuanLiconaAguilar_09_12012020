
export default () => {

  return(`
      <div class="page-div">
        <div class="row">
          <div class="title-container"> 
            <h1>Proyecto Lucky!</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <form class="form-signin" data-testid="form-employee">
                  <h4 class="h3 mb-3 font-weight-normal">Registro y Acceso de Clientes</h4>
                  <label for="inputEmail">Correo electrónico</label>
                  <input type="email" data-testid="employee-email-input" class="form-control" placeholder="proveedor@email.com" required autofocus>
                  <label for="inputPassword">Contraseña</label>
                  <input type="password" data-testid="employee-password-input" class="form-control" placeholder="******" required>
                  <button class="btn btn-lg btn-primary btn-block" data-testid="employee-login-button" style="background-color: #0E5AE5;" type="submit">Registro-Acceso</button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <form class="form-signin" data-testid="form-admin">
                  <h4 class="h3 mb-3 font-weight-normal">Panel de Administración</h4>
                  
                  <label for="inputEmail">Correo electrónico</label>
                  <input type="email" data-testid="admin-email-input" class="form-control" placeholder="miempresa@email.com" required autofocus>
                  <label for="inputPassword">Contraseña</label>
                  <input type="password" data-testid="admin-password-input" class="form-control" placeholder="******" required" >
                  <button  type="submit" class="btn btn-lg btn-primary btn-block" data-testid="admin-login-button" style="background-color: #0E5AE5;">Acceso</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  `)
}
  