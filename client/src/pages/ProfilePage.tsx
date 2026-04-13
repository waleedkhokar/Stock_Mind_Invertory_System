import { EditFilled, EditOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import userProPic from "../assets/User.png";
import Loader from "../components/Loader";
import { useGetSelfProfileQuery } from "../redux/features/authApi";
import { profileKeys } from "../constant/profile";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { data, isLoading } = useGetSelfProfileQuery(undefined);

  if (isLoading) return <Loader />;

  return (
    <div
      style={{
        minHeight: "calc(100vh - 10rem)",
        padding: "2rem 1rem",
        background: "#f7f9fc",
      }}
    >
      {/* Profile Avatar */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            overflow: "hidden",
            padding: "0.5rem",
            border: "3px solid #1890ff",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            transition: "transform 0.3s",
          }}
        >
          <img
            src={data?.data?.avatar || userProPic}
            alt="user"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "2rem",
          flexWrap: "wrap",
        }}
      >
        <Link to="/edit-profile">
          <Button
            type="primary"
            style={{
              background: "linear-gradient(135deg, #6e8efb, #a777e3)",
              border: "none",
              fontWeight: 600,
              padding: "0.5rem 1.5rem",
              minWidth: "150px",
            }}
          >
            <EditOutlined /> Edit Profile
          </Button>
        </Link>
        <Link to="/change-password">
          <Button
            type="primary"
            style={{
              background: "linear-gradient(135deg, #ff758c, #ff7eb3)",
              border: "none",
              fontWeight: 600,
              padding: "0.5rem 1.5rem",
              minWidth: "150px",
            }}
          >
            <EditFilled /> Change Password
          </Button>
        </Link>
      </div>

      {/* Profile Information */}
      <Row justify="center">
        <Col xs={24} sm={22} md={18} lg={16}>
          <div
            style={{
              margin: "0 auto",
              borderRadius: "1rem",
              padding: "2rem 1.5rem",
              background: "#ffffff",
              boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
            }}
          >
            {profileKeys.map((key) => (
              <ProfileInfoItems
                key={key.keyName}
                keyName={key.keyName}
                value={data?.data[key.keyName]}
              />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;

// Profile Info Item Component
const ProfileInfoItems = ({ keyName, value }: { keyName: string; value: string }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1.5rem",
        paddingBottom: "0.5rem",
        borderBottom: "1px dashed #ddd",
        transition: "all 0.3s",
      }}
    >
      <h2
        style={{
          flex: 1,
          fontWeight: 700,
          textTransform: "capitalize",
          color: "#333",
          fontSize: "1rem",
        }}
      >
        {keyName}
      </h2>
      <h3
        style={{
          flex: 2,
          fontWeight: 500,
          color: "#555",
          textAlign: "right",
          fontSize: "0.95rem",
        }}
      >
        {value}
      </h3>
    </div>
  );
};
