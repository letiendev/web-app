import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/ui/header';
import { GlamoInput } from '@/components/ui/glamo-input';
import { GlamoButton } from '@/components/ui/glamo-button';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    username: false,
    password: false,
    general: false,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      username: !username.trim(),
      password: !password.trim(),
      general: false,
    };
    
    setErrors(newErrors);
    
    if (newErrors.username || newErrors.password) {
      return;
    }
    
    if (username !== 'admin' || password !== 'password') {
      setErrors({ ...newErrors, general: true });
      return;
    }

    navigate('/dashboard');
  };

  return (
    <div className="glamo-container">
      <Header title="Glamo宅配ボックス" />

      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-4">
        <div className="mb-8">
          <h2 className="text-white text-3xl font-normal text-center m-16">
            ログイン
          </h2>
        </div>

        <form onSubmit={handleLogin} className="space-y-2">
          <div className="relative flex justify-center">
            <div className="flex items-center gap-8 mb-4">
              <label className="text-white text-2xl font-normal w-32">
                ユーザー
              </label>
              <GlamoInput
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={errors.username}
                placeholder=""
              />
            </div>
            {errors.username && (
              <div className="absolute right-[-230px] mt-2 ml-4">
                <span className="text-glamo-yellow text-2xl font-bold">
                  記入してください。
                </span>
              </div>
            )}
          </div>

          <div className="relative flex justify-center">
            <div className="flex items-center gap-8 mb-4">
              <label className="text-white text-2xl font-normal w-32">
                パスワード
              </label>
              <GlamoInput
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
                showPasswordToggle
                onPasswordToggle={() => setShowPassword(!showPassword)}
                isPasswordVisible={showPassword}
                placeholder=""
              />
            </div>
            {errors.password && (
              <div className="absolute right-[-230px] mt-2 ml-4">
                <span className="text-glamo-yellow text-2xl font-bold">
                  記入してください。
                </span>
              </div>
            )}
          </div>
          <div className="relative flex justify-center">
            <div className="flex items-center gap-8 mb-4">
              <label className="text-white text-2xl font-normal w-52"></label>
              <div className="relative">
                {errors.general && (
                  <div className="max-w-4xl mx-auto">
                    <div className="text-glamo-yellow text-2xl mb-4">
                      <span className="font-bold">ログインできません。</span>
                    </div>
                    <div className="text-glamo-yellow text-2xl leading-8">
                      ・ユーザーIDおよびパスワードが正しく入力されていない。
                      <br />
                      ・英数字・記号が半角で入力されていない。全角を使用している。
                      <br />
                      ・「CapsLock」がオンになっているなどの理由で大文字・小文字が正しく入力されていない。
                      <br />
                      ・コピー＆ペーストした際、スペースが紛れてしまっている。
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center py-28">
            <GlamoButton type="submit" size="lg" className="w-[200px]">
              ログイン
            </GlamoButton>
          </div>
        </form>
      </div>
    </div>
  );
};
