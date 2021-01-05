import React from "react"

class SearchBar extends React.Component{

    constructor(props){
        super(props)
        this.state={
            termino:''
        }
    }
    writingTerm=(event)=>{
        this.setState({
            termino:event.target.value
        })
    }

    submitForm=(event)=>{
        event.preventDefault()
        console.log(this.state.termino)
    }

    render(){
        return (
                 <div className="ui-segment">
                <form className="ui form" onSubmit={(e)=>{
                e.preventDefault()
                this.props.onSubmit(this.state.termino)}}>
                <input className="field" type="text" onChange={this.writingTerm} ></input>
            </form>
            </div>
            
           
            
        )
    }
}

export default SearchBar