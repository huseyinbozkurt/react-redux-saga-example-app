import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDataRequest } from './actions/dataActions';
import Rendercheckboxtree from './components/renderCheckboxTree' 
import './App.css'
class App extends Component {    
  componentDidMount() {
    this.props.getDataRequest();
  }

  mapData = () => {
      const filteredData = this.props.data.filter(item => item.mailProcessingCenters.length > 0);
      const mappedData = filteredData.map(item => {
        return {
          value: item.code,
          label: `${item.shortCode ? item.shortCode : item.code} ${!!item.shortName ? item.shortName : ''}`,
          children: item.mailProcessingCenters.map((mailCenter) => {
            return {
              value: mailCenter.code,
              label: `${mailCenter.code} ${!!mailCenter.name ? mailCenter.name : ''}`
            }
          })
        }
      })
      return mappedData;
  }

  render() {
    return(
      <div>
         { Array.isArray(this.props.data) ?
         <Rendercheckboxtree nodes={this.mapData()}></Rendercheckboxtree> : null }
      </div>
    )
  }
}

// redux providing state takeover
const mapStateToProps = (state) => {
    console.log("App State ->", state);
    return {
      data: state.data.test,
      selection: state.data.selection
    }
}
export default connect(mapStateToProps, { getDataRequest })(App)