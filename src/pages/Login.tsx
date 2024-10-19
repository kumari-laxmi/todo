import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/form-controls/Button';
import { Input } from '../components/ui/form-controls/Input';
import GithubIcon from '../assets/github.svg';
import GoogleIcon from '../assets/google.svg';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  const auth = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = auth.login(
        "suraj.kashyap370@webkul.in",
        "admin123",
      );
    } catch (error) {}
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold">{t('login.title')}</h2>

        <p className="mt-2 text-gray-600">{t('login.description')}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          id="email"
          label={t('login.email-address')}
          value={"suraj.kashyap370@webkuk.in"}
          onChange={() => {}}
          placeholder={t('login.email-address-placeholder')}
          helperText={t('login.help')}
        />

        <Input
          type="password"
          value={"admin123"}
          label={t('login.password')}
          onChange={() => {}}
          placeholder={t('login.password-placeholder')}
        />

        <Button type="submit" isLoading={loading} className="w-full">
          {t('login.login-btn')}
        </Button>

        <Button type="button" variant="secondary" className="w-full" size="sm">
          <div className="flex items-center gap-2">
            <img src={GoogleIcon} alt="GitHub" className="h-5 w-auto" />

            <p>{t('login.login-google-btn')}</p>
          </div>
        </Button>

        <Button type="button" variant="secondary" className="w-full" size="sm">
          <div className="flex items-center gap-2">
            <img src={GithubIcon} alt="GitHub" className="h-5 w-auto" />

            <p>{t('login.login-github-btn')}</p>
          </div>
        </Button>
      </form>

      <div className="flex flex-col text-center">
        <Link
          to="/register"
          className="text-sm text-indigo-600 hover:text-indigo-500"
        >
          {t('login.dont-have-account')}
        </Link>

        <Link
          to="/forget-password"
          className="text-sm text-red-600 hover:text-red-500"
        >
          {t('login.forget-password.title')}
        </Link>
      </div>
    </div>
  );
};

export default Login;
