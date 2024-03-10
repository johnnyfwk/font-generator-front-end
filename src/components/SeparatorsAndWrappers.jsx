import { SeparatorsAndWrappersSigns } from "../content/SeparatorsAndWrappersSigns";

export default function SeparatorsAndWrappers({ selectedSeparatorAndWrapper, handleSelectSeparatorAndWrapper }) {
    return (
        <div id="separatorsAndWrappers">
            <label htmlFor="separatorsAndWrappers"></label>
            <select name="separatorsAndWrappers" id="separatorsAndWrappers" value={selectedSeparatorAndWrapper} onChange={handleSelectSeparatorAndWrapper}>
                <option value="" disabled>Select one</option>
                {SeparatorsAndWrappersSigns.map((sign, index) => {
                    return <option key={index} value={sign}>{sign}</option>
                })}
            </select>
        </div>
    )
}