import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'


class App extends React.Component {
  state = {videos : [], selectedVideo : null }
  componentDidMount(){
    this.onSearchSubmit("BMW")
  }
  onSearchSubmit = async(props) =>{
    const getData = await youtube.get("/search",{params:{q: props }})
    // console.log(getData.data.items[0])
    this.setState({
      videos : getData.data.items,
      selectedVideo : getData.data.items[0]
    });
  }
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }
  render(){
    return(
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>  
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} list={this.state.videos}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App