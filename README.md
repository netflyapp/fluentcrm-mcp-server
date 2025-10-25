# 🚀 FluentCRM MCP Server

**MCP Server dla FluentCRM** - zarządzaj całą automatyzacją marketingową Autowebinaru Korki AI bezpośrednio z poziomu Cursor!

---

## 📋 Spis treści

- [Czym jest MCP Server?](#czym-jest-mcp-server)
- [Wymagania](#wymagania)
- [Instalacja](#instalacja)
- [Konfiguracja](#konfiguracja)
- [Użycie](#użycie)
- [Dostępne narzędzia](#dostępne-narzędzia)
- [Przykłady](#przykłady)
- [Troubleshooting](#troubleshooting)

---

## Czym jest MCP Server?

**MCP** (Model Context Protocol) to nowy standard od Anthropic, który pozwala AI modelom (w tym Claude w Cursor) łączyć się z zewnętrznymi systemami.

Ten MCP Server pozwala Tobie:

✅ **Zarządzać tagami** - tworzyć, usuwać, przypisywać do kontaktów  
✅ **Edytować listy** - tworzyć listy, dodawać/usuwać kontakty  
✅ **Tworzyć kampanie** - wysyłać email do segmentów użytkowników  
✅ **Automatyzacje** - zarządzać funnelami (automatyzacjami)  
✅ **Webhooks** - konfigurować webhook'i do FluentCRM  
✅ **Raporty** - pobierać statystyki i metryki  
✅ **Smart Links** - zarządzać inteligentnymi linkami (gdy API będzie dostępne)

Wszystko bezpośrednio z Cursor, w rozmowie z Claude!

---

## Wymagania

- ✅ Node.js 18+
- ✅ npm lub yarn
- ✅ Dostęp do FluentCRM API (twoja domena WordPress)
- ✅ Cursor z obsługą MCP
- ✅ API Key z FluentCRM (wygeneruj w Settings → Rest API)

---

## Instalacja

### Krok 1: Klonuj repozytorium lub skopiuj pliki

```bash
cd /path/to/your/fluentcrm-mcp-server
```

### Krok 2: Zainstaluj zależności

```bash
npm install
```

### Krok 3: Build TypeScript

```bash
npm run build
```

Powinieneś zobaczyć:
```
✅ dist/fluentcrm-mcp-server.js (compiled)
```

### Krok 4: Testuj połączenie

```bash
export FLUENTCRM_API_USERNAME="your_username"
export FLUENTCRM_API_PASSWORD="your_password"
npm start
```

Powinieneś zobaczyć:
```
🚀 FluentCRM MCP Server running on stdio
📡 API URL: https://your-domain.com/wp-json/fluent-crm/v2
👤 Username: your_username
```

Wciśnij `CTRL+C` aby zatrzymać.

---

## Konfiguracja

### 1. Pobierz API Credentials z FluentCRM

Krokami:

1. Zaloguj się do WordPress: `https://your-domain.com/wp-admin`
2. Przejdź do: **FluentCRM → Settings → Managers**
3. Kliknij **Add New Manager**
4. Wpisz:
   - Name: `MCP Server` (lub coś innego)
   - Role: `Subscriber` (wystarczy)
   - Permissions: Zaznacz wszystkie FluentCRM permissions
5. Kliknij **Save Manager**

6. Przejdź do: **FluentCRM → Settings → Rest API**
7. Kliknij **Create New Key**
8. Wybierz managera którą właśnie stworzyłeś
9. Kliknij **Confirm**
10. Skopiuj:
    - **Username** (API_USERNAME)
    - **Application Password** (API_PASSWORD)

### 2. Ustaw zmienne środowiskowe

**Opcja A: Edytuj `.env` plik**

```bash
# .env
FLUENTCRM_API_USERNAME=your_api_username
FLUENTCRM_API_PASSWORD=your_api_password
FLUENTCRM_API_URL=https://your-domain.com/wp-json/fluent-crm/v2
```

**Opcja B: Export z terminala**

```bash
export FLUENTCRM_API_USERNAME="your_api_username"
export FLUENTCRM_API_PASSWORD="your_api_password"
```

### 3. Konfiguracja Cursor (MCP)

1. Otwórz Cursor
2. Naciśnij `Cmd+Shift+P` (macOS) lub `Ctrl+Shift+P` (Windows/Linux)
3. Wyszukaj: "MCP settings" lub "Preferences: Open MCP Settings"
4. Edytuj plik konfiguracji:

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

5. Zapisz i restart Cursor

---

## Użycie

Po skonfigurowaniu, otwórz chat w Cursor i zacznij zadawać pytania!

### Proste pytania:

```
Pokaż mi wszystkie tagi w FluentCRM
```

Claude automatycznie użyje MCP Server i zwróci listę tagów.

---

## Dostępne narzędzia

### 👤 KONTAKTY (Subscribers)

- `fluentcrm_list_contacts` - Pobiera listę kontaktów
- `fluentcrm_get_contact` - Pobiera szczegóły kontaktu
- `fluentcrm_find_contact_by_email` - Szuka po emailu
- `fluentcrm_create_contact` - Tworzy nowy kontakt
- `fluentcrm_update_contact` - Aktualizuje kontakt
- `fluentcrm_delete_contact` - Usuwa kontakt

### 🏷️ TAGI

- `fluentcrm_list_tags` - Pobiera wszystkie tagi
- `fluentcrm_create_tag` - Tworzy nowy tag
- `fluentcrm_delete_tag` - Usuwa tag
- `fluentcrm_attach_tag_to_contact` - Przypisuje tag do kontaktu
- `fluentcrm_detach_tag_from_contact` - Usuwa tag z kontaktu

### 📋 LISTY

- `fluentcrm_list_lists` - Pobiera wszystkie listy
- `fluentcrm_create_list` - Tworzy nową listę
- `fluentcrm_delete_list` - Usuwa listę
- `fluentcrm_attach_contact_to_list` - Dodaje kontakt do listy
- `fluentcrm_detach_contact_from_list` - Usuwa kontakt z listy

### 📧 KAMPANIE

- `fluentcrm_list_campaigns` - Pobiera kampanie
- `fluentcrm_create_campaign` - Tworzy kampanię
- `fluentcrm_pause_campaign` - Wstrzymuje kampanię
- `fluentcrm_resume_campaign` - Wznawia kampanię
- `fluentcrm_delete_campaign` - Usuwa kampanię

### 📨 EMAIL TEMPLATES

- `fluentcrm_list_email_templates` - Pobiera szablony
- `fluentcrm_create_email_template` - Tworzy szablon

### 🤖 AUTOMATYZACJE

- `fluentcrm_list_automations` - Pobiera automatyzacje (funnels)
- `fluentcrm_create_automation` - Tworzy automatyzację

### 🔗 WEBHOOKS

- `fluentcrm_list_webhooks` - Pobiera webhooks
- `fluentcrm_create_webhook` - Tworzy webhook

### 📊 RAPORTY

- `fluentcrm_dashboard_stats` - Statystyki dashboarda
- `fluentcrm_custom_fields` - Pola niestandardowe

---

## Przykłady

### Przykład 1: Pokaż wszystkie tagi

**W Cursor:**
```
Pokaż mi wszystkie tagi w FluentCRM
```

**Claude zwróci:**
```
✅ Pobieramy tagi z FluentCRM...

Znalazłem następujące tagi:
1. zapisany (ID: 1)
2. webinar-jit (ID: 2)
3. progress-75 (ID: 3)
4. uczestniczyl (ID: 4)
... i 47 więcej
```

### Przykład 2: Stwórz nowy tag

**W Cursor:**
```
Stwórz tag "hot-lead" z opisem "Osoby które obejrzały 75%+ i są zainteresowane"
```

**Claude automatycznie:**
1. Użyje narzędzia `fluentcrm_create_tag`
2. Zwróci potwierdzenie

### Przykład 3: Przypisz tag do kontaktu

**W Cursor:**
```
Przypisz tag "progress-75" do kontaktu z emailem "jan@example.com"
```

**Claude:**
1. Znajdzie kontakt po emailu
2. Przypisze tag
3. Zwróci potwierdzenie

### Przykład 4: Stwórz listę

**W Cursor:**
```
Stwórz nową listę "Hot-leads" z opisem "Uczestnicy którzy obejrzeli 75%+ webinaru"
```

**Claude tworzy listę**

### Przykład 5: Dodaj kontakt do listy

**W Cursor:**
```
Dodaj wszystkie kontakty z tagiem "progress-75" do listy "Hot-leads"
```

---

## Troubleshooting

### ❌ Error: "Authorization failed"

**Przyczyna**: Zły API Username lub Password

**Rozwiązanie:**
1. Przejdź do FluentCRM → Settings → Rest API
2. Sprawdź czy API Key jest aktywny
3. Skopiuj credentials ponownie
4. Aktualizuj `.env` plik

### ❌ Error: "Connection refused"

**Przyczyna**: FluentCRM API niedostępny

**Rozwiązanie:**
1. Sprawdź czy twoja domena WordPress jest dostępna
2. Ping: `ping your-domain.com`
3. Sprawdź czy WordPress jest uruchomiony

### ❌ MCP Server się nie uruchamia

**Przyczyna**: Brakuje zależności

**Rozwiązanie:**
```bash
npm install
npm run build
```

### ❌ Cursor nie widzi MCP Server

**Przyczyna**: Błędna ścieżka do pliku lub brakuje API credentials

**Rozwiązanie:**
1. Sprawdź ścieżkę w konfiguracji MCP (`~/.cursor/settings.json`)
2. Sprawdź czy plik `dist/fluentcrm-mcp-server.js` istnieje
3. Restart Cursor
4. Sprawdź logi: `cat ~/.cursor/logs.txt`

---

## API Reference

Dokumentacja FluentCRM API: [https://rest-api.fluentcrm.com/#introduction](https://rest-api.fluentcrm.com/#introduction)

---

## Bezpieczeństwo

⚠️ **WAŻNE:**

- ❌ **NIGDY** nie commituj `.env` z rzeczywistymi credentials do git
- ❌ **NIGDY** nie udostępniaj API keys publicznie
- ✅ Użyj environment variables zamiast hardkodowania
- ✅ Regularnie rotuj API keys

---

## Aktualizacja

Aby zaktualizować MCP Server:

```bash
cd fluentcrm-mcp-server
git pull  # lub pobierz najnowszą wersję ręcznie
npm install
npm run build
```

Restart Cursor.

---

## Wsparcie

W razie problemów:

1. Sprawdź sekcję [Troubleshooting](#troubleshooting)
2. Sprawdź logi FluentCRM: FluentCRM → Logs
3. Sprawdź logi Cursor: `~/.cursor/logs.txt`
4. Skontaktuj się z supportem

---

## Licencja

MIT

---

## Autor

**Miłosz Zając**  
🌐 [www.netfly.pl](https://www.netfly.pl)
  
**Data**: 2025-01-20  
**Wersja**: 1.0.0

---

Made with ❤️ by Miłosz Zając
EOF

cat > /Users/miloszzajac2/Desktop/111_mac_mini/10_BIZNES/10.01_projekty/10.01.05_autowebinar_korki/12_MCP_fluent_crm/README.md << 'README_EOF'
# 🚀 FluentCRM MCP Server

**MCP Server dla FluentCRM** - zarządzaj całą automatyzacją marketingową Autowebinaru Korki AI bezpośrednio z poziomu Cursor!

## 📋 Spis treści

- [Czym jest MCP Server?](#czym-jest-mcp-server)
- [Wymagania](#wymagania)
- [Szybki start (5 minut)](#szybki-start-5-minut)
- [Instalacja](#instalacja)
- [Użycie](#użycie)

---

## Czym jest MCP Server?

**MCP** (Model Context Protocol) to nowy standard od Anthropic, który pozwala AI modelom (w tym Claude w Cursor) łączyć się z zewnętrznymi systemami.

✅ **Zarządzaj tagami** - bez klikania po FluentCRM  
✅ **Edytuj listy** - dodawaj/usuwaj kontakty  
✅ **Tworzy kampanie** - wysyłaj email do segmentów  
✅ **Zarządzaj automatyzacjami** - edytuj funnels  
✅ **Pobierz raporty** - statystyki i metryki  
✅ **Smart Links** - zarządzaj inteligentnymi linkami  

Wszystko z Cursor, w rozmowie z Claude!

---

## Wymagania

- Node.js 18+
- npm
- Dostęp do FluentCRM API (twoja domena WordPress)
- Cursor z obsługą MCP

---

## Szybki start (5 minut)

### 1️⃣ Pobierz API Credentials

```bash
# Zaloguj się do: https://your-domain.com/wp-admin
# Idź do: FluentCRM → Settings → Rest API
# Kliknij: Create New Key
# Skopiuj: Username i Password
```

### 2️⃣ Zainstaluj zależności

```bash
cd 12_MCP_fluent_crm
npm install
npm run build
```

### 3️⃣ Ustaw zmienne środowiskowe

```bash
# Edytuj .env:
nano .env

# Wklej swoje credentials:
FLUENTCRM_API_USERNAME=your_username
FLUENTCRM_API_PASSWORD=your_password
```

### 4️⃣ Skonfiguruj Cursor

1. Otwórz Cursor Settings (Cmd+,)
2. Szukaj: "MCP"
3. Edytuj `~/.cursor/mcp_settings.json`:

```json
{
  "mcpServers": {
    "fluentcrm": {
      "command": "node",
      "args": [
        "/ścieżka/do/12_MCP_fluent_crm/dist/fluentcrm-mcp-server.js"
      ],
      "env": {
        "FLUENTCRM_API_USERNAME": "your_username",
        "FLUENTCRM_API_PASSWORD": "your_password"
      }
    }
  }
}
```

4. Restart Cursor

### 5️⃣ Testuj w Cursor

W chat napиши:
```
Pokaż mi wszystkie tagi w FluentCRM
```

Claude zwróci listę tagów! ✅

---

## Instalacja

```bash
cd /path/to/your/fluentcrm-mcp-server

npm install
npm run build

# Test:
export FLUENTCRM_API_USERNAME="your_username"
export FLUENTCRM_API_PASSWORD="your_password"
npm start
```

---

## Użycie - Przykłady

### Stwórz tag

```
Stwórz tag "hot-lead" z opisem "Osoby zainteresowane ofertą"
```

### Przypisz tag do kontaktu

```
Przypisz tag "progress-75" do Jan@example.com
```

### Stwórz listę

```
Stwórz listę "Hot-Leads" dla osób z tagiem progress-75
```

### Pokaż statystyki

```
Pokaż mi dashboard statistics z FluentCRM
```

---

## Dostępne narzędzia

**Kontakty**: list, get, create, update, delete, find by email  
**Tagi**: list, create, delete, attach, detach  
**Listy**: list, create, delete, attach contacts, detach contacts  
**Kampanie**: list, create, pause, resume, delete  
**Email Templates**: list, create  
**Automatyzacje**: list, create  
**Webhooks**: list, create  
**Raporty**: dashboard stats, custom fields  

---

## Dokumentacja

- [FluentCRM API](https://rest-api.fluentcrm.com/#introduction)
- [MCP Protocol](https://modelcontextprotocol.io/)

---

Made with ❤️ by Miłosz Zając
