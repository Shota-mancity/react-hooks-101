import {ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS} from "../actions"

const operationLogs=(state=[], action)=>{
    // reducerなのでstateがまるっと渡ってくる（初期化は空配列）、actionを受け取ることができる
    switch(action.type){   //引数でもらうアクションのタイプを指定
        case ADD_OPERATION_LOG:
        const operationLog={
            description: action.description,
        operatedAt: action.operatedAt
        }
        return [operationLog, ...state]
        case DELETE_ALL_OPERATION_LOGS:
        return []
        default:
        return state
    }
}

export default operationLogs