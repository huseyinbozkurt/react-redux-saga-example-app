import React from 'react';
import { connect } from 'react-redux';
import Table from "./table";
import {ExportCSV} from './exportFile'

class RenderCheckbox extends React.Component {
    state = {
        checked: [],
    };
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.checked !== nextState.checked) {
            return false;
        }
    }
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
            Cell: props => <input type='checkbox' defaultChecked={false} onChange={() => this.handleChange(props)}/>
          },{
            Header: '',
            accessor: 'code'
          }]
        console.log(this.state.checked)
        return (
            <div>
                <ExportCSV csvData={this.state.checked} fileName={'Mail Processing Center Codes'}>Download</ExportCSV>
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