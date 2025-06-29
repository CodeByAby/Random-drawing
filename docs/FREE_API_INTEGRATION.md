# 免费 AI API 集成指南

本项目已集成两个优质的免费 AI API：

## 🚀 Google Gemini API (推荐)

### 免费额度
- **Gemini 1.5 Flash**: 每天 1,500 次请求，每分钟 15 次请求
- **Gemini 1.5 Pro**: 每天 50 次请求，每分钟 2 次请求

### 获取 API 密钥
1. 访问 [Google AI Studio](https://aistudio.google.com/app/apikey)
2. 点击 "Create API key"
3. 复制 API 密钥到 `.env.development` 文件：
   ```
   GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
   ```

### 使用示例
```bash
# 文本生成
curl -X POST http://localhost:3000/api/demo/gen-text \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "写一个关于AI的故事",
    "provider": "google",
    "model": "gemini-1.5-flash"
  }'
```

## 🎨 DeepAI API

### 免费额度
- 每月基础图像生成配额
- 无需信用卡即可开始

### 获取 API 密钥
1. 访问 [DeepAI](https://deepai.org/)
2. 注册账户并获取 API 密钥
3. 添加到 `.env.development` 文件：
   ```
   DEEPAI_API_KEY=your_api_key_here
   ```

### 使用示例
```bash
# 图像生成
curl -X POST http://localhost:3000/api/demo/gen-image \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "a beautiful sunset over mountains",
    "provider": "deepai",
    "model": "text2img"
  }'
```

## 🔧 快速开始

1. **安装依赖**：
   ```bash
   npm install --legacy-peer-deps
   ```

2. **配置环境变量**：
   复制并填写 `.env.development` 中的 API 密钥

3. **启动开发服务器**：
   ```bash
   npm run dev
   ```

4. **测试 API**：
   访问 `http://localhost:3000/api/demo/gen-text` 或 `http://localhost:3000/api/demo/gen-image`

## 🌟 支持的模型

### Google Gemini
- `gemini-1.5-flash` (推荐，速度快)
- `gemini-1.5-pro` (质量高)
- `gemini-1.0-pro`

### DeepAI
- `text2img` (文本转图像)
- `cute-creature-generator` (可爱生物生成)
- `cyberpunk-generator` (赛博朋克风格)

## 📊 使用建议

1. **Google Gemini**: 优先使用，免费额度充足
2. **DeepAI**: 作为图像生成的补充选择
3. **错误处理**: 已内置重试和错误处理机制
4. **监控使用量**: 注意免费额度限制

## 🔒 安全注意事项

- 不要将 API 密钥提交到版本控制
- 使用环境变量存储敏感信息
- 定期轮换 API 密钥