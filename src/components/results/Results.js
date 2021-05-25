import React from 'react'
import './results.scss'

class Results extends React.Component{
    
    render(){
        let body = this.props.results[1]
        let header = this.props.results[0]
        console.log(this.props.results)
        return (
            <>
                <pre>{JSON.stringify(header,null,2)} {"\n"}
                {JSON.stringify(body,null,2)}</pre>
            </>
        )
    }
}

export default Results