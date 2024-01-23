import { Tasks } from "./index";

export default { component: Tasks };

export const Default = {
  args: {
    onTaskComplete: () => {
      console.log("task completed");
    },

    onTaskNameChange: () => {
      console.log("taskname changed");
    },
  },
};
