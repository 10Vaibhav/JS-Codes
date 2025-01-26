import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: selectorFamily({
        key: "todoSelectorFamily",
        get: (id) => async ({get}) => {
            await new Promise (r=> setTimeout(r, 5000));
            // throw new Error ('Backend Call Failed');
            const res = await axios.get(`http://localhost:3000/?id=${id}`);
            return res.data.todo;
        }
    })
});