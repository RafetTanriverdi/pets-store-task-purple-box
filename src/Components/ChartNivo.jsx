import React from 'react'
import { ResponsiveChord } from '@nivo/chord'
import data from "../Data/ChartNivo.json"


function ChartNivo() {
  return (
   <>
   <ResponsiveChord
        data={data}
        keys={[ 'Dog', 'Cat', 'Fish', 'Bird', 'Hamster' ]}
        margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
        valueFormat=".0f"
        padAngle={0.02}
        innerRadiusRatio={0.93}
        inactiveArcOpacity={0.25}
        arcBorderWidth={0}
        arcBorderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0.6'
                ]
            ]
        }}
        ribbonOpacity={0.7}
        activeRibbonOpacity={0.75}
        inactiveRibbonOpacity={0.25}
        ribbonBorderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.6
                ]
            ]
        }}
        labelRotation={-90}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1
                ]
            ]
        }}
        colors={{ scheme: 'nivo' }}
        motionConfig="stiff"
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 70,
                itemWidth: 80,
                itemHeight: 14,
                itemsSpacing: -30,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
   </>
  )
}

export default ChartNivo