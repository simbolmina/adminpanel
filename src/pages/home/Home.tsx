import TopBox from '../../components/topBox/TopBox';
import ChartBox from '../../components/chartBox/ChartBox2';
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  bigChartBoxData,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from '../../data';
import './home.scss';
import BarChartBox from '../../components/barChartBox/BarChartBox';
import PieChartBox from '../../components/pieChartBox/PieChartBox';
import BigChartBox from '../../components/bigChartBox/BigChartBox';

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        {' '}
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box7">
        <BigChartBox data={bigChartBoxData} />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
