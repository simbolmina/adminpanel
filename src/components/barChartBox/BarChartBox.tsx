import {
  BarChart,
  Bar,
  //   Cell,
  //   XAxis,
  //   YAxis,
  //   CartesianGrid,
  //   Tooltip,
  //   Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import './barChartBox.scss';

type Props = {
  color: string;
  title: string;
  dataKey: string;
  chartData: object[];
};

const BarChartBox = ({ title, color, dataKey, chartData }: Props) => {
  return (
    <div className="barChartBox">
      <h1>{title}</h1>

      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height={150}>
            <BarChart width={150} height={40} data={chartData}>
              <Tooltip
                contentStyle={{ background: '#2a3447', borderRadius: '5px' }}
                labelStyle={{ display: 'none' }}
                cursor={{ fill: 'none' }}
              />
              <Bar dataKey={dataKey} fill={color} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BarChartBox;
