import connect from "@linasmatkasse/planck-state";
import makeModel from "./model";
import makeView from "./view";

export default props => connect(props)(makeModel(props))(makeView);
