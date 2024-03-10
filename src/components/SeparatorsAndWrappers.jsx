import { SeparatorsAndWrappersSigns } from "../content/separatorsAndWrappersSigns";

export default function SeparatorsAndWrappers({ selectedSeparatorAndWrapperLabel, selectedSeparatorAndWrapper, handleSelectSeparatorAndWrapper }) {
    return (
        <div id="separatorsAndWrappers">
            <label htmlFor="separatorsAndWrappers">{selectedSeparatorAndWrapperLabel}</label>
            <select name="separatorsAndWrappers" id="separatorsAndWrappers" value={selectedSeparatorAndWrapper} onChange={handleSelectSeparatorAndWrapper}>
                <option value="">Options</option>
                {SeparatorsAndWrappersSigns.map((sign, index) => {
                    return <option key={index} value={sign}>{sign}</option>
                })}
            </select>
        </div>
    )
}