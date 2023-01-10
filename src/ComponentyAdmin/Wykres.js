import {useTheme} from "@mui/material";
import {ResponsiveBar} from "@nivo/bar";
import {tokens} from "../scenes/theme";

function Wykres(){
    const theme = useTheme();
    const colors=tokens(theme.palette.mode);
const data = [
    {
      "country": "AD",
      "hot dog": 92,
      "hot dogColor": "hsl(350, 70%, 50%)",
      "burger": 171,
      "burgerColor": "hsl(201, 70%, 50%)",
      "sandwich": 74,
      "sandwichColor": "hsl(135, 70%, 50%)",
      "kebab": 107,
      "kebabColor": "hsl(189, 70%, 50%)",
      "fries": 164,
      "friesColor": "hsl(180, 70%, 50%)",
      "donut": 63,
      "donutColor": "hsl(91, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 36,
      "hot dogColor": "hsl(80, 70%, 50%)",
      "burger": 45,
      "burgerColor": "hsl(9, 70%, 50%)",
      "sandwich": 89,
      "sandwichColor": "hsl(139, 70%, 50%)",
      "kebab": 200,
      "kebabColor": "hsl(341, 70%, 50%)",
      "fries": 50,
      "friesColor": "hsl(169, 70%, 50%)",
      "donut": 131,
      "donutColor": "hsl(246, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 73,
      "hot dogColor": "hsl(35, 70%, 50%)",
      "burger": 8,
      "burgerColor": "hsl(342, 70%, 50%)",
      "sandwich": 110,
      "sandwichColor": "hsl(169, 70%, 50%)",
      "kebab": 49,
      "kebabColor": "hsl(194, 70%, 50%)",
      "fries": 3,
      "friesColor": "hsl(102, 70%, 50%)",
      "donut": 31,
      "donutColor": "hsl(78, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 148,
      "hot dogColor": "hsl(318, 70%, 50%)",
      "burger": 35,
      "burgerColor": "hsl(70, 70%, 50%)",
      "sandwich": 120,
      "sandwichColor": "hsl(244, 70%, 50%)",
      "kebab": 73,
      "kebabColor": "hsl(153, 70%, 50%)",
      "fries": 20,
      "friesColor": "hsl(53, 70%, 50%)",
      "donut": 192,
      "donutColor": "hsl(216, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 185,
      "hot dogColor": "hsl(333, 70%, 50%)",
      "burger": 25,
      "burgerColor": "hsl(287, 70%, 50%)",
      "sandwich": 34,
      "sandwichColor": "hsl(126, 70%, 50%)",
      "kebab": 106,
      "kebabColor": "hsl(231, 70%, 50%)",
      "fries": 129,
      "friesColor": "hsl(172, 70%, 50%)",
      "donut": 54,
      "donutColor": "hsl(246, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 146,
      "hot dogColor": "hsl(37, 70%, 50%)",
      "burger": 8,
      "burgerColor": "hsl(360, 70%, 50%)",
      "sandwich": 24,
      "sandwichColor": "hsl(324, 70%, 50%)",
      "kebab": 199,
      "kebabColor": "hsl(9, 70%, 50%)",
      "fries": 78,
      "friesColor": "hsl(105, 70%, 50%)",
      "donut": 189,
      "donutColor": "hsl(59, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 64,
      "hot dogColor": "hsl(235, 70%, 50%)",
      "burger": 24,
      "burgerColor": "hsl(97, 70%, 50%)",
      "sandwich": 42,
      "sandwichColor": "hsl(358, 70%, 50%)",
      "kebab": 119,
      "kebabColor": "hsl(309, 70%, 50%)",
      "fries": 95,
      "friesColor": "hsl(53, 70%, 50%)",
      "donut": 67,
      "donutColor": "hsl(217, 70%, 50%)"
    }
  ];
    //zrobic UseEffect by pobrac dane z najwiecej wykonanymi zadaniami
    return(
    <ResponsiveBar
    data={data}
    theme={{
        axis: {
            domain:{
                line:{
                    stroke: colors.grey[100]
                }
            },
            legend:{
                text:{
                    fill:colors.grey[100]
                }
            },
            ticks:{
                line:{
                    stroke:colors.grey[100],
                    strokeWidth:1
                },
                text:{
                    fill:colors.grey[100]
                }
                }
            },
            legends:{
                text:{
                    fill:colors.grey[100]
                }
            }
            }
        }

    width={1000}
    height={700}
    keys={[
        'hot dog',
        'burger',
        'sandwich',
        'kebab',
        'fries',
        'donut'
    ]}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]}
    fill={[
        {
            match: {
                id: 'fries'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'sandwich'
            },
            id: 'lines'
        }
    ]}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                1.6
            ]
        ]
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'country',
        legendPosition: 'middle',
        legendOffset: 32
    }}
    axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'food',
        legendPosition: 'middle',
        legendOffset: -40
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                1.6
            ]
        ]
    }}
    legends={[
        {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
       />)
}
export default Wykres;