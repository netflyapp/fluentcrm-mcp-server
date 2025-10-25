# 🔗 Smart Links - Przykłady Użycia MCP

**Przewodnik** - jak używać nowych narzędzi Smart Links w MCP Server FluentCRM.

---

## 🚀 Szybki Start

### 1. Sprawdź dostępność Smart Links API

```bash
# Sprawdź czy FluentCRM ma endpointy Smart Links
fluentcrm_list_smart_links
```

**Oczekiwany wynik** (jeśli API nie jest dostępne):
```json
{
  "success": false,
  "message": "Smart Links API endpoint not available yet in FluentCRM",
  "suggestion": "Use FluentCRM admin panel to manage Smart Links manually"
}
```

### 2. Wygeneruj shortcode dla Smart Link

```bash
# Podstawowy shortcode
fluentcrm_generate_smart_link_shortcode slug="aw-link-webinar-mail"

# Z własnym tekstem
fluentcrm_generate_smart_link_shortcode slug="aw-link-webinar-mail" linkText="Przejdź do webinaru"
```

**Wynik:**
```json
{
  "shortcode": "<a href=\"{{fc_smart_link slug='aw-link-webinar-mail'}}\">Przejdź do webinaru</a>"
}
```

### 3. Waliduj dane Smart Link

```bash
fluentcrm_validate_smart_link_data title="AW-Link-Webinar-Mail" target_url="https://korkiai.pl/lp/pages/webinar/player.html?email={{contact.email}}"
```

**Wynik:**
```json
{
  "valid": true,
  "errors": []
}
```

---

## 📋 Przykłady Smart Links dla Autowebinaru

### Smart Link #1: Webinar - wejście z maila

```bash
# Waliduj dane
fluentcrm_validate_smart_link_data \
  title="AW-Link-Webinar-Mail" \
  slug="aw-link-webinar-mail" \
  target_url="https://korkiai.pl/lp/pages/webinar/player.html?email={{contact.email}}"

# Wygeneruj shortcode
fluentcrm_generate_smart_link_shortcode \
  slug="aw-link-webinar-mail" \
  linkText="Przejdź do webinaru"
```

**HTML do użycia w mailu:**
```html
<a href="{{fc_smart_link slug='aw-link-webinar-mail'}}">
  Przejdź do webinaru
</a>
```

### Smart Link #2: Oferta - followup

```bash
# Waliduj dane
fluentcrm_validate_smart_link_data \
  title="AW-Link-Oferta-Followup" \
  slug="aw-link-oferta-followup" \
  target_url="https://korkiai.pl/autowebinar/oferta?email={{contact.email}}&utm_source=email&utm_campaign=aw-followup"

# Wygeneruj shortcode
fluentcrm_generate_smart_link_shortcode \
  slug="aw-link-oferta-followup" \
  linkText="Chcę dołączyć do kursu Korki AI →"
```

### Smart Link #3: Bonus - 20 promptów

```bash
# Waliduj dane
fluentcrm_validate_smart_link_data \
  title="AW-Link-Bonus-20-Promptow" \
  slug="aw-link-bonus-20-promptow" \
  target_url="https://korkiai.pl/bonusy/20-promptow-chatgpt.pdf"

# Wygeneruj shortcode
fluentcrm_generate_smart_link_shortcode \
  slug="aw-link-bonus-20-promptow" \
  linkText="Pobierz 20 promptów →"
```

---

## 🎯 Scenariusze Praktyczne

### Scenariusz 1: Przygotowanie Smart Links dla kampanii

```bash
# 1. Sprawdź dostępność API
fluentcrm_list_smart_links

# 2. Przygotuj wszystkie Smart Links
fluentcrm_validate_smart_link_data \
  title="AW-Link-Webinar-Mail" \
  target_url="https://korkiai.pl/lp/pages/webinar/player.html?email={{contact.email}}"

fluentcrm_validate_smart_link_data \
  title="AW-Link-Oferta-Followup" \
  target_url="https://korkiai.pl/autowebinar/oferta?email={{contact.email}}"

fluentcrm_validate_smart_link_data \
  title="AW-Link-Bonus-20-Promptow" \
  target_url="https://korkiai.pl/bonusy/20-promptow-chatgpt.pdf"

# 3. Wygeneruj shortcodes
fluentcrm_generate_smart_link_shortcode slug="aw-link-webinar-mail" linkText="Przejdź do webinaru"
fluentcrm_generate_smart_link_shortcode slug="aw-link-oferta-followup" linkText="Chcę dołączyć do kursu →"
fluentcrm_generate_smart_link_shortcode slug="aw-link-bonus-20-promptow" linkText="Pobierz bonus →"
```

