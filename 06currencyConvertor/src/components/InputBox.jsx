import { useId } from "react"

function InputBox(
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency = "usd",
        amountDisable = false,
        currencyDisable = false,
        className = ""
    }
) {

    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    type="number"
                    name=""
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount} 
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
                {/* Above line is for checking that whether onAmountChanage empty or not */}
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select name="" id="" 
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}>
                    {
                        currencyOptions.map((value) => (
                        <option key={value} value={value}>
                            {value}
                        </option>))
                        // Remember the key in loops because it increase the performance of rendering 
                        // When react generate same component then performance issue arises
                    }
                </select>
            </div>

        </div >

    )
}

export default InputBox;