import {combineReducers} from "redux"
import events from "./events"
import operationLogs from "./operationLogs"

// events.jsとoperationLogs.jsをcombineReducersの要素として設定することでroot reducerが生成されて、全体をexportしている
export default combineReducers({events, operationLogs})