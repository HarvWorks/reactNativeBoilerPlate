import { createStackNavigator } from "react-navigation";

/* Screens Stack */
import CheckoutScreen from "../../containers/Checkout/Checkout"

const RootStackNavigator = createStackNavigator(
  {
    Checkout: CheckoutScreen,
  },
  {
    initialRouteName: "Checkout",
    headerMode: "none"
  }
);

export default RootStackNavigator;
