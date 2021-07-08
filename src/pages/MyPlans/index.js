import { Component } from "react";
import axios from "axios";

import Header from "../../components/Header";

class MyPlans extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
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
        isLoading: false,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    const { plans, isLoading } = this.state;
    return (
      <div>
        <Header title="My Plans" />
        {isLoading && <h2>Loading...</h2>}
        {!!plans.length && !isLoading && <h2>Plans!!!!</h2>}
      </div>
    );
  }
}

export default MyPlans;
