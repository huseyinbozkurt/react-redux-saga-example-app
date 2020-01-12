import React from 'react';
import CheckboxTree from 'react-checkbox-tree';
import { connect } from 'react-redux';
import { setSelection } from '../actions/dataActions';
import {
    Link
  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faChevronDown, faChevronRight, faCheck, faSquare, faPlusSquare, faMinusSquare, faFolder, faFolderOpen,
    faFile } from "@fortawesome/free-solid-svg-icons";
  
  library.add(faCheckSquare);
  library.add(faChevronRight);
  library.add(faChevronDown);
  library.add(faSquare);
  library.add(faPlusSquare);
  library.add(faMinusSquare);
  library.add(faFolder);
  library.add(faFolderOpen);
  library.add(faFile);
  library.add(faCheck);

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
            <div className='container'>
                <button className='btn-select-all' onClick={this.selectAll}>Select All</button>
                <button className='btn-select-none' onClick={this.clearSelection}>Select None</button>
            <CheckboxTree
                nodes={this.props.nodes}
                checked={this.state.checked}
                expanded={this.state.expanded}
                onCheck={checked => this.setState({ checked })}
                onExpand={expanded => this.setState({ expanded })}
                icons={{
                    check: <FontAwesomeIcon className="rct-icon rct-icon-check" icon="check-square" />,
                    uncheck: <FontAwesomeIcon className="rct-icon rct-icon-uncheck" icon="square" />,
                    halfCheck: <FontAwesomeIcon className="rct-icon rct-icon-uncheck" icon="check-square" />,
                    expandClose: <FontAwesomeIcon className="rct-icon rct-icon-expand-close" icon="chevron-right" />,
                    expandOpen: <FontAwesomeIcon className="rct-icon rct-icon-expand-open" icon="chevron-down" />,
                    expandAll: <FontAwesomeIcon className="rct-icon rct-icon-expand-all" icon="plus-square" />,
                }}
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