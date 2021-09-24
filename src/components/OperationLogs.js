import React, {useContext} from "react"
import AppContext from "../contexts/AppContext"
import OperationLog from "./OperationLog"

const OperationLogs=()=>{
    // useContextを使ってAppContextを引数として渡してあげることで、状態（state）を参照することができる
    // stateにはreducerで生成したeventsとoperationLogsが入っており、今回はoperationLogsを使用
    const {state}=useContext(AppContext)
    return(
        <>
        <h4>操作ログ一覧</h4>
        <table className="table table-hover">
        <thead>
            <tr>
            <th>内容</th>
                <th>日時</th>
            </tr>
        </thead>
        <tbody>
            {
                state.operationLogs.map((operationLog, index)=>{
                    return <OperationLog key={index} operationLog={operationLog} />
                })
            }
        </tbody>
        </table>
        </>
    )
}

export default OperationLogs