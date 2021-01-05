import React from "react"

const VideoDetails=({video})=>{
    console.log(video)
    if (video!=null){
        return (
            <div>
                <div className="ui embed">
                    <iframe  title="Video player" width="560" height="315" src={`https://www.youtube.com/embed/${video.id.videoId}`} 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen></iframe>
                    </div>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        )
        }
    return <div>Loading...</div>
    
}

export default VideoDetails