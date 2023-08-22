import { useState } from "react"
import style from "./style.module.css"

interface PropInvoice{
    invoiceType: string,
    operationDate: string
}

export default function Invoice({invoiceType, operationDate}:PropInvoice) {
    
    const [invoice] = useState(invoiceType);
    const [operation] = useState(operationDate)

    return(
        <div className={style.Invoice}>
            <div>
                <p>{invoice} - {operation}</p>
            </div>
            <div>
                <button>
                    Exportar PDF
                </button>
            </div>
        </div>
    )
}