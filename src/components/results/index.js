import React from 'react'
import ReactJson from 'react-json-view'
import './results.scss'

class Results extends React.Component{
    
    render(){
        return (
            <section className='results'>
                <ReactJson src={this.props.results}/>
            </section>
        )
    }
}

export default Results