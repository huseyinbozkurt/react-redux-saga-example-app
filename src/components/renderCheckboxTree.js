import React from 'react';
import CheckboxTree from 'react-checkbox-tree';



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
            </div>
        );
    }
}

export default RenderCheckboxTree