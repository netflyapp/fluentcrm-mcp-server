# 📖 API Reference - FluentCRM

Całkowite linki do dokumentacji FluentCRM REST API na której bazuje ten MCP Server.

---

## 📚 Oficjalna Dokumentacja

### Główna Dokumentacja
- **[FluentCRM REST API](https://rest-api.fluentcrm.com/#introduction)** - Oficjalna dokumentacja
- **[Developers.FluentCRM](https://developers.fluentcrm.com/rest-api)** - Nowa dokumentacja

---

## 🔑 Authentication

Używamy **HTTP Basic Auth** z API Key wygenerowanym w FluentCRM.

**Endpoint do wygenerowania API Key:**
```
FluentCRM → Settings → Rest API → Create New Key
```

**Jak to działa w MCP Server:**
```typescript
// Credentials z .env (nie commituj do git!)
FLUENTCRM_API_USERNAME=your_username
FLUENTCRM_API_PASSWORD=your_password

// Konwersja na Basic Auth
const credentials = Buffer.from(`${username}:${password}`).toString('base64');
Authorization: Basic ${credentials}
```

---

## 📡 Base URL

```
https://your-domain.com/wp-json/fluent-crm/v2
```

---

## 👤 Subscribers (Kontakty)

### Endpoints Dostępne w MCP

| Metoda | Endpoint | MCP Tool |
|--------|----------|----------|
| `GET` | `/subscribers` | `fluentcrm_list_contacts` |
| `GET` | `/subscribers/{id}` | `fluentcrm_get_contact` |
| `POST` | `/subscribers` | `fluentcrm_create_contact` |
| `PUT` | `/subscribers/{id}` | `fluentcrm_update_contact` |
| `DELETE` | `/subscribers/{id}` | `fluentcrm_delete_contact` |

### Dostępne Pola

```json
{
  "id": 123,
  "user_id": 456,
  "first_name": "Jan",
  "last_name": "Kowalski",
  "email": "jan@example.com",
  "phone": "+48123456789",
  "address_line_1": "ul. Gdańska 1",
  "city": "Warszawa",
  "state": "Mazovia",
  "country": "Poland",
  "postal_code": "00-001",
  "timezone": "Europe/Warsaw",
  "status": "subscribed",
  "contact_type": "lead",
  "total_points": 100,
  "life_time_value": 0,
  "tags": [...],
  "lists": [...]
}
```

---

## 🏷️ Tags

### Endpoints Dostępne

| Metoda | Endpoint | MCP Tool |
|--------|----------|----------|
| `GET` | `/tags` | `fluentcrm_list_tags` |
| `POST` | `/tags` | `fluentcrm_create_tag` |
| `PUT` | `/tags/{id}` | (update tag) |
| `DELETE` | `/tags/{id}` | `fluentcrm_delete_tag` |

### Przypisywanie do Kontaktów

```
POST /subscribers/{id}/tags
```
→ `fluentcrm_attach_tag_to_contact`

```
POST /subscribers/{id}/tags/detach
```
→ `fluentcrm_detach_tag_from_contact`

### Tag Schema

```json
{
  "id": 1,
  "title": "AW-progress-75",
  "slug": "aw-progress-75",
  "description": "Obejrzeli 75% webinaru",
  "created_at": "2025-10-20T10:00:00Z",
  "updated_at": "2025-10-20T10:00:00Z"
}
```

---

## 📋 Lists

### Endpoints

| Metoda | Endpoint | MCP Tool |
|--------|----------|----------|
| `GET` | `/lists` | `fluentcrm_list_lists` |
| `POST` | `/lists` | `fluentcrm_create_list` |
| `PUT` | `/lists/{id}` | `fluentcrm_update_list` |
| `DELETE` | `/lists/{id}` | `fluentcrm_delete_list` |

### Przypisywanie Kontaktów

```
POST /subscribers/{id}/lists
```
→ `fluentcrm_attach_contact_to_list`

```
POST /subscribers/{id}/lists/detach
```
→ `fluentcrm_detach_contact_from_list`

---

## 📧 Campaigns

### Endpoints

| Metoda | Endpoint | MCP Tool |
|--------|----------|----------|
| `GET` | `/campaigns` | `fluentcrm_list_campaigns` |
| `POST` | `/campaigns` | `fluentcrm_create_campaign` |
| `POST` | `/campaigns/{id}/pause` | `fluentcrm_pause_campaign` |
| `POST` | `/campaigns/{id}/resume` | `fluentcrm_resume_campaign` |
| `DELETE` | `/campaigns/{id}` | `fluentcrm_delete_campaign` |

### Campaign Object

```json
{
  "id": 1,
  "title": "Follow-up Campaign",
  "subject": "Ostatnia szansa!",
  "status": "active",
  "template_id": 5,
  "recipient_list": [1, 2, 3],
  "created_at": "2025-10-20T10:00:00Z"
}
```

---

## 📨 Email Templates

### Endpoints

| Metoda | Endpoint | MCP Tool |
|--------|----------|----------|
| `GET` | `/email-templates` | `fluentcrm_list_email_templates` |
| `POST` | `/email-templates` | `fluentcrm_create_email_template` |
| `PUT` | `/email-templates/{id}` | `fluentcrm_update_email_template` |
| `DELETE` | `/email-templates/{id}` | `fluentcrm_delete_email_template` |
| `POST` | `/email-templates/{id}/duplicate` | (duplicate) |

---

## 🤖 Automation Funnels

### Endpoints

| Metoda | Endpoint | MCP Tool |
|--------|----------|----------|
| `GET` | `/funnels` | `fluentcrm_list_automations` |
| `POST` | `/funnels` | `fluentcrm_create_automation` |
| `PUT` | `/funnels/{id}` | `fluentcrm_update_automation` |
| `DELETE` | `/funnels/{id}` | `fluentcrm_delete_automation` |

---

## 🔗 Webhooks

### Endpoints

| Metoda | Endpoint | MCP Tool |
|--------|----------|----------|
| `GET` | `/webhooks` | `fluentcrm_list_webhooks` |
| `POST` | `/webhook` | `fluentcrm_create_webhook` |
| `PUT` | `/webhook/{id}` | `fluentcrm_update_webhook` |
| `DELETE` | `/webhook/{id}` | `fluentcrm_delete_webhook` |

### Webhook Object

```json
{
  "id": 1,
  "name": "Autowebinar Webhook",
  "url": "https://example.com/webhook",
  "status": "subscribed",
  "tags": [1, 2, 3],
  "lists": [1, 2]
}
```

---

## 🔗 Smart Links

### Endpoints (Przygotowane na przyszłość)

**UWAGA**: FluentCRM nie ma jeszcze natywnych endpointów REST API dla Smart Links. Narzędzia MCP są przygotowane na przyszłe rozszerzenia API.

| Metoda | Endpoint | MCP Tool | Status |
|--------|----------|----------|--------|
| `GET` | `/smart-links` | `fluentcrm_list_smart_links` | ⚠️ Przygotowane |
| `GET` | `/smart-links/{id}` | `fluentcrm_get_smart_link` | ⚠️ Przygotowane |
| `POST` | `/smart-links` | `fluentcrm_create_smart_link` | ⚠️ Przygotowane |
| `PUT` | `/smart-links/{id}` | `fluentcrm_update_smart_link` | ⚠️ Przygotowane |
| `DELETE` | `/smart-links/{id}` | `fluentcrm_delete_smart_link` | ⚠️ Przygotowane |

### Smart Link Object

```json
{
  "id": 1,
  "title": "AW-Link-Webinar-Mail",
  "slug": "aw-link-webinar-mail",
  "target_url": "https://korkiai.pl/lp/pages/webinar/player.html?email={{contact.email}}",
  "apply_tags": [1, 2],
  "apply_lists": [1],
  "remove_tags": [],
  "remove_lists": [],
  "auto_login": false,
  "created_at": "2025-10-20T10:00:00Z",
  "updated_at": "2025-10-20T10:00:00Z"
}
```

### Helper Tools

| MCP Tool | Opis |
|----------|------|
| `fluentcrm_generate_smart_link_shortcode` | Generuje shortcode dla Smart Link |
| `fluentcrm_validate_smart_link_data` | Waliduje dane przed utworzeniem |

### Przykład Shortcode

```html
<!-- Podstawowy shortcode -->
{{fc_smart_link slug='aw-link-webinar-mail'}}

<!-- Z własnym tekstem -->
<a href="{{fc_smart_link slug='aw-link-webinar-mail'}}">
  Przejdź do webinaru
</a>
```

### Obecne ograniczenia

- **API Endpoints**: Nie są jeszcze dostępne w FluentCRM
- **Zarządzanie**: Tylko przez interfejs FluentCRM (`FluentCRM → Smart Links`)
- **Automatyzacja**: Wymaga ręcznego tworzenia lub niestandardowych rozszerzeń

### Rekomendowane rozwiązania

1. **Ręczne tworzenie** przez interfejs FluentCRM
2. **Niestandardowe rozszerzenie** WordPress dla API
3. **Integracja z zewnętrznymi narzędziami** (WP Fusion, itp.)

---

## 📊 Reports

### Endpoints

| Metoda | Endpoint | MCP Tool |
|--------|----------|----------|
| `GET` | `/reports/dashboard-stats` | `fluentcrm_dashboard_stats` |
| `GET` | `/reports/subscribers-growth-rate` | `fluentcrm_subscribers_growth_rate` |
| `GET` | `/custom-fields` | `fluentcrm_custom_fields` |

---

## 🔍 Query Parameters

### Pagination

```
GET /subscribers?page=1&per_page=20
```

- `page` (int): Numer strony (domyślnie 1)
- `per_page` (int): Kontakty na stronę (domyślnie 10, max 100)

### Search

```
GET /subscribers?search=jan@example.com
```

- `search` (string): Szukaj po email/imieniu

### Filtering

```
GET /subscribers?tags=1,2,3&lists=1,2
```

- `tags` (array): Filtruj po tagach
- `lists` (array): Filtruj po listach

---

## 📋 HTTP Status Codes

| Kod | Znaczenie |
|-----|-----------|
| 200 | OK - Sukces |
| 201 | Created - Zasób stworzony |
| 400 | Bad Request - Błąd w żądaniu |
| 401 | Unauthorized - Brakuje/zły auth |
| 403 | Forbidden - Brak uprawnień |
| 404 | Not Found - Zasób nie istnieje |
| 429 | Too Many Requests - Rate limit |
| 500 | Server Error |

---

## ⚠️ Error Responses

```json
{
  "success": false,
  "message": "Error description",
  "errors": {
    "field": ["Error message"]
  }
}
```

---

## 🚀 Rate Limiting

- **Limit**: 5000 requests per hour
- **Per minute**: ~83 requests per minute

W MCP Server implementujemy:
- 30 sekund timeout per request
- Error handling z retry logic

---

## 📚 Pełne Zasoby

- [REST API Documentation](https://rest-api.fluentcrm.com/#introduction)
- [FluentCRM Docs](https://docs.fluentcrm.com/)
- [WordPress REST API](https://developer.wordpress.org/rest-api/)

---

Made with ❤️ by Miłosz Zając
