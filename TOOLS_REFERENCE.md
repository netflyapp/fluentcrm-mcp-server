# 📚 FluentCRM MCP Server - Dokumentacja Narzędzi

**Baza wiedzy** - pełna lista dostępnych narzędzi i ich parametrów.

---

## 👤 KONTAKTY (Subscribers)

### fluentcrm_list_contacts
Pobiera listę kontaktów z opcjonalnym paginowaniem

**Parametry:**
- `page` (number, optional): Numer strony
- `per_page` (number, optional): Kontakty na stronę
- `search` (string, optional): Szukaj po emailu/imieniu

**Przykład:**
```
Pokaż mi pierwszych 10 kontaktów
```

### fluentcrm_get_contact
Pobiera szczegóły konkretnego kontaktu

**Parametry:**
- `subscriberId` (number, required): ID kontaktu

**Przykład:**
```
Pobierz szczegóły kontaktu o ID 123
```

### fluentcrm_find_contact_by_email
Wyszukuje kontakt po adresie email

**Parametry:**
- `email` (string, required): Adres email

**Przykład:**
```
Znajdź kontakt jan@example.com
```

### fluentcrm_create_contact
Tworzy nowy kontakt

**Parametry:**
- `email` (string, required): Email
- `first_name` (string): Imię
- `last_name` (string): Nazwisko
- `phone` (string): Telefon
- `city` (string): Miasto
- `country` (string): Kraj

**Przykład:**
```
Utwórz nowy kontakt:
- Email: jan@example.com
- Imię: Jan
- Nazwisko: Kowalski
- Telefon: +48123456789
```

### fluentcrm_update_contact
Aktualizuje dane kontaktu

**Parametry:**
- `subscriberId` (number, required): ID
- `first_name`, `last_name`, `phone`: Dane do zaktualizowania

**Przykład:**
```
Zaktualizuj kontakt 123:
- Nowe imię: Janusz
- Nowy telefon: +48987654321
```

### fluentcrm_delete_contact
Usuwa kontakt

**Parametry:**
- `subscriberId` (number, required): ID do usunięcia

---

## 🏷️ TAGI

### fluentcrm_list_tags
Pobiera wszystkie tagi

**Parametry:**
- `page` (number): Numer strony
- `search` (string): Szukaj tagu

**Przykład:**
```
Pokaż mi wszystkie tagi AW-
```

### fluentcrm_create_tag
Tworzy nowy tag

**Parametry:**
- `title` (string, required): Nazwa tagu (np. "AW-progress-75")
- `slug` (string): Slug (np. "aw-progress-75")
- `description` (string): Opis

**Przykład:**
```
Stwórz tag:
- Nazwa: AW-hot-lead
- Opis: Osoby zainteresowane ofertą
```

### fluentcrm_delete_tag
Usuwa tag

**Parametry:**
- `tagId` (number, required): ID tagu

**Przykład:**
```
Usuń tag o ID 5
```

### fluentcrm_attach_tag_to_contact
Przypisuje tag do kontaktu

**Parametry:**
- `subscriberId` (number, required): ID kontaktu
- `tagIds` (array, required): Lista ID tagów

**Przykład:**
```
Przypisz tag "AW-progress-75" do kontaktu 123
```

### fluentcrm_detach_tag_from_contact
Usuwa tag z kontaktu

**Parametry:**
- `subscriberId` (number, required): ID kontaktu
- `tagIds` (array, required): Lista ID tagów

**Przykład:**
```
Usuń tag "STATUS-reaktywacja" z kontaktu jan@example.com
```

---

## 📋 LISTY

### fluentcrm_list_lists
Pobiera wszystkie listy

**Przykład:**
```
Pokaż mi wszystkie listy w FluentCRM
```

### fluentcrm_create_list
Tworzy nową listę

**Parametry:**
- `title` (string, required): Nazwa listy
- `slug` (string): Slug
- `description` (string): Opis

**Przykład:**
```
Stwórz listę "AW-Hot-Leads" z opisem "Gorące leady"
```

