import { useRecoilValue, RecoilRoot, useRecoilState } from "recoil";
import "./App.css";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalNotificationSelector,
} from "./atoms";
import { useMemo } from "react";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  // const [messagingAtomCount, setMessagingAtomCount] =
  //   useRecoilState(messagingAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);

  // const totalNotificationCount = useMemo(()=>{
  //   return networkNotificationCount + jobsAtomCount + notificationAtomCount + messagingAtomCount;
  // }, [networkNotificationCount, jobsAtomCount, notificationAtomCount, messagingAtomCount])

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>

      <button>
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notification ({notificationAtomCount})</button>
      <button>Me ({totalNotificationCount})</button>
      {/* <button onClick={()=>{
        setMessagingAtomCount(messagingAtomCount + 1)
      }}>Me</button> */}
    </>
  );
}

export default App;
