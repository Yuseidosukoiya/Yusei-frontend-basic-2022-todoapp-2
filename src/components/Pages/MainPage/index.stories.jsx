import { MainPage } from "./index";
import { AlertHandlerProvider } from "../../../contexts/alert_handler";
import { AlertManager } from "../../Organisms/AlertManager";

export default { component: MainPage };

export const Default = {
  decorators: [
    (Story) => (
      <div>
        <AlertHandlerProvider>
          <AlertManager />
          <Story />
        </AlertHandlerProvider>
      </div>
    ),
  ],
};
