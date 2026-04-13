import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button, Layout, Menu, Tooltip } from 'antd';
import { LogoutOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { sidebarItems } from '../../constant/sidebarItems';
import { useAppDispatch } from '../../redux/hooks';
import { logoutUser } from '../../redux/services/authSlice';

const { Content, Sider } = Layout;

const Sidebar = () => {
  const [showLogoutBtn, setShowLogoutBtn] = useState(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  // ✅ Your WhatsApp number (no + symbol)
  const whatsappNumber = '923191402404';

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        breakpoint='lg'
        collapsedWidth='0'
        onCollapse={(collapsed, type) => {
          if (type === 'responsive') {
            setShowLogoutBtn(!collapsed);
          }
          if (type === 'clickTrigger') {
            setShowLogoutBtn(!collapsed);
          }
        }}
        width='220px'
        style={{
          backgroundColor: '#164863',
          position: 'relative',
        }}
      >
         <div
          style={{
            color: '#fff',
            padding: '1.3rem 0',
            textAlign: 'center',
            fontSize: '1.6rem',
            fontWeight: 700,
            letterSpacing: '1px',
            borderBottom: '1px solid rgba(255,255,255,0.2)',
            textShadow: '0px 0px 10px rgba(0,255,255,0.4)',
          }}
        >
          ⚙️ Stock Mind
        </div>

        <Menu
          theme='dark'
          mode='inline'
          style={{ backgroundColor: '#164863', fontWeight: '700' }}
          defaultSelectedKeys={['Dashboard']}
          items={sidebarItems}
        />

        {showLogoutBtn && (
          <div
            style={{
              margin: 'auto',
              position: 'absolute',
              bottom: 0,
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* ✅ WhatsApp Button (only new addition) */}
            <Tooltip title="Need an attractive website? Contact me." placement="left">
              <Button
                shape='circle'
                icon={<WhatsAppOutlined />}
                style={{
                  backgroundColor: '#25D366',
                  color: '#fff',
                  border: 'none',
                  fontSize: '22px',
                  width: '45px',
                  height: '45px',
                  boxShadow: '0px 2px 8px rgba(0,0,0,0.2)',
                  transition: 'transform 0.2s ease-in-out',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onClick={() =>
                  window.open(
                    `https://wa.me/${whatsappNumber}?text=Hello!%20I%20visited%20your%20Inventory%20System%20website.`,
                    '_blank'
                  )
                }
              />
            </Tooltip>

            {/* 🚀 Logout Button (unchanged) */}
            <Button
              type='primary'
              style={{
                width: '100%',
                backgroundColor: 'cyan',
                color: '#000',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
              onClick={handleClick}
            >
              <LogoutOutlined />
              Logout
            </Button>
          </div>
        )}
      </Sider>

      <Layout>
        <Content style={{ padding: '2rem', background: '#BBE1FA' }}>
          <div
            style={{
              padding: '1rem',
              maxHeight: 'calc(100vh - 4rem)',
              minHeight: 'calc(100vh - 4rem)',
              background: '#fff',
              borderRadius: '1rem',
              overflow: 'auto',
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
