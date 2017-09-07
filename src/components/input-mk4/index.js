import connect from "./utils";
import makeModel from "./model";
import makeView from "./view";

export default props => connect(props)(makeModel)(makeView);
