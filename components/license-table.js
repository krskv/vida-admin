import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/license-table.sass"
import Alert from './alert'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMinusCircle,faPlusCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faMinusCircle)
library.add(faPlusCircle)

class LicenseTable extends React.Component {

  constructor(props) {
    super(props);

    this.addNewLicense = this.addNewLicense.bind(this);
    this.getTableData = this.getTableData.bind(this);
    

    this.state = {
      alertShown: false,
      tableData: [
        {
          id: "123", 
          description: "Some custom description",
          ip: "127.0.0.1"
        },
        {
          id: "134", 
          description: "Some different description",
          ip: "127.0.0.1"
        },
        {
          id: "176", 
          description: "Some brand new description",
          ip: "127.0.0.1"
        }
      ]
    };
  }

  addNewLicense(){    
    const id = document.querySelector('input[name="id"]');
    const desc = document.querySelector('input[name="description"]');
    const ip = document.querySelector('input[name="ip"]');
    
    if( !id.value || !desc.value || !ip.value  ){
      this.setState({ alertShown: true });
      return ;
    }
      
    this.setState({ alertShown: false });

    this.state.tableData.push({id:id.value,description: desc.value,ip: ip.value});
    this.setState(state => ({
      tableData: state.tableData
    }));

    id.value = desc.value = ip.value = "";
  }

  getTableData(){
    // throw new Error('I crashed!');
    return this.state.tableData.map((el) =>
      <tr key={el.id+Math.floor(Math.random()*100)}><td>{el.id}</td><td>{el.description}</td><td>{el.ip}</td><td><button className="license_table_remove remove"><FontAwesomeIcon icon="minus-circle"></FontAwesomeIcon></button></td></tr>
    );
  }

  render() {
    return (
      <div className="license_table_wrapper">
        <table className="license_table">
          <thead>
            <tr>
              <th>License ID</th>
              <th>Description</th> 
              <th>IPs</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.getTableData()}
            <tr className="license_table_form">
              <td><input name="id" type="text" placeholder="ID"></input></td>
              <td><input name="description" type="text" placeholder="Description"></input></td> 
              <td><input name="ip" type="text" placeholder="IPs"></input></td>
              <td><button onClick={this.addNewLicense} className="licence_table_add add"><FontAwesomeIcon icon="plus-circle"></FontAwesomeIcon></button></td>
            </tr>
          </tbody>
        </table>
        { this.state.alertShown && <Alert color="red" title="Can't create license" text="One or more fields are empty"/> }
      </div>
    );
  }

}

export default LicenseTable