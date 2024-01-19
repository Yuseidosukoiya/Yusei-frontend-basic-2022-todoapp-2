import { Input } from "./index";

export default { component: Input };

export const Default = {
  onEditComplete: (value) => {
    console.log("Input value:", value);
  },
};
