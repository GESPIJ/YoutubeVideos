import React from "react"
import SearchBar from "./SearchBar"
import VideoList from "./videoList"
import VideoDetails from "./SelectedVideo"
import youtube from "../apis/youtube"
import axios from "axios"

class App extends React.Component{
    state={
        videos:[],
        selectedVideo:null
    }

    onVideoSelect=(video)=>{
        this.setState({
            selectedVideo:video
        })
    }

    componentDidMount(){
        this.onSubmit('cats');
    }
    onSubmit= async (term) =>{
        try{
        // const response = await axios.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBmg4_1QQRBWXpmR_osG5rKbZR0KqYMkeo", {
        //   params: {
        //     type: "video",
        //     part: "snippet",
        //     q: term
        //   }
        // })
        // console.log(response)
            const response=await youtube.get('',{
                params:{
                    q:term
                }
            });
            console.log(response)
            this.setState({
                videos:response.data.items,
                selectedVideo:response.data.items[0]
            })
        }catch(e){
            console.log(e.toString())
        }
       
        //console.log(`Printing from console ${term}`)
    }

    render(){
        console.log(`El selected video es ${this.state.selectedVideo}`)
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSubmit}/>
                <br/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                        <VideoDetails video={this.state.selectedVideo}/ >
                        </div>
                        <div className="five wide column">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>

                    </div>
                </div>
                </div>
                
                
                
            

        )
    }
}

export default App