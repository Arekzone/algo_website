import {useTheme} from "@mui/material";
import {ResponsiveBar} from "@nivo/bar";
import {tokens} from "../scenes/theme";
import {useState,useEffect} from "react";
import api from "../api/posts";

function Wykres(){
    const theme = useTheme();
    const colors=tokens(theme.palette.mode);
    const [datajson,setData]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await api.get("/zadania/mostpopular", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            const data2 = response.data;
            const jsonData = JSON.stringify(data2);
            const parseData = JSON.parse(jsonData);
            setData(parseData);


        } catch (err) {
            console.error(err);

        }
    };
    fetchData();

}, []);
const hexChars = "23456789ABD";
const getRandomColor = () =>
  `#${Array.from({ length: 6 })
    .map(() => hexChars[Math.floor(Math.random() * 11)])
    .join("")}`;
    
    return(
    <ResponsiveBar
    data = {datajson}
    
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
        'wynik_count'
    ]}
    indexBy="zadanie_id"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={getRandomColor}
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
   
    axisTop={null}
    axisRight={null}
    axisBottom={{
        tickSize: 4,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'zadanie_id',
        legendPosition: 'middle',
        legendOffset: 32
    }}
    axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'liczba poprawnych wyników',
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