### Scenariusz 2: Testowanie Smart Links

```bash
# 1. Sprawdź czy Smart Links są dostępne
fluentcrm_list_smart_links

# 2. Jeśli API jest dostępne, stwórz testowy Smart Link
fluentcrm_create_smart_link \
  title="Test-Smart-Link" \
  slug="test-smart-link" \
  target_url="https://example.com/test" \
  apply_tags="[1,2]"

# 3. Sprawdź szczegóły
fluentcrm_get_smart_link smartLinkId=1

# 4. Usuń testowy link
fluentcrm_delete_smart_link smartLinkId=1
```

### Scenariusz 3: Masowe tworzenie Smart Links (gdy API będzie dostępne)

```bash
# Lista Smart Links do utworzenia
SMART_LINKS=(
  "AW-Link-Webinar-Mail:aw-link-webinar-mail:https://korkiai.pl/lp/pages/webinar/player.html?email={{contact.email}}"
  "AW-Link-Oferta-Followup:aw-link-oferta-followup:https://korkiai.pl/autowebinar/oferta?email={{contact.email}}"
  "AW-Link-Bonus-20-Promptow:aw-link-bonus-20-promptow:https://korkiai.pl/bonusy/20-promptow-chatgpt.pdf"
  "AW-Link-Pakiet-Premium:aw-link-pakiet-premium:https://korkiai.pl/autowebinar/oferta?pkg=premium&email={{contact.email}}"
  "AW-Link-Pakiet-VIP:aw-link-pakiet-vip:https://korkiai.pl/autowebinar/oferta?pkg=vip&email={{contact.email}}"
)

# Utwórz wszystkie Smart Links
for link in "${SMART_LINKS[@]}"; do
  IFS=':' read -r title slug url <<< "$link"
  fluentcrm_create_smart_link \
    title="$title" \
    slug="$slug" \
    target_url="$url"
done
```

---

## 🔧 Narzędzia Pomocnicze

### Walidacja danych

```bash
# Sprawdź poprawność URL
fluentcrm_validate_smart_link_data \
  title="Test" \
  target_url="invalid-url"

# Sprawdź poprawność slug
fluentcrm_validate_smart_link_data \
  title="Test" \
  slug="Invalid Slug!" \
  target_url="https://example.com"
```

### Generowanie shortcodes

```bash
# Podstawowy shortcode
fluentcrm_generate_smart_link_shortcode slug="my-link"

# Z tekstem
fluentcrm_generate_smart_link_shortcode slug="my-link" linkText="Kliknij tutaj"

# Dla przycisku
fluentcrm_generate_smart_link_shortcode slug="my-link" linkText="Kup teraz →"
```

---

## 📊 Monitoring i Debugging

### Sprawdź status API

```bash
# Sprawdź czy endpointy są dostępne
fluentcrm_list_smart_links

# Sprawdź konkretny Smart Link
fluentcrm_get_smart_link smartLinkId=1
```

### Testowanie shortcodes

```bash
# Wygeneruj shortcode
fluentcrm_generate_smart_link_shortcode slug="test-link" linkText="Test"

# Skopiuj wynik do maila i przetestuj
```

---

## 🚨 Troubleshooting

### Problem: "API endpoint not available"

**Rozwiązanie:**
1. Użyj interfejsu FluentCRM (`FluentCRM → Smart Links`)
2. Stwórz Smart Links ręcznie
3. Użyj wygenerowanych shortcodes w mailach

### Problem: Błąd walidacji

**Sprawdź:**
- Czy URL zaczyna się od `http://` lub `https://`
- Czy slug zawiera tylko małe litery, cyfry i myślniki
- Czy title nie jest pusty

### Problem: Shortcode nie działa

**Sprawdź:**
- Czy Smart Link istnieje w FluentCRM
- Czy slug jest poprawny
- Czy FluentCRM ma włączone Smart Links

---

## 📚 Przydatne Linki

- [Dokumentacja Smart Links FluentCRM](https://fluentcrm.com/docs/global-smartlinks-settings/)
- [Przykłady shortcodes](https://fluentcrm.com/docs/smart-links-shortcodes/)
- [Konfiguracja dla autowebinaru](../../11_automatyzacja%20maili/SMART-LINKS-konfiguracja.md)

---

**Przygotował**: AI Asystent  
**Data**: 2025-01-27  
**Wersja**: 1.0  
**Dla projektu**: Korki AI - Smart Links MCP Integration
