import { types, getParent, destroy } from "mobx-state-tree";

import TodoItem from './TodoItem';

const Store = types
    .model("Store", {
        list: types.optional(types.array(TodoItem), []),
    })
    .actions(self => ({
        add(title) {
            self.list.push({ title })
        },
        remove(item) {
            destroy(item);
            // console.log(getParent(self))
            // getParent(self, 1).remove(self);

        }
    }));

export default Store;