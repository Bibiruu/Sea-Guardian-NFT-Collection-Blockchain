import React from 'react'
import { ProgressBarOuter, ProgressBarInner } from "../styles/NFTProgressBar.styles";

export const NFTProgressBar = ({ percent }) => {
    return (
        <ProgressBarOuter>
            <ProgressBarInner style={{ width: `${percent}%` }} />
        </ProgressBarOuter>
    )
}
