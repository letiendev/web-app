import { Router } from 'express';

const router = Router();

// Mock user data
const mockUser = {
  id: '1',
  username: 'admin',
  email: 'admin@gmail.com',
  role: 'administrator'
};

// Mock login endpoint
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'ユーザー名とパスワードが必要です。'
      });
    }

    // Simple validation (in real app, use bcrypt to compare hashed passwords)
    if (username === 'admin' && password === 'password') {
      // Generate mock JWT token (in real app, use proper JWT library)
      const token = `mock-jwt-token-${Date.now()}`;
      
      return res.json({
        success: true,
        user: mockUser,
        token: token,
        message: 'ログインが成功しました。'
      });
    } else {
      return res.status(401).json({
        success: false,
        message: 'ユーザー名またはパスワードが正しくありません。'
      });
    }
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({
      success: false,
      message: 'サーバーエラーが発生しました。'
    });
  }
});

// Mock logout endpoint
router.post('/logout', async (req, res) => {
  try {
    // In a real app, you might invalidate the token here
    return res.json({
      success: true,
      message: 'ログアウトが成功しました。'
    });
  } catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({
      success: false,
      message: 'ログアウト中にエラーが発生しました。'
    });
  }
});

// Mock user profile endpoint
router.get('/profile', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: '認証が必要です。'
      });
    }

    // In a real app, validate the JWT token here
    const token = authHeader.substring(7);
    
    if (token.startsWith('mock-jwt-token-')) {
      return res.json({
        success: true,
        user: mockUser
      });
    } else {
      return res.status(401).json({
        success: false,
        message: '無効なトークンです。'
      });
    }
  } catch (error) {
    console.error('Profile error:', error);
    return res.status(500).json({
      success: false,
      message: 'サーバーエラーが発生しました。'
    });
  }
});

export default router;
