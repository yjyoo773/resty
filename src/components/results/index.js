import React, { useContext } from 'react'
import ReactJson from 'react-json-view'
import { SettingContext } from "../../context/settings.js";

import './results.scss'

const Results =()=>{
    const context = useContext(SettingContext)
    return(
        <section className='results'>
            <ReactJson src = {context.result}/>
        </section>
    )
}



// class Results extends React.Component{
    
//     render(){
//         return (
//             <section className='results'>
//                 <ReactJson src={this.props.results}/>
//             </section>
//         )
//     }
// }

export default Results