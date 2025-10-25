# 🚀 START TUTAJ - Instrukcja 5 Minut

**MCP Server dla FluentCRM** - Zarządzaj marketingiem z Cursor!

---

## ⚡ Szybkie Etapy (5 minut)

### 1️⃣ Pobierz Credentials (1 min)

1. Zaloguj się: `https://your-domain.com/wp-admin`
2. Idź do: **FluentCRM → Settings → Rest API**
3. Kliknij: **Create New Key**
4. Skopiuj: **Username** i **Application Password**

### 2️⃣ Zainstaluj (1 min)

```bash
cd fluentcrm-mcp-server
npm install
npm run build
```

### 3️⃣ Skonfiguruj (2 min)

**Edytuj .env:**
```bash
nano .env
```

**Wklej:**
```env
FLUENTCRM_API_USERNAME=your_username_here
FLUENTCRM_API_PASSWORD=your_password_here
```

Zapisz: `Ctrl+X` → `Y` → `Enter`

### 4️⃣ Setup Cursor (1 min)

1. Otwórz **Cursor**
2. Naciśnij: **Cmd+,** (macOS)
3. Wyszukaj: **"MCP"** lub **"mcp_settings"**
4. Edytuj plik i dodaj:

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

5. Zapisz i **restart Cursor**

### 5️⃣ Testuj (instant!)

W Cursor Chat wpisz:
```
Pokaż mi wszystkie tagi w FluentCRM
```

**Rezultat:** Claude zwróci listę tagów z FluentCRM! ✅

---

## 📚 Pełna Dokumentacja

Po szybkim starcie przeczytaj:

| Dokument | Opis | Czas |
|----------|------|------|
| **README.md** | Ogólny overview | 5 min |
| **SETUP_CURSOR.md** | Szczegółowa konfiguracja | 10 min |
| **TOOLS_REFERENCE.md** | Wszystkie dostępne narzędzia | 15 min |
| **API_REFERENCE.md** | Dokumentacja FluentCRM API | dla reference |
| **PODSUMOWANIE.md** | Pełny overview projektu | 10 min |

---

## 💬 Przykłady Użycia

Po setup'ie w Cursor Chat możesz pisać:

```
Pokaż mi wszystkie tagi
```

```
Stwórz tag AW-hot-lead z opisem "Gorące leady"
```

```
Przypisz tag AW-progress-75 do jan@example.com
```

```
Stwórz listę AW-Hot-Leads
```

```
Pokaż mi statystyki dashboarda
```

Claude automatycznie użyje MCP Server! 🎉

---

## ⚠️ Troubleshooting

### Problem: "MCP server fluentcrm not found"
- Sprawdź ścieżkę w konfiguracji Cursor
- Sprawdź czy `npm run build` się powiódł
- Restart Cursor

### Problem: "Authorization failed"
- Sprawdź username/password w .env
- Wygeneruj nowy API Key w FluentCRM

### Problem: Cursor nie uruchamia się
- Uszkodzony settings.json?
- Sprawdź syntax JSON (bez błędów)

---

## 📝 Struktura Projektu

```
12_MCP_fluent_crm/
├── src/fluentcrm-mcp-server.ts   ← Kod serwera (790 linii)
├── dist/                          ← Kompilowany kod
├── package.json                   ← Zależności
├── .env                           ← EDYTUJ TUTAJ (credentials)
├── .env.example                   ← Template .env
├── README.md                      ← Dokumentacja
├── SETUP_CURSOR.md                ← Setup instrukcja
├── TOOLS_REFERENCE.md             ← Narzędzia
├── API_REFERENCE.md               ← API docs
├── PODSUMOWANIE.md                ← Overview
└── START_TUTAJ.md                 ← Ten plik!
```

---

## ✅ Checklist

- [ ] Pobrano API Credentials z FluentCRM
- [ ] Zainstalowano zależności (`npm install`)
- [ ] Skompilowano kod (`npm run build`)
- [ ] Edytowano `.env` z credentials
- [ ] Skonfigurowano Cursor MCP settings
- [ ] Restarted Cursor
- [ ] Test chat - "Pokaż mi wszystkie tagi"

**Po zaznaczeniu wszystkiego - GOTOWE! 🎉**

---

## 🎯 Co Dalej?

1. **Zaznacz checklist** powyżej
2. **Przeczytaj** SETUP_CURSOR.md dla szczegółów
3. **Eksperymentuj** - Cursor Chat + MCP = power!
4. **Zarządzaj** automatyzacją Autowebinaru!

---

## 💡 Szybkie Komendy

```bash
# Build projekt
npm run build

# Testuj na localhost
export FLUENTCRM_API_USERNAME="your_username"
export FLUENTCRM_API_PASSWORD="your_password"
npm start

# Wyczyść node_modules (jeśli coś się zepsuło)
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 🔐 Bezpieczeństwo

⚠️ **NIGDY nie:**
- Commituj `.env` z real credentials do git
- Udostępniaj API keys publicznie
- Hardkoduj credentials w kodzie

✅ **ZAWSZE:**
- Używaj environment variables
- Rotuj API keys regularnie
- Sprawdzaj `.gitignore`

---

## 📞 Potrzebujesz Pomocy?

1. Sprawdź **SETUP_CURSOR.md**
2. Przeczytaj **TOOLS_REFERENCE.md**
3. Sprawdź FluentCRM docs: https://rest-api.fluentcrm.com/
4. Logi Cursor: `~/.cursor/logs.txt`

---

## 🎉 Gotowy!

Teraz możesz zarządzać całą automatyzacją marketingową bezpośrednio z Cursor!

**Zabawy! 🚀**

---

Made with ❤️ by Miłosz Zając
