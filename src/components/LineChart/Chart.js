import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Chart(props) {
  let count = 0;
  let data;
  if (props.forecast) {
    const temp = props.forecast[0].hour.map((d) => ({
      name: d.time.substring(11, 16),
      temperature: d.temp_c,
      count: count++,
    }));
    data = temp.filter((d) => d.count % 3 === 0);
  }

  return (
    <ResponsiveContainer>
      <AreaChart
        width={400}
        height={200}
        data={data}
        margin={{ top: 10, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" interval={"preserveStartEnd"} />
        <YAxis domain={[0, 80]}></YAxis>
        <Tooltip />
        <Area
          type="monotone"
          dataKey="temperature"
          stroke="#5C9CE5"
          activeDot={{ r: 8 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Chart;
