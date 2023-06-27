import Tabs from "./tabs";
import Resources from "../components/resources";

export const ResourcesView = () => {
  return (
        <Tabs
          tabs={[
            {
              title: "Mainnet",
              content: <Resources environment="mainnet" />,
            },
            {
              title: "Testnet",
              content: <Resources environment="testnet" />,
            },
          ]}
        />
  );
};