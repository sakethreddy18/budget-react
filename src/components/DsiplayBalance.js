import React from 'react'
import { Statistic } from 'semantic-ui-react'

function DsiplayBalance(props) {
    const {color, label, value } = props
    return (
        <Statistic size="small" color={color}>
            <Statistic.Label style={{ textAlign: "left" }}>
                {label}:
            </Statistic.Label>
            <Statistic.Value>{value}</Statistic.Value>
        </Statistic>
    )
}

export default DsiplayBalance