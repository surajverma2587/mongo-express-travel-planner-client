import { Component } from "react";
import axios from "axios";

import Header from "../../components/Header";

class MyPlans extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plans: [],
    };
  }

  async componentDidMount() {
    try {
      const { data: plans } = await axios.get(
        "http://localhost:4000/api/plans"
      );

      this.setState({
        plans,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    const { plans } = this.state;
    return (
      <div>
        <Header title="My Plans" />
        {!!plans.length && <h2>Plans!!!!</h2>}
      </div>
    );
  }
}

export default MyPlans;
