import React from 'react';
import { connect } from 'react-redux';
import Table from "./table";
import {ExportCSV} from './exportFile'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import {
    Link
  } from "react-router-dom";

library.add(faLongArrowAltLeft);

class RenderCheckbox extends React.Component {
    state = {
        checked: [],
    };
    handleChange = (change) => {
        const {checked} = this.state;
        console.log(checked)
        console.log(change)
        if( !!checked.find(item => item === change.row.values.code) ){
            this.setState({
                checked: checked.filter(item => item !== change.row.values.code)
            })
        }
        else {
            this.setState({
                checked: [...checked, change.row.values.code]
            })
        }
    }
 
    render() {
        const columns = [{
            Header: '',
            accessor: 'checked',
            Cell: props => <input type='checkbox' className="visible-checkbox" defaultChecked={false} checked={this.state.checked.includes(props.row.values.code)} onChange={() => this.handleChange(props)}/>
          },{
            Header: '',
            accessor: 'code'
          }]
        return (
            <div>
               <Link to='/'>Back</Link>
                <ExportCSV csvData={['code'].concat(this.state.checked)} fileName={'Mail Processing Center Codes'}>Download</ExportCSV>
            <Table
                data={this.props.data}
                columns={columns}
            />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log("App State ->", state);
    return {
      data: state.data.selection.map(item => {
          return {
              code: item,
          }
      })
    }
}
export default connect(mapStateToProps, {})(RenderCheckbox)