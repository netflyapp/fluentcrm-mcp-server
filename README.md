# 🚀 FluentCRM MCP Server

**MCP Server for FluentCRM** - manage your entire marketing automation directly from Cursor!

<a href="https://glama.ai/mcp/servers/@netflyapp/fluentcrm-mcp-server">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@netflyapp/fluentcrm-mcp-server/badge" alt="FluentCRM Server MCP server" />
</a>

---

## 📋 Table of Contents

- [What is MCP Server?](#what-is-mcp-server)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Available Tools](#available-tools)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)

---

## What is MCP Server?

**MCP** (Model Context Protocol) is a new standard from Anthropic that allows AI models (including Claude in Cursor) to connect to external systems.

This MCP Server allows you to:

✅ **Manage tags** - create, delete, assign to contacts  
✅ **Edit lists** - create lists, add/remove contacts  
✅ **Create campaigns** - send emails to user segments  
✅ **Automations** - manage funnels (automations)  
✅ **Webhooks** - configure webhooks to FluentCRM  
✅ **Reports** - fetch statistics and metrics  
✅ **Smart Links** - manage smart links (when API becomes available)

Everything directly from Cursor, in conversation with Claude!

--- 

## Requirements

- ✅ Node.js 18+
- ✅ npm or yarn
- ✅ Access to FluentCRM API (your WordPress domain)
- ✅ Cursor with MCP support
- ✅ API Key from FluentCRM (generate in Settings → Rest API)

---

## Installation

### Step 1: Clone repository or copy files

```bash
cd /path/to/your/fluentcrm-mcp-server
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Build TypeScript

```bash
npm run build
```

You should see:
```
✅ dist/fluentcrm-mcp-server.js (compiled)
```

### Step 4: Test connection

```bash
export FLUENTCRM_API_USERNAME="your_username"
export FLUENTCRM_API_PASSWORD="your_password"
npm start
```

You should see:
```
🚀 FluentCRM MCP Server running on stdio
📡 API URL: https://your-domain.com/wp-json/fluent-crm/v2
👤 Username: your_username
```

Press `CTRL+C` to stop.

---

## Configuration

### 1. Get API Credentials from FluentCRM

Step by step:

1. Log in to WordPress: `https://your-domain.com/wp-admin`
2. Go to: **FluentCRM → Settings → Managers**
3. Click **Add New Manager**
4. Enter:
   - Name: `MCP Server` (or something else)
   - Role: `Subscriber` (sufficient)
   - Permissions: Check all FluentCRM permissions
5. Click **Save Manager**

6. Go to: **FluentCRM → Settings → Rest API**
7. Click **Create New Key**
8. Select the manager you just created
9. Click **Confirm**
10. Copy:
    - **Username** (API_USERNAME)
    - **Application Password** (API_PASSWORD)

### 2. Set environment variables

**Option A: Edit `.env` file**

```bash
# .env
FLUENTCRM_API_USERNAME=your_api_username
FLUENTCRM_API_PASSWORD=your_api_password
FLUENTCRM_API_URL=https://your-domain.com/wp-json/fluent-crm/v2
```

**Option B: Export from terminal**

```bash
export FLUENTCRM_API_USERNAME="your_api_username"
export FLUENTCRM_API_PASSWORD="your_api_password"
```

### 3. Cursor Configuration (MCP)

1. Open Cursor
2. Press `Cmd+Shift+P` (macOS) or `Ctrl+Shift+P` (Windows/Linux)
3. Search for: "MCP settings" or "Preferences: Open MCP Settings"
4. Edit configuration file:

```json
{
  "mcpServers": {
    "fluentcrm": {
      "command": "node",
      "args": [
        "/path/to/your/fluentcrm-mcp-server/dist/fluentcrm-mcp-server.js"
      ],
      "env": {
        "FLUENTCRM_API_USERNAME": "your_api_username",
        "FLUENTCRM_API_PASSWORD": "your_api_password",
        "FLUENTCRM_API_URL": "https://your-domain.com/wp-json/fluent-crm/v2"
      }
    }
  }
}
```

5. Save and restart Cursor

---

## Usage

After configuration, open chat in Cursor and start asking questions!

### Simple questions:

```
Show me all tags in FluentCRM
```

Claude will automatically use the MCP Server and return a list of tags.

---

## Available Tools

### 👤 CONTACTS (Subscribers)

- `fluentcrm_list_contacts` - Get list of contacts
- `fluentcrm_get_contact` - Get contact details
- `fluentcrm_find_contact_by_email` - Search by email
- `fluentcrm_create_contact` - Create new contact
- `fluentcrm_update_contact` - Update contact
- `fluentcrm_delete_contact` - Delete contact

### 🏷️ TAGS

- `fluentcrm_list_tags` - Get all tags
- `fluentcrm_create_tag` - Create new tag
- `fluentcrm_delete_tag` - Delete tag
- `fluentcrm_attach_tag_to_contact` - Assign tag to contact
- `fluentcrm_detach_tag_from_contact` - Remove tag from contact

### 📋 LISTS

- `fluentcrm_list_lists` - Get all lists
- `fluentcrm_create_list` - Create new list
- `fluentcrm_delete_list` - Delete list
- `fluentcrm_attach_contact_to_list` - Add contact to list
- `fluentcrm_detach_contact_from_list` - Remove contact from list

### 📧 CAMPAIGNS

- `fluentcrm_list_campaigns` - Get campaigns
- `fluentcrm_create_campaign` - Create campaign
- `fluentcrm_pause_campaign` - Pause campaign
- `fluentcrm_resume_campaign` - Resume campaign
- `fluentcrm_delete_campaign` - Delete campaign

### 📨 EMAIL TEMPLATES

- `fluentcrm_list_email_templates` - Get templates
- `fluentcrm_create_email_template` - Create template

### 🤖 AUTOMATIONS

- `fluentcrm_list_automations` - Get automations (funnels)
- `fluentcrm_create_automation` - Create automation

### 🔗 WEBHOOKS

- `fluentcrm_list_webhooks` - Get webhooks
- `fluentcrm_create_webhook` - Create webhook

### 📊 REPORTS

- `fluentcrm_dashboard_stats` - Dashboard statistics
- `fluentcrm_custom_fields` - Custom fields

---

## Examples

### Example 1: Show all tags

**In Cursor:**
```
Show me all tags in FluentCRM
```

**Claude will return:**
```
✅ Fetching tags from FluentCRM...

Found the following tags:
1. registered (ID: 1)
2. webinar-jit (ID: 2)
3. progress-75 (ID: 3)
4. participated (ID: 4)
... and 47 more
```

### Example 2: Create new tag

**In Cursor:**
```
Create tag "hot-lead" with description "People who watched 75%+ and are interested"
```

**Claude automatically:**
1. Uses `fluentcrm_create_tag` tool
2. Returns confirmation

### Example 3: Assign tag to contact

**In Cursor:**
```
Assign tag "progress-75" to contact with email "jan@example.com"
```

**Claude:**
1. Finds contact by email
2. Assigns tag
3. Returns confirmation

### Example 4: Create list

**In Cursor:**
```
Create new list "Hot-leads" with description "Participants who watched 75%+ of webinar"
```

**Claude creates the list**

### Example 5: Add contact to list

**In Cursor:**
```
Add all contacts with tag "progress-75" to list "Hot-leads"
```

---

## Troubleshooting

### ❌ Error: "Authorization failed"

**Cause**: Wrong API Username or Password

**Solution:**
1. Go to FluentCRM → Settings → Rest API
2. Check if API Key is active
3. Copy credentials again
4. Update `.env` file

### ❌ Error: "Connection refused"

**Cause**: FluentCRM API unavailable

**Solution:**
1. Check if your WordPress domain is accessible
2. Ping: `ping your-domain.com`
3. Check if WordPress is running

### ❌ MCP Server won't start

**Cause**: Missing dependencies

**Solution:**
```bash
npm install
npm run build
```

### ❌ Cursor can't see MCP Server

**Cause**: Wrong file path or missing API credentials

**Solution:**
1. Check path in MCP configuration (`~/.cursor/settings.json`)
2. Check if file `dist/fluentcrm-mcp-server.js` exists
3. Restart Cursor
4. Check logs: `cat ~/.cursor/logs.txt`

---

## API Reference

FluentCRM API Documentation: [https://rest-api.fluentcrm.com/#introduction](https://rest-api.fluentcrm.com/#introduction)

---

## Security

⚠️ **IMPORTANT:**

- ❌ **NEVER** commit `.env` with real credentials to git
- ❌ **NEVER** share API keys publicly
- ✅ Use environment variables instead of hardcoding
- ✅ Regularly rotate API keys

---

## Update

To update MCP Server:

```bash
cd fluentcrm-mcp-server
git pull  # or download latest version manually
npm install
npm run build
```

Restart Cursor.

---

## Support

If you encounter problems:

1. Check the [Troubleshooting](#troubleshooting) section
2. Check FluentCRM logs: FluentCRM → Logs
3. Check Cursor logs: `~/.cursor/logs.txt`
4. Contact support

---

## License

MIT

---

## Author

**Miłosz Zając**  
🌐 [www.netfly.pl](https://www.netfly.pl)
  
**Date**: 2025-01-20  
**Version**: 1.0.0

---

Made with ❤️ by Miłosz Zając