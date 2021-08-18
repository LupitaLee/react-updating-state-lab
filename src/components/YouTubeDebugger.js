// Code YouTubeDebugger Component Here


import React from 'react'

class YouTubeDebugger extends React.Component{
    constructor(){
        super()
        this.state= {
            error:[],
            user:null,
            settings: {
                bitrate: 8,
                video: {
                  resolution: '1080p'
                }

        }
    }
}




    handleClick =()=>{
        
        this.setState({
            settings:{
            ...this.state.settings,
                bibrate: 12
            }
           
        })  
    }

    handleResolution =()=>{
        this.setState({
            settings:{
                ...this.state.settings,
                video:{
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }



    render() {
        // console.log(this.props)
        return(
            <div>

            <button className='bitrate' onClick={this.handleClick}> change bibrate</button>
            <button className= 'resolution' onclick={this.handleResolution}>resolution</button>
            </div>
        )
    };



}
export default YouTubeDebugger