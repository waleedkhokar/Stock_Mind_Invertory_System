import { SpinnerIcon, WhatsappLogo } from '@phosphor-icons/react';
import { Button, Flex } from 'antd';
import { FieldValues, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toastMessage from '../../lib/toastMessage';
import { useRegisterMutation } from '../../redux/features/authApi';
import { useAppDispatch } from '../../redux/hooks';
import { loginUser } from '../../redux/services/authSlice';
import decodeToken from '../../utils/decodeToken';

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userRegistration, { isLoading }] = useRegisterMutation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      if (data.password !== data.confirmPassword) {
        toastMessage({ icon: 'error', text: 'Password and confirm password must be same!' });
        return;
      }

      const res = await userRegistration(data).unwrap();

      if (res.statusCode === 201) {
        const user = decodeToken(res.data.token);
        dispatch(loginUser({ token: res.data.token, user }));
        navigate('/');
        toastMessage({ icon: 'success', text: res.message });
      }
    } catch (error: any) {
      const errMsg =
        error?.data?.errors?.[Object.keys(error?.data?.errors)[0]] || error.data.message;
      toastMessage({ icon: 'error', text: errMsg });
    }
  };

  return (
    <Flex
      justify="center"
      align="center"
      style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #1A73E8 0%, #164863 100%)',
        padding: '1rem',
      }}
    >
      <Flex
        vertical
        style={{
          width: '400px',
          padding: '3rem',
          borderRadius: '1rem',
          background: 'rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          color: 'white',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <h1
          style={{
            marginBottom: '1.5rem',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '1.8rem',
            letterSpacing: '1px',
          }}
        >
          📝 Register
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register('name', { required: true })}
            placeholder="Enter your full name"
            style={inputStyle(errors['name'])}
          />
          <input
            type="text"
            {...register('email', { required: true })}
            placeholder="Enter your email address"
            style={inputStyle(errors['email'])}
          />
          <input
            type="password"
            {...register('password', { required: true })}
            placeholder="Create a password"
            style={inputStyle(errors['password'])}
          />
          <input
            type="password"
            {...register('confirmPassword', { required: true })}
            placeholder="Confirm your password"
            style={inputStyle(errors['confirmPassword'])}
          />

          <Flex justify="center">
            <Button
              htmlType="submit"
              type="primary"
              disabled={isLoading}
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                width: '100%',
                padding: '0.8rem',
                borderRadius: '.6rem',
                background: 'linear-gradient(90deg, #164863, #1A73E8)',
                border: 'none',
                color: '#fff',
                fontSize: '1rem',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
              }}
            >
              {isLoading && (
                <SpinnerIcon className="spin" weight="bold" style={{ marginRight: '8px' }} />
              )}
              Register
            </Button>
          </Flex>
        </form>

        <p
          style={{
            marginTop: '1.5rem',
            textAlign: 'center',
            fontSize: '0.95rem',
          }}
        >
          Already have an account?{' '}
          <Link
            to="/login"
            style={{
              color: '#00BFFF',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
            onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            Login Here
          </Link>
        </p>

        {/* WhatsApp Contact Badge */}
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
            padding: '0.6rem 1.2rem',
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

// Reusable Input Style
const inputStyle = (error: any) => ({
  width: '100%',
  padding: '0.8rem 1rem',
  marginBottom: '1rem',
  borderRadius: '.6rem',
  border: error ? '1px solid #ff4d4f' : '1px solid #ddd',
  outline: 'none',
  backgroundColor: 'rgba(255,255,255,0.9)',
  color: '#000',
  fontSize: '1rem',
  transition: '0.3s',
});

export default RegisterPage;
