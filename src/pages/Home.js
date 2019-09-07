import React from "react";

import { Header } from "../components/Header";
import { Presentation } from "../components/Presentation";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Presentation />
      </div>
    );
  }
}

export default Home;
