# 📝 Changelog - FluentCRM MCP Server

**Change history** in FluentCRM MCP Server project.

---

## [1.2.0] - 2025-01-27

### ✨ New Features

#### 🌍 Full English Translation
- **Translated all documentation** from Polish to English
- **Updated README.md** - complete English translation
- **Updated PODSUMOWANIE.md** - complete English translation  
- **Updated START_TUTAJ.md** - complete English translation
- **Updated SETUP_CURSOR.md** - complete English translation
- **Updated changelog.md** - complete English translation

#### 📚 Documentation Improvements
- **Consistent English terminology** across all files
- **Improved readability** for international users
- **Maintained all technical accuracy** during translation
- **Preserved all code examples** and configuration snippets

### 🔧 Technical Improvements
- **No code changes** - translation only
- **Maintained file structure** and formatting
- **Preserved all links** and references
- **Kept all technical details** intact

---

## [1.1.0] - 2025-01-27

### ✨ New Features

#### 🔗 Smart Links Support
- **Added Smart Links methods** to FluentCRMClient:
  - `listSmartLinks()` - gets list of Smart Links
  - `getSmartLink()` - gets Smart Link details
  - `createSmartLink()` - creates new Smart Link
  - `updateSmartLink()` - updates Smart Link
  - `deleteSmartLink()` - deletes Smart Link
  - `generateSmartLinkShortcode()` - generates shortcode
  - `validateSmartLinkData()` - validates data

#### 🛠️ New MCP Tools
- `fluentcrm_list_smart_links` - list Smart Links
- `fluentcrm_get_smart_link` - Smart Link details
- `fluentcrm_create_smart_link` - create Smart Link
- `fluentcrm_update_smart_link` - update Smart Link
- `fluentcrm_delete_smart_link` - delete Smart Link
- `fluentcrm_generate_smart_link_shortcode` - generate shortcode
- `fluentcrm_validate_smart_link_data` - validate data

#### 📚 Documentation
- **Updated API_REFERENCE.md** - added Smart Links section
- **Updated TOOLS_REFERENCE.md** - added tools documentation
- **Created SMART_LINKS_EXAMPLES.md** - guide with examples

### 🔧 Technical Improvements

#### TypeScript
- **Improved typing** in switch statement
- **Added error handling** for non-existent endpoints
- **Implemented graceful fallback** for Smart Links API

#### Error Handling
- **Intelligent 404 error handling** - informs about missing endpoints
- **Helpful error messages** - suggests alternative solutions
- **Validation helpers** - data validation before sending

### ⚠️ Limitations

#### Smart Links API
- **FluentCRM does not yet have native endpoints** REST API for Smart Links
- **Tools are prepared** for future API extensions
- **Currently requires manual creation** through FluentCRM interface

#### Recommended Solutions
1. **Manual creation** of Smart Links through `FluentCRM → Smart Links`
2. **Using generated shortcodes** in email campaigns
3. **Custom WordPress extensions** for API (future)

### 🎯 Usage Examples

#### Generate shortcode
```bash
fluentcrm_generate_smart_link_shortcode \
  slug="aw-link-webinar-mail" \
  linkText="Przejdź do webinaru"
```

#### Data validation
```bash
fluentcrm_validate_smart_link_data \
  title="AW-Link-Webinar-Mail" \
  target_url="https://korkiai.pl/lp/pages/webinar/player.html?email={{contact.email}}"
```

#### Check API availability
```bash
fluentcrm_list_smart_links
# Returns information about missing endpoints + suggestions
```

---

## [1.0.0] - 2025-01-20

### 🚀 First version

#### Basic functionality
- **Contacts** - CRUD operations
- **Tags** - tag management
- **Lists** - list management
- **Campaigns** - campaign management
- **Email Templates** - email templates
- **Automations** - funnels
- **Webhooks** - webhook management
- **Reports** - statistics and custom fields

#### Architecture
- **TypeScript** - full typing
- **Axios** - HTTP client with Basic Auth
- **Error handling** - API error handling
- **MCP Protocol** - integration with Cursor

#### Documentation
- **API_REFERENCE.md** - endpoint documentation
- **TOOLS_REFERENCE.md** - tools documentation
- **README.md** - getting started guide

---

## 🔮 Roadmap

### v1.2.0 (Planned)
- **Bulk operations** - bulk operations on contacts
- **Advanced filtering** - advanced filtering
- **Custom fields management** - custom fields management
- **Performance optimizations** - performance optimizations

### v1.3.0 (Planned)
- **Smart Links API** - when FluentCRM adds endpoints
- **Advanced automations** - advanced automations
- **Integration hooks** - integration hooks
- **Real-time sync** - real-time synchronization

### v2.0.0 (Long-term)
- **GraphQL support** - GraphQL support
- **WebSocket connections** - WebSocket connections
- **Advanced caching** - advanced caching
- **Multi-tenant support** - multi-tenant support

---

## 📊 Statystyki

### v1.1.0
- **+7 new tools** MCP
- **+7 new methods** in FluentCRMClient
- **+3 documentation files** updated
- **+1 new file** with examples

### v1.0.0
- **25 tools** MCP
- **25 methods** in FluentCRMClient
- **3 files** documentation
- **Full integration** with FluentCRM API

---

**Prepared by**: AI Assistant  
**Date**: 2025-01-27  
**Version**: 1.1.0  
**For project**: Korki AI - FluentCRM MCP Server
