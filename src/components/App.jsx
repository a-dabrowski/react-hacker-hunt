import React, { Component } from 'react';
import './App.css';
import Post from './Post';
import Newsletter from './Newsletter';
import Topic from './Topic';

class App extends Component {
  render() {
    return (
      <div>
        <Post title="Notion 2.0 on Android" description="Notion has finally come to Android, does Todoist have a reason to fear?" timestamp={10} author="Tommy Lee Jones" tags="hello" />
        <Newsletter />
        <Topic name="Dev" emoji="😀" />
      </div>
    );
  }
}
  export default App;