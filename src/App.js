import "./App.css";
import Login from "./hooks/CustomHooks/UseFormHook/Login";
import CustomHookTwo from "./hooks/CustomHooks/UseLocalStorageHook/CustomHookTwo";
import CustomHookOne from "./hooks/CustomHooks/UseLoggerHook/CustomHookOne";
import ToggleUseState from "./hooks/ToggleUseState";
import UseCallbackHook from "./hooks/UseCallBack/UseCallbackHook";
import UseContextHook from "./hooks/UseContextHook/UseContextHook";
import UseEffectHook from "./hooks/UseEffectHook";
import UseImperativehook from "./hooks/UseImperativeHook/UseImperativehook";
import UseLayoutEffectHook from "./hooks/UseLayoutEffectHook";
import UseMemoHook from "./hooks/UseMemoHook";
import UseReducer from "./hooks/UseReducer";
import UseRefHook from "./hooks/UseRefHook";
import UseStateHook from "./hooks/UseStateHook";
import ApiIntegration from "./integration/axios/ApiIntegration/ApiIntegration";
import UseForwordRef from "./practice/hooks/UseForword/UseForwordRef";
import UnControlledComponents from "./practice/hooks/UseRef/UnControlledComponents";
import UseRef from "./practice/hooks/UseRef/UseRefDomManupulate";

function App() {
  return (
    <div className="App">
      {/* <UseStateHook />
      <UseEffectHook />
      <UseContextHook />
      <UseReducer />
      <UseMemoHook />
      <UseCallbackHook />
      <UseRefHook />
      <UseImperativehook />
      <UseRef />
      <UnControlledComponents />
      <UseLayoutEffectHook />
      <ApiIntegration />
      <CustomHookOne />
      <CustomHookTwo />
      <ToggleUseState />
       */}
      {/* <UseForwordRef /> */}
      <Login />
    </div>
  );
}

export default App;
