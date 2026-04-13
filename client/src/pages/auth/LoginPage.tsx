import { SpinnerIcon, WhatsappLogo } from '@phosphor-icons/react';
import { Button, Flex } from 'antd';
import { FieldValues, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toastMessage from '../../lib/toastMessage';
import { useLoginMutation } from '../../redux/features/authApi';
import { useAppDispatch } from '../../redux/hooks';
import { loginUser } from '../../redux/services/authSlice';
import decodeToken from '../../utils/decodeToken';

const LoginPage = () => {
  const [userLogin, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await userLogin(data).unwrap();
      if (res.statusCode === 200) {
        const user = decodeToken(res.data.token);
        dispatch(loginUser({ token: res.data.token, user }));
        navigate('/');
        toastMessage({ icon: 'success', text: 'Successfully Logged In!' });
      }
    } catch (error: any) {
      toastMessage({ icon: 'error', text: error.data.message });
    }
  };

  return (
    <Flex
      justify="center"
      align="center"
      style={{
        height: '100vh',
        flexDirection: 'column',
        background: 'linear-gradient(135deg, #0f172a 0%, #164863 100%)',
        padding: '1rem',
      }}
    >
      {/* 🏷️ Header Title */}
      <div
        style={{
          color: '#fff',
          textAlign: 'center',
          fontSize: '1.8rem',
          fontWeight: 800,
          letterSpacing: '1px',
          marginBottom: '1.5rem',
          textShadow: '0px 0px 12px rgba(0,255,255,0.5)',
          borderBottom: '2px solid rgba(255,255,255,0.2)',
          paddingBottom: '0.8rem',
          whiteSpace: 'nowrap',
        }}
      >
        ⚙️ Waleed Khokhar — <span style={{ color: '#00E0FF' }}>StockMind Inventory Manager</span>
      </div>

      {/* 🧩 Login Box */}
      <Flex
        vertical
        style={{
          width: '380px',
          padding: '3rem 2.5rem',
          borderRadius: '1.2rem',
          background: 'rgba(255, 255, 255, 0.12)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: 'white',
        }}
      >
        <h1
          style={{
            marginBottom: '1.5rem',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '1.7rem',
            letterSpacing: '1px',
          }}
        >
          🔐 Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 📧 Email Input */}
          <input
            type="text"
            {...register('email', { required: true })}
            placeholder="Enter your email address"
            style={{
              width: '100%',
              padding: '0.9rem 1rem',
              marginBottom: '1rem',
              borderRadius: '.6rem',
              border: errors['email'] ? '1px solid #ff4d4f' : '1px solid #ccc',
              outline: 'none',
              backgroundColor: 'rgba(255,255,255,0.95)',
              color: '#000',
              fontSize: '1rem',
              transition: '0.3s',
            }}
            onFocus={(e) => (e.target.style.border = '1px solid #1A73E8')}
            onBlur={(e) => (e.target.style.border = '1px solid #ccc')}
          />

          {/* 🔒 Password Input */}
          <input
            type="password"
            placeholder="Enter your password"
            {...register('password', { required: true })}
            style={{
              width: '100%',
              padding: '0.9rem 1rem',
              marginBottom: '1.5rem',
              borderRadius: '.6rem',
              border: errors['password'] ? '1px solid #ff4d4f' : '1px solid #ccc',
              outline: 'none',
              backgroundColor: 'rgba(255,255,255,0.95)',
              color: '#000',
              fontSize: '1rem',
              transition: '0.3s',
            }}
            onFocus={(e) => (e.target.style.border = '1px solid #1A73E8')}
            onBlur={(e) => (e.target.style.border = '1px solid #ccc')}
          />

          {/* 🚀 Submit Button */}
          <Button
            htmlType="submit"
            type="primary"
            disabled={isLoading}
            style={{
              textTransform: 'uppercase',
              fontWeight: 'bold',
              width: '100%',
              padding: '0.9rem',
              borderRadius: '.6rem',
              background: 'linear-gradient(90deg, #164863, #1A73E8)',
              border: 'none',
              color: '#fff',
              fontSize: '1rem',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              cursor: 'pointer',
            }}
          >
            {isLoading && (
              <SpinnerIcon
                className="spin"
                weight="bold"
                style={{ marginRight: '8px' }}
              />
            )}
            Sign In
          </Button>
        </form>

        {/* 🔗 Register Link */}
        <p
          style={{
            marginTop: '1.5rem',
            textAlign: 'center',
            fontSize: '0.95rem',
          }}
        >
          Don’t have an account?{' '}
          <Link
            to="/register"
            style={{
              color: '#00E0FF',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.textDecoration = 'underline')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.textDecoration = 'none')
            }
          >
            Register Here
          </Link>
        </p>

        {/* 💬 WhatsApp Button */}
        <a
          href="https://wa.me/923191402404"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '1.5rem',
            textDecoration: 'none',
            backgroundColor: '#25D366',
            color: 'white',
            fontWeight: 'bold',
            padding: '0.7rem 1.2rem',
            borderRadius: '2rem',
            fontSize: '0.95rem',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <WhatsappLogo size={20} weight="fill" />
          Need Web Services?
        </a>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
