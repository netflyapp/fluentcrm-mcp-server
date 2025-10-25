# 🎯 Instrukcja Setup MCP Server w Cursor

## Krok 1: Przygotowanie

1. **Zainstaluj zależności:**
```bash
cd 12_MCP_fluent_crm
npm install
npm run build
```

2. **Pobierz API Credentials z FluentCRM:**
   - Zaloguj się: https://your-domain.com/wp-admin
   - Przejdź do: **FluentCRM → Settings → Rest API**
   - Kliknij: **Create New Key**
   - Skopiuj: **Username** i **Application Password**

3. **Edytuj .env:**
```bash
cp .env.example .env
nano .env

# Wpisz:
FLUENTCRM_API_USERNAME=your_username
FLUENTCRM_API_PASSWORD=your_password
```

## Krok 2: Konfiguracja Cursor

### Opcja A: GUI (Zalecane)

1. Otwórz **Cursor**
2. Naciśnij: **Cmd+,** (macOS) lub **Ctrl+,** (Windows/Linux)
3. Wyszukaj: **"MCP"**
4. Kliknij: **"Edit in settings.json"**
5. W otwartym pliku dodaj:

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

6. **Zapisz** i **restart Cursor**

### Opcja B: Ręczna edycja pliku

1. Otwórz: `~/.cursor/settings.json` (lub `~/.cursor/mcp_settings.json`)
2. Dodaj sekcję `mcpServers` jak wyżej
3. Zapisz i restart Cursor

## Krok 3: Testowanie

1. W Cursor otwórz **Chat** (Cmd+K)
2. Wpisz:
```
Pokaż mi wszystkie tagi w FluentCRM
```

3. Claude powinien automatycznie użyć MCP Server i zwrócić listę tagów ✅

## ⚠️ Troubleshooting

### Problem: "MCP server fluentcrm not found"

**Rozwiązanie:**
1. Sprawdź ścieżkę do `dist/fluentcrm-mcp-server.js` w konfiguracji
2. Upewnij się że `npm run build` się powiódł
3. Restart Cursor

### Problem: "Authorization failed"

**Rozwiązanie:**
1. Sprawdź username i password w `.env`
2. Spróbuj wygenerować nowy API Key w FluentCRM
3. Upewnij się że Manager ma odpowiednie permissions

### Problem: "Connection refused"

**Rozwiązanie:**
1. Sprawdź czy twoja domena WordPress jest dostępna
2. Spróbuj: `curl https://your-domain.com`
3. Sprawdź czy WordPress jest uruchomiony

## ✅ Checklist po Setup

- [ ] npm install - zainstalowano zależności
- [ ] npm run build - kompilacja TypeScript powiedzie​a się
- [ ] .env - ustawiono credentials
- [ ] Cursor MCP config - dodano configurację
- [ ] Cursor restarted - restart Cursor
- [ ] Test Chat - Claude zwrócił listę tagów

## 🚀 Gotowe!

Po ukończeniu wszystkich kroków możesz zacząć używać MCP Server!

Przykłady:
- "Pokaż mi wszystkie tagi"
- "Stwórz tag AW-hot-lead"
- "Przypisz tag AW-progress-75 do jan@example.com"
- "Pokaż statystyki dashboarda"

---

Made with ❤️ by Miłosz Zając
