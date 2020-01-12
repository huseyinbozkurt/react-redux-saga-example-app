import React from 'react';
import CheckboxTree from 'react-checkbox-tree';
import { connect } from 'react-redux';
import { setSelection } from '../actions/dataActions';
import {
    Link
  } from "react-router-dom";

class RenderCheckboxTree extends React.Component {
    state = {
        checked: [],
        expanded: [],
    };
    
    selectAll = () => {
        this.setState({
            checked: Array.prototype.concat(...this.props.nodes.map(item => item.children.map(child => child.value).concat(item.value)))
        })
    }
    clearSelection = () => {
        this.setState({
            checked: []
        })
    }
    componentDidMount() {
        this.setState({
            checked: this.props.selection
        })
    }
 
    render() {
        console.log(this.state.checked)
        return (
            <div>
                <button onClick={this.selectAll}>Select All</button>
                <button onClick={this.clearSelection}>Select None</button>
            <CheckboxTree
                nodes={this.props.nodes}
                checked={this.state.checked}
                expanded={this.state.expanded}
                onCheck={checked => this.setState({ checked })}
                onExpand={expanded => this.setState({ expanded })}
            />
            <Link to='/selection' onClick={() => { this.props.setSelection({ data: this.state.checked }) }}>Apply</Link>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log("App State ->", state);
    return {
      data: state.data.test,
      selection: state.data.selection
    }
}
export default connect(mapStateToProps, { setSelection })(RenderCheckboxTree)