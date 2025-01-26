import {atom, selector} from "recoil";

export const networkAtom = atom({
    default: 102,
    key: "networkAtom"
})

export const jobsAtom = atom({
    default: 0,
    key: "jobsAtom"
})

export const notificationAtom = atom({
    default: 12,
    key: "notificationAtom"
})

export const messagingAtom = atom({
    default: 0,
    key: "messagingAtom"
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get : ({get}) => {
        const networkCount = get(networkAtom);
        const jobsCount = get(jobsAtom);
        const notificationCount = get(notificationAtom);
        const messagingCount = get(messagingAtom);

        return notificationCount+ networkCount + jobsCount + messagingCount
    }
})

// get is a function which gives the access of get object.