### fluentcrm_delete_list
Usuwa listę

**Parametry:**
- `listId` (number, required): ID listy

### fluentcrm_attach_contact_to_list
Dodaje kontakt do listy

**Parametry:**
- `subscriberId` (number, required): ID kontaktu
- `listIds` (array, required): Lista ID list

**Przykład:**
```
Dodaj kontakt 123 do listy "AW-Hot-Leads"
```

### fluentcrm_detach_contact_from_list
Usuwa kontakt z listy

**Parametry:**
- `subscriberId` (number): ID kontaktu
- `listIds` (array): Lista ID list

---

## 📧 KAMPANIE

### fluentcrm_list_campaigns
Pobiera listę kampanii

**Parametry:**
- `page` (number): Numer strony
- `search` (string): Szukaj kampanii

**Przykład:**
```
Pokaż mi wszystkie kampanie
```

### fluentcrm_create_campaign
Tworzy nową kampanię

**Parametry:**
- `title` (string, required): Tytuł
- `subject` (string, required): Temat emaila
- `template_id` (number): ID szablonu
- `recipient_list` (array): ID list do wysyłki

### fluentcrm_pause_campaign
Wstrzymuje kampanię

**Parametry:**
- `campaignId` (number, required): ID kampanii

**Przykład:**
```
Wstrzymaj kampanię 42
```

### fluentcrm_resume_campaign
Wznawia kampanię

**Parametry:**
- `campaignId` (number, required): ID kampanii

### fluentcrm_delete_campaign
Usuwa kampanię

**Parametry:**
- `campaignId` (number, required): ID kampanii

---

## 📨 EMAIL TEMPLATES

### fluentcrm_list_email_templates
Pobiera szablony emaili

**Przykład:**
```
Pokaż mi wszystkie szablony emaili
```

### fluentcrm_create_email_template
Tworzy nowy szablon

**Parametry:**
- `title` (string, required): Nazwa szablonu
- `subject` (string, required): Temat
- `body` (string, required): Treść HTML

---

## 🤖 AUTOMATYZACJE (Funnels)

### fluentcrm_list_automations
Pobiera automatyzacje

**Parametry:**
- `page` (number): Numer strony
- `search` (string): Szukaj

**Przykład:**
```
Pokaż mi wszystkie automatyzacje
```

### fluentcrm_create_automation
Tworzy nową automatyzację

**Parametry:**
- `title` (string, required): Nazwa
- `trigger` (string, required): Typ triggera
- `description` (string): Opis

**Przykład:**
```
Stwórz automatyzację:
- Nazwa: Follow-up 75%+
- Trigger: tag_applied
```

---

## 🔗 WEBHOOKS

### fluentcrm_list_webhooks
Pobiera webhooks

**Przykład:**
```
Pokaż mi wszystkie webhooks
```

### fluentcrm_create_webhook
Tworzy nowy webhook

**Parametry:**
- `name` (string, required): Nazwa
- `url` (string, required): URL webhook
- `status` (string, required): 'pending' lub 'subscribed'
- `tags` (array): Filtrowanie po tagach
- `lists` (array): Filtrowanie po listach

**Przykład:**
```
Stwórz webhook dla tagów AW-progress-75
```

---

## 🔗 SMART LINKS

### fluentcrm_list_smart_links
Pobiera listę Smart Links (może nie być dostępne w obecnej wersji FluentCRM)

**Parametry:**
- `page` (number): Numer strony
- `search` (string): Szukaj Smart Link

**Przykład:**
```
Pokaż mi wszystkie Smart Links
```

### fluentcrm_get_smart_link
Pobiera szczegóły konkretnego Smart Link

**Parametry:**
- `smartLinkId` (number, required): ID Smart Link

**Przykład:**
```
Pobierz szczegóły Smart Link o ID 5
```

### fluentcrm_create_smart_link
Tworzy nowy Smart Link (może nie być dostępne w obecnej wersji)

