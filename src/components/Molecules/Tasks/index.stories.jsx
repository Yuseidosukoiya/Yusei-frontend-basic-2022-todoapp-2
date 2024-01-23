import { Tasks } from "./index";

export default { component: Tasks };

export const Default = {
  args: {
    taskName: "taskname",

    onTaskComplete: () => {
      console.log("task completed");
    },

    onTaskNameChange: () => {
      console.log("taskname changed");
    },
  },
};
