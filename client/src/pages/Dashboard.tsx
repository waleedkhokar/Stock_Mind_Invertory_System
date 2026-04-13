import { Col, Row, Card, Typography, Divider } from 'antd';
import MonthlyChart from '../components/Charts/MonthlyChart';
import Loader from '../components/Loader';
import { useCountProductsQuery } from '../redux/features/management/productApi';
import { useYearlySaleQuery } from '../redux/features/management/saleApi';
import DailyChart from '../components/Charts/DailyChart';

const { Title, Text } = Typography;

const Dashboard = () => {
  const { data: products, isLoading } = useCountProductsQuery(undefined);
  const { data: yearlyData, isLoading: isLoading1 } = useYearlySaleQuery(undefined);

  if (isLoading && isLoading1) return <Loader />;

  const totalItemsSold = yearlyData?.data?.reduce(
    (acc: number, cur: { totalQuantity: number }) => acc + cur.totalQuantity,
    0
  );

  const totalRevenue = yearlyData?.data?.reduce(
    (acc: number, cur: { totalRevenue: number }) => acc + cur.totalRevenue,
    0
  );

  return (
    <div style={{ padding: '2rem', background: '#f9fafc', minHeight: '100vh' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem', color: '#164863' }}>
        📊 Business Dashboard
      </Title>

      {/* ======== Summary Cards ======== */}
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={8}>
          <Card
            bordered={false}
            style={{
              borderRadius: '12px',
              boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
              background: '#ffffff',
              textAlign: 'center',
            }}
          >
            <Title level={4}>Total Stock</Title>
            <Title level={2} style={{ color: '#2b7a78' }}>
              {products?.data?.totalQuantity || 0}
            </Title>
            <Text type="secondary">Available Items in Inventory</Text>
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card
            bordered={false}
            style={{
              borderRadius: '12px',
              boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
              background: '#ffffff',
              textAlign: 'center',
            }}
          >
            <Title level={4}>Total Items Sold</Title>
            <Title level={2} style={{ color: '#1f6feb' }}>
              {totalItemsSold || 0}
            </Title>
            <Text type="secondary">Cumulative Sales This Year</Text>
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card
            bordered={false}
            style={{
              borderRadius: '12px',
              boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
              background: '#ffffff',
              textAlign: 'center',
            }}
          >
            <Title level={4}>Total Revenue</Title>
            <Title level={2} style={{ color: '#008000' }}>
              PKR {totalRevenue?.toLocaleString() || 0}
            </Title>
            <Text type="secondary">Overall Generated Revenue</Text>
          </Card>
        </Col>
      </Row>

      {/* ======== Charts ======== */}
      <Divider />

      <Card
        style={{
          borderRadius: '12px',
          boxShadow: '0 4px 18px rgba(0,0,0,0.07)',
          marginTop: '2rem',
        }}
      >
        <Title level={3} style={{ textAlign: 'center', marginBottom: '1rem', color: '#164863' }}>
          📅 Daily Sales & Revenue
        </Title>
        <DailyChart />
      </Card>

      <Card
        style={{
          borderRadius: '12px',
          boxShadow: '0 4px 18px rgba(0,0,0,0.07)',
          marginTop: '2rem',
          marginBottom: '2rem',
        }}
      >
        <Title level={3} style={{ textAlign: 'center', marginBottom: '1rem', color: '#164863' }}>
          📆 Monthly Revenue Overview
        </Title>
        <MonthlyChart />
      </Card>
    </div>
  );
};

export default Dashboard;
