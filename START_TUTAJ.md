# 🚀 START HERE - 5 Minute Guide

**MCP Server for FluentCRM** - Manage marketing from Cursor!

---

## ⚡ Quick Steps (5 minutes)

### 1️⃣ Get Credentials (1 min)

1. Log in: `https://your-domain.com/wp-admin`
2. Go to: **FluentCRM → Settings → Rest API**
3. Click: **Create New Key**
4. Copy: **Username** and **Application Password**

### 2️⃣ Install (1 min)

```bash
cd fluentcrm-mcp-server
npm install
npm run build
```

### 3️⃣ Configure (2 min)

**Edit .env:**
```bash
nano .env
```

**Paste:**
```env
FLUENTCRM_API_USERNAME=your_username_here
FLUENTCRM_API_PASSWORD=your_password_here
```

Save: `Ctrl+X` → `Y` → `Enter`

### 4️⃣ Setup Cursor (1 min)

1. Open **Cursor**
2. Press: **Cmd+,** (macOS)
3. Search for: **"MCP"** or **"mcp_settings"**
4. Edit file and add:

```json
{
  "mcpServers": {
    "fluentcrm": {
      "command": "node",
      "args": [
        "/Users/miloszzajac2/Desktop/111_mac_mini/10_BIZNES/10.01_projekty/10.01.05_autowebinar_korki/12_MCP_fluent_crm/dist/fluentcrm-mcp-server.js"
      ],
      "env": {
        "FLUENTCRM_API_USERNAME": "your_username",
        "FLUENTCRM_API_PASSWORD": "your_password"
      }
    }
  }
}
```

5. Save and **restart Cursor**

### 5️⃣ Test (instant!)

In Cursor Chat type:
```
Show me all tags in FluentCRM
```

**Result:** Claude will return a list of tags from FluentCRM! ✅

---

## 📚 Complete Documentation

After quick start read:

| Document | Description | Time |
|----------|------|------|
| **README.md** | General overview | 5 min |
| **SETUP_CURSOR.md** | Detailed configuration | 10 min |
| **TOOLS_REFERENCE.md** | All available tools | 15 min |
| **API_REFERENCE.md** | FluentCRM API documentation | for reference |
| **PODSUMOWANIE.md** | Complete project overview | 10 min |

---

## 💬 Usage Examples

After setup in Cursor Chat you can write:

```
Pokaż mi wszystkie tagi
```

```
Create tag AW-hot-lead with description "Hot leads"
```

```
Assign tag AW-progress-75 to jan@example.com
```

```
Create list AW-Hot-Leads
```

```
Show me dashboard statistics
```

Claude will automatically use MCP Server! 🎉

---

## ⚠️ Troubleshooting

### Problem: "MCP server fluentcrm not found"
- Check path in Cursor configuration
- Check if `npm run build` succeeded
- Restart Cursor

### Problem: "Authorization failed"
- Check username/password in .env
- Generate new API Key in FluentCRM

### Problem: Cursor won't start
- Corrupted settings.json?
- Check JSON syntax (no errors)

---

## 📝 Project Structure

```
12_MCP_fluent_crm/
├── src/fluentcrm-mcp-server.ts   ← Server code (790 lines)
├── dist/                          ← Compiled code
├── package.json                   ← Dependencies
├── .env                           ← EDIT HERE (credentials)
├── .env.example                   ← .env template
├── README.md                      ← Documentation
├── SETUP_CURSOR.md                ← Setup instructions
├── TOOLS_REFERENCE.md             ← Tools
├── API_REFERENCE.md               ← API docs
├── PODSUMOWANIE.md                ← Overview
└── START_TUTAJ.md                 ← This file!
```

---

## ✅ Checklist

- [ ] Got API Credentials from FluentCRM
- [ ] Installed dependencies (`npm install`)
- [ ] Compiled code (`npm run build`)
- [ ] Edited `.env` with credentials
- [ ] Configured Cursor MCP settings
- [ ] Restarted Cursor
- [ ] Test chat - "Show me all tags"

**After checking everything - READY! 🎉**

---

## 🎯 What Next?

1. **Check the checklist** above
2. **Read** SETUP_CURSOR.md for details
3. **Experiment** - Cursor Chat + MCP = power!
4. **Manage** Autowebinar automation!

---

## 💡 Quick Commands

```bash
# Build project
npm run build

# Test on localhost
export FLUENTCRM_API_USERNAME="your_username"
export FLUENTCRM_API_PASSWORD="your_password"
npm start

# Clean node_modules (if something broke)
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 🔐 Security

⚠️ **NEVER:**
- Commit `.env` with real credentials to git
- Share API keys publicly
- Hardcode credentials in code

✅ **ALWAYS:**
- Use environment variables
- Rotate API keys regularly
- Check `.gitignore`

---

## 📞 Need Help?

1. Check **SETUP_CURSOR.md**
2. Read **TOOLS_REFERENCE.md**
3. Check FluentCRM docs: https://rest-api.fluentcrm.com/
4. Cursor logs: `~/.cursor/logs.txt`

---

## 🎉 Ready!

Now you can manage the entire marketing automation directly from Cursor!

**Have fun! 🚀**

---

Made with ❤️ by Miłosz Zając
