import { separatorAndWrapperSigns } from "../content/separatorAndWrapperSigns";

export default function SeparatorsAndWrappers({ selectedSeparatorAndWrapperLabel, selectedSeparatorAndWrapper, handleSelectSeparatorAndWrapper }) {
    return (
        <div id="separatorsAndWrappers">
            <label htmlFor="separatorsAndWrappers">{selectedSeparatorAndWrapperLabel}</label>
            <select name="separatorsAndWrappers" id="separatorsAndWrappers" value={selectedSeparatorAndWrapper} onChange={handleSelectSeparatorAndWrapper}>
                <option value="">Options</option>
                {separatorAndWrapperSigns.map((sign, index) => {
                    return <option key={index} value={sign}>{sign}</option>
                })}
            </select>
        </div>
    )
}