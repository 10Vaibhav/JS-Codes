import {atom, selector} from "recoil";
import axios from 'axios';


export const notification = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async () => {
            const res = await axios.get("http://localhost:3000/")
            return res.data
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) =>{
        const allNotifications = get(notification);
        return allNotifications.network + allNotifications.notification + allNotifications.jobs + allNotifications.messaging;
    }
})