**Parametry:**
- `title` (string, required): Nazwa Smart Link (np. "AW-Link-Webinar-Mail")
- `slug` (string): Slug (np. "aw-link-webinar-mail")
- `target_url` (string, required): Docelowy URL
- `apply_tags` (array): ID tagów do dodania po kliknięciu
- `apply_lists` (array): ID list do dodania po kliknięciu
- `remove_tags` (array): ID tagów do usunięcia po kliknięciu
- `remove_lists` (array): ID list do usunięcia po kliknięciu
- `auto_login` (boolean): Czy automatycznie logować użytkownika

**Przykład:**
```
Stwórz Smart Link:
- Nazwa: AW-Link-Webinar-Mail
- URL: https://korkiai.pl/lp/pages/webinar/player.html?email={{contact.email}}
- Tagi do dodania: [1, 2]
```

### fluentcrm_update_smart_link
Aktualizuje Smart Link (może nie być dostępne w obecnej wersji)

**Parametry:**
- `smartLinkId` (number, required): ID Smart Link
- `title`, `target_url`, `apply_tags`, itp.: Dane do zaktualizowania

### fluentcrm_delete_smart_link
Usuwa Smart Link (może nie być dostępne w obecnej wersji)

**Parametry:**
- `smartLinkId` (number, required): ID Smart Link do usunięcia

### fluentcrm_generate_smart_link_shortcode
Generuje shortcode dla Smart Link

**Parametry:**
- `slug` (string, required): Slug Smart Link
- `linkText` (string): Tekst linku (opcjonalny)

**Przykład:**
```
Wygeneruj shortcode dla slug "aw-link-webinar-mail" z tekstem "Przejdź do webinaru"
```

### fluentcrm_validate_smart_link_data
Waliduje dane Smart Link przed utworzeniem

**Parametry:**
- `title` (string, required): Nazwa Smart Link
- `slug` (string): Slug
- `target_url` (string, required): Docelowy URL
- `apply_tags`, `apply_lists`, itp.: Inne parametry

**Przykład:**
```
Sprawdź czy dane Smart Link są poprawne:
- Nazwa: AW-Link-Webinar-Mail
- URL: https://korkiai.pl/lp/pages/webinar/player.html
```

---

## 📊 RAPORTY

### fluentcrm_dashboard_stats
Pobiera statystyki dashboarda

**Przykład:**
```
Pokaż mi statystyki dashboarda
```

### fluentcrm_custom_fields
Pobiera pola niestandardowe

**Przykład:**
```
Jakie custom fields mamy w FluentCRM?
```

---

## 🎯 Praktyczne Scenariusze

### Scenario 1: Utwórz strukturę tagów dla autowebinaru

```
1. Stwórz tag "AW-zapisany"
2. Stwórz tag "AW-progress-75"
3. Stwórz tag "AW-hot-lead"
4. Stwórz tag "STATUS-uczestniczyl"
```

### Scenario 2: Przypisz tagi do konkretnego kontaktu

```
1. Znajdź kontakt jan@example.com
2. Przypisz tag "AW-progress-75"
3. Przypisz tag "AW-hot-lead"
```

### Scenario 3: Stwórz listę hot leadsów

```
1. Stwórz listę "AW-Hot-Leads"
2. Dodaj wszystkie kontakty z tagiem "AW-hot-lead"
3. Wyślij email do tej listy
```

### Scenario 4: Przygotuj Smart Links dla autowebinaru

```
1. Wygeneruj shortcode dla Smart Link webinaru
2. Waliduj dane przed utworzeniem Smart Link
3. Sprawdź czy Smart Links są dostępne w API
```

### Scenario 5: Automatyzacja Smart Links (gdy API będzie dostępne)

```
1. Stwórz Smart Link dla webinaru
2. Stwórz Smart Link dla oferty
3. Stwórz Smart Link dla bonusu
4. Przypisz odpowiednie tagi do każdego linku
```

---

Made with ❤️ for Autowebinar Korki AI
