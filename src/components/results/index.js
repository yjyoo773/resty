import React from 'react'
import ReactJson from 'react-json-view'
import './results.scss'

class Results extends React.Component{
    
    render(){
        return (
            <div className='results'>
                <ReactJson src={this.props.results}/>
            </div>
        )
    }
}

export default Results