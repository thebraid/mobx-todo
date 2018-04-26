import { types } from "mobx-state-tree";

const TodoItem = types
    .model("TodoItem", {
        id: types.optional(types.number, () => Math.random()),
        title: types.string,
        done: false
    })
    .actions(self => ({
        toggle() {
            self.done = !self.done;
        }
    }));

export default TodoItem;