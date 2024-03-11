import { separatorAndWrapperSigns } from "../assets/content/separatorAndWrapperSigns";

export default function SeparatorsAndWrappers({ selectedSeparatorAndWrapperLabel, selectedSeparatorAndWrapper, handleSelectSeparatorAndWrapper }) {
    return (
        <div className="separators-and-wrappers-select-and-label-wrapper">
            <label htmlFor="separators-and-wrappers">{selectedSeparatorAndWrapperLabel}</label>
            <select name="separators-and-wrappers" id="separators-and-wrappers" value={selectedSeparatorAndWrapper} onChange={handleSelectSeparatorAndWrapper}>
                <option value="">Options</option>
                {separatorAndWrapperSigns.map((sign, index) => {
                    return <option key={index} value={sign}>{sign}</option>
                })}
            </select>
        </div>
    )
}