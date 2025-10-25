# 🎯 MCP Server Setup Instructions in Cursor

## Step 1: Preparation

1. **Install dependencies:**
```bash
cd 12_MCP_fluent_crm
npm install
npm run build
```

2. **Get API Credentials from FluentCRM:**
   - Log in: https://your-domain.com/wp-admin
   - Go to: **FluentCRM → Settings → Rest API**
   - Click: **Create New Key**
   - Copy: **Username** and **Application Password**

3. **Edit .env:**
```bash
cp .env.example .env
nano .env

# Enter:
FLUENTCRM_API_USERNAME=your_username
FLUENTCRM_API_PASSWORD=your_password
```

## Step 2: Cursor Configuration

### Option A: GUI (Recommended)

1. Open **Cursor**
2. Press: **Cmd+,** (macOS) or **Ctrl+,** (Windows/Linux)
3. Search for: **"MCP"**
4. Click: **"Edit in settings.json"**
5. In the opened file add:

```json
{
  "mcpServers": {
    "fluentcrm": {
      "command": "node",
      "args": [
        "/path/to/your/fluentcrm-mcp-server/dist/fluentcrm-mcp-server.js"
      ],
      "env": {
        "FLUENTCRM_API_USERNAME": "your_username",
        "FLUENTCRM_API_PASSWORD": "your_password",
        "FLUENTCRM_API_URL": "https://your-domain.com/wp-json/fluent-crm/v2"
      }
    }
  }
}
```

6. **Save** and **restart Cursor**

### Option B: Manual file editing

1. Open: `~/.cursor/settings.json` (or `~/.cursor/mcp_settings.json`)
2. Add `mcpServers` section as above
3. Save and restart Cursor

## Step 3: Testing

1. In Cursor open **Chat** (Cmd+K)
2. Type:
```
Show me all tags in FluentCRM
```

3. Claude should automatically use MCP Server and return a list of tags ✅

## ⚠️ Troubleshooting

### Problem: "MCP server fluentcrm not found"

**Rozwiązanie:**
1. Check path to `dist/fluentcrm-mcp-server.js` in configuration
2. Make sure `npm run build` succeeded
3. Restart Cursor

### Problem: "Authorization failed"

**Rozwiązanie:**
1. Check username and password in `.env`
2. Try generating new API Key in FluentCRM
3. Make sure Manager has appropriate permissions

### Problem: "Connection refused"

**Rozwiązanie:**
1. Check if your WordPress domain is accessible
2. Try: `curl https://your-domain.com`
3. Check if WordPress is running

## ✅ Post-Setup Checklist

- [ ] npm install - dependencies installed
- [ ] npm run build - TypeScript compilation succeeded
- [ ] .env - credentials set
- [ ] Cursor MCP config - configuration added
- [ ] Cursor restarted - restart Cursor
- [ ] Test Chat - Claude returned list of tags

## 🚀 Ready!

After completing all steps you can start using MCP Server!

Examples:
- "Show me all tags"
- "Create tag AW-hot-lead"
- "Assign tag AW-progress-75 to jan@example.com"
- "Show dashboard statistics"

---

Made with ❤️ by Miłosz Zając
