class View {
    constructor(element) {
      this._element = element;
    }
  
    _template(model) {
      return `
      <h1>Personal Info</h1>
        <table>
          <thead>
            <tr>
              <th>Full name</th>
              <th>Nickname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Birthday</th>
              <th>Age</th>
            </tr>
          </thead>
  
          <tbody>
          ${
            `
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            `
          }
          </tbody>
          
          <tfoot>
  
          </tfoot>
        </table>
  
        <h1>Social</h1>
        <table>
          <thead>
            <tr>
              <th>LinkedIn</th>
              <th>Github</th>
            </tr>
          </thead>
          <tbody>
          <tr>
                <td></td>
                <td></td>
              </tr>
          </tbody>
          <tfoot>
  
          </tfoot>
        </table>
  
        <h1>Certificates</h1>
        <table>
          <thead>
            <tr>
              <th>Certificates</th>
              <th>Team name</th>
              <th>Institution</th>
              <th>Graduation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
  
          <tfoot>
  
          </tfoot>
        </table>
      `
    }
  
    update(model) {
      this._element.innerHTML = this._template(model);
    }
  }