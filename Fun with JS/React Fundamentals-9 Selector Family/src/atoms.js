import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: selectorFamily({
        key: "todoSelectorFamily",
        get: (id) => async ({get}) => {
            const res = await axios.get(`http://localhost:3000/?id=${id}`);
            return res.data.todo;
        }
    })
});