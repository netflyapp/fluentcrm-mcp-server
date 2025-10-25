# 📝 Changelog - FluentCRM MCP Server

**Historia zmian** w projekcie FluentCRM MCP Server.

---

## [1.1.0] - 2025-01-27

### ✨ Nowe funkcjonalności

#### 🔗 Smart Links Support
- **Dodano metody Smart Links** do FluentCRMClient:
  - `listSmartLinks()` - pobiera listę Smart Links
  - `getSmartLink()` - pobiera szczegóły Smart Link
  - `createSmartLink()` - tworzy nowy Smart Link
  - `updateSmartLink()` - aktualizuje Smart Link
  - `deleteSmartLink()` - usuwa Smart Link
  - `generateSmartLinkShortcode()` - generuje shortcode
  - `validateSmartLinkData()` - waliduje dane

#### 🛠️ Nowe narzędzia MCP
- `fluentcrm_list_smart_links` - lista Smart Links
- `fluentcrm_get_smart_link` - szczegóły Smart Link
- `fluentcrm_create_smart_link` - tworzenie Smart Link
- `fluentcrm_update_smart_link` - aktualizacja Smart Link
- `fluentcrm_delete_smart_link` - usuwanie Smart Link
- `fluentcrm_generate_smart_link_shortcode` - generowanie shortcode
- `fluentcrm_validate_smart_link_data` - walidacja danych

#### 📚 Dokumentacja
- **Zaktualizowano API_REFERENCE.md** - dodano sekcję Smart Links
- **Zaktualizowano TOOLS_REFERENCE.md** - dodano dokumentację narzędzi
- **Utworzono SMART_LINKS_EXAMPLES.md** - przewodnik z przykładami

### 🔧 Ulepszenia techniczne

#### TypeScript
- **Poprawiono typowanie** w switch statement
- **Dodano obsługę błędów** dla nieistniejących endpointów
- **Zaimplementowano graceful fallback** dla API Smart Links

#### Error Handling
- **Inteligentne obsługiwanie błędów 404** - informuje o braku endpointów
- **Helpful error messages** - sugeruje alternatywne rozwiązania
- **Validation helpers** - walidacja danych przed wysłaniem

### ⚠️ Ograniczenia

#### Smart Links API
- **FluentCRM nie ma jeszcze natywnych endpointów** REST API dla Smart Links
- **Narzędzia są przygotowane** na przyszłe rozszerzenia API
- **Obecnie wymagane ręczne tworzenie** przez interfejs FluentCRM

#### Rekomendowane rozwiązania
1. **Ręczne tworzenie** Smart Links przez `FluentCRM → Smart Links`
2. **Używanie wygenerowanych shortcodes** w kampaniach email
3. **Niestandardowe rozszerzenia** WordPress dla API (przyszłość)

### 🎯 Przykłady użycia

#### Generowanie shortcode
```bash
fluentcrm_generate_smart_link_shortcode \
  slug="aw-link-webinar-mail" \
  linkText="Przejdź do webinaru"
```

#### Walidacja danych
```bash
fluentcrm_validate_smart_link_data \
  title="AW-Link-Webinar-Mail" \
  target_url="https://korkiai.pl/lp/pages/webinar/player.html?email={{contact.email}}"
```

#### Sprawdzenie dostępności API
```bash
fluentcrm_list_smart_links
# Zwraca informację o braku endpointów + sugestie
```

---

## [1.0.0] - 2025-01-20

### 🚀 Pierwsza wersja

#### Podstawowe funkcjonalności
- **Kontakty** - CRUD operations
- **Tagi** - zarządzanie tagami
- **Listy** - zarządzanie listami
- **Kampanie** - zarządzanie kampaniami
- **Email Templates** - szablony emaili
- **Automatyzacje** - funnels
- **Webhooks** - zarządzanie webhookami
- **Raporty** - statystyki i custom fields

#### Architektura
- **TypeScript** - pełne typowanie
- **Axios** - HTTP client z Basic Auth
- **Error handling** - obsługa błędów API
- **MCP Protocol** - integracja z Cursor

#### Dokumentacja
- **API_REFERENCE.md** - dokumentacja endpointów
- **TOOLS_REFERENCE.md** - dokumentacja narzędzi
- **README.md** - przewodnik startowy

---

## 🔮 Roadmap

### v1.2.0 (Planowane)
- **Bulk operations** - masowe operacje na kontaktach
- **Advanced filtering** - zaawansowane filtrowanie
- **Custom fields management** - zarządzanie polami niestandardowymi
- **Performance optimizations** - optymalizacje wydajności

### v1.3.0 (Planowane)
- **Smart Links API** - gdy FluentCRM doda endpointy
- **Advanced automations** - zaawansowane automatyzacje
- **Integration hooks** - haki integracyjne
- **Real-time sync** - synchronizacja w czasie rzeczywistym

### v2.0.0 (Długoterminowe)
- **GraphQL support** - obsługa GraphQL
- **WebSocket connections** - połączenia WebSocket
- **Advanced caching** - zaawansowane cache'owanie
- **Multi-tenant support** - obsługa wielu instancji

---

## 📊 Statystyki

### v1.1.0
- **+7 nowych narzędzi** MCP
- **+7 nowych metod** w FluentCRMClient
- **+3 pliki dokumentacji** zaktualizowane
- **+1 nowy plik** z przykładami

### v1.0.0
- **25 narzędzi** MCP
- **25 metod** w FluentCRMClient
- **3 pliki** dokumentacji
- **Pełna integracja** z FluentCRM API

---

**Przygotował**: AI Asystent  
**Data**: 2025-01-27  
**Wersja**: 1.1.0  
**Dla projektu**: Korki AI - FluentCRM MCP Server
