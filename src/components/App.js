import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onFormSearch = async (term) => {
    const res = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    console.log(res.data.results);

    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onFormSearch} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
