#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import axios, { AxiosInstance } from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const FLUENTCRM_API_URL = process.env.FLUENTCRM_API_URL || 'https://your-domain.com/wp-json/fluent-crm/v2';
const FLUENTCRM_API_USERNAME = process.env.FLUENTCRM_API_USERNAME || '';
const FLUENTCRM_API_PASSWORD = process.env.FLUENTCRM_API_PASSWORD || '';

/**
 * FluentCRM API Client
 * Based on: https://rest-api.fluentcrm.com/#introduction
 */
class FluentCRMClient {
  private apiClient: AxiosInstance;
  private baseURL: string;

  constructor(baseURL: string, username: string, password: string) {
    this.baseURL = baseURL;
    
    // Basic Auth dla FluentCRM API
    const credentials = Buffer.from(`${username}:${password}`).toString('base64');
    
    this.apiClient = axios.create({
      baseURL,
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      timeout: 30000,
    });

    // Error interceptor
    this.apiClient.interceptors.response.use(
      response => response,
      error => {
        const message = error.response?.data?.message || error.message;
        throw new Error(`FluentCRM API Error: ${message}`);
      }
    );
  }

  // ===== SUBSCRIBERS / KONTAKTY =====
  
  async listContacts(params: any = {}) {
    const response = await this.apiClient.get('/subscribers', { params });
    return response.data;
  }

  async getContact(subscriberId: number) {
    const response = await this.apiClient.get(`/subscribers/${subscriberId}`);
    return response.data;
  }

  async findContactByEmail(email: string) {
    const response = await this.apiClient.get('/subscribers', {
      params: { search: email },
    });
    return response.data.data?.[0] || null;
  }

  async createContact(data: {
    email: string;
    first_name?: string;
    last_name?: string;
    phone?: string;
    address_line_1?: string;
    city?: string;
    state?: string;
    country?: string;
    postal_code?: string;
    [key: string]: any;
  }) {
    const response = await this.apiClient.post('/subscribers', data);
    return response.data;
  }

  async updateContact(subscriberId: number, data: any) {
    const response = await this.apiClient.put(`/subscribers/${subscriberId}`, data);
    return response.data;
  }

  async deleteContact(subscriberId: number) {
    const response = await this.apiClient.delete(`/subscribers/${subscriberId}`);
    return response.data;
  }

  // ===== TAGI =====

  async listTags(params: any = {}) {
    const response = await this.apiClient.get('/tags', { params });
    return response.data;
  }

  async getTag(tagId: number) {
    const response = await this.apiClient.get(`/tags/${tagId}`);
    return response.data;
  }

  async createTag(data: {
    title: string;
    slug?: string;
    description?: string;
  }) {
    const response = await this.apiClient.post('/tags', data);
    return response.data;
  }

  async updateTag(tagId: number, data: any) {
    const response = await this.apiClient.put(`/tags/${tagId}`, data);
    return response.data;
  }

  async deleteTag(tagId: number) {
    const response = await this.apiClient.delete(`/tags/${tagId}`);
    return response.data;
  }

  async attachTagToContact(subscriberId: number, tagIds: number[]) {
    const response = await this.apiClient.post(
      `/subscribers/${subscriberId}/tags`,
      { tags: tagIds }
    );
    return response.data;
  }

  async detachTagFromContact(subscriberId: number, tagIds: number[]) {
    const response = await this.apiClient.post(
      `/subscribers/${subscriberId}/tags/detach`,
      { tags: tagIds }
    );
    return response.data;
  }

  // ===== LISTY =====

  async listLists(params: any = {}) {
    const response = await this.apiClient.get('/lists', { params });
    return response.data;
  }

  async getList(listId: number) {
    const response = await this.apiClient.get(`/lists/${listId}`);
    return response.data;
  }

  async createList(data: {
    title: string;
    slug?: string;
    description?: string;
  }) {
    const response = await this.apiClient.post('/lists', data);
    return response.data;
  }

  async updateList(listId: number, data: any) {
    const response = await this.apiClient.put(`/lists/${listId}`, data);
    return response.data;
  }

  async deleteList(listId: number) {
    const response = await this.apiClient.delete(`/lists/${listId}`);
    return response.data;
  }

  async attachContactToList(subscriberId: number, listIds: number[]) {
    const response = await this.apiClient.post(
      `/subscribers/${subscriberId}/lists`,
      { lists: listIds }
    );
    return response.data;
  }

  async detachContactFromList(subscriberId: number, listIds: number[]) {
    const response = await this.apiClient.post(
      `/subscribers/${subscriberId}/lists/detach`,
      { lists: listIds }
    );
    return response.data;
  }

  // ===== KAMPANIE =====

  async listCampaigns(params: any = {}) {
    const response = await this.apiClient.get('/campaigns', { params });
    return response.data;
  }

  async getCampaign(campaignId: number) {
    const response = await this.apiClient.get(`/campaigns/${campaignId}`);
    return response.data;
  }

  async createCampaign(data: any) {
    const response = await this.apiClient.post('/campaigns', data);
    return response.data;
  }

  async updateCampaign(campaignId: number, data: any) {
    const response = await this.apiClient.put(`/campaigns/${campaignId}`, data);
    return response.data;
  }

  async pauseCampaign(campaignId: number) {
    const response = await this.apiClient.post(`/campaigns/${campaignId}/pause`);
    return response.data;
  }

  async resumeCampaign(campaignId: number) {
    const response = await this.apiClient.post(`/campaigns/${campaignId}/resume`);
    return response.data;
  }

  async deleteCampaign(campaignId: number) {
    const response = await this.apiClient.delete(`/campaigns/${campaignId}`);
    return response.data;
  }

  // ===== EMAIL TEMPLATES =====

  async listEmailTemplates(params: any = {}) {
    const response = await this.apiClient.get('/email-templates', { params });
    return response.data;
  }

  async getEmailTemplate(templateId: number) {
    const response = await this.apiClient.get(`/email-templates/${templateId}`);
    return response.data;
  }

  async createEmailTemplate(data: any) {
    const response = await this.apiClient.post('/email-templates', data);
    return response.data;
  }

  async updateEmailTemplate(templateId: number, data: any) {
    const response = await this.apiClient.put(`/email-templates/${templateId}`, data);
    return response.data;
  }

  async deleteEmailTemplate(templateId: number) {
    const response = await this.apiClient.delete(`/email-templates/${templateId}`);
    return response.data;
  }

  // ===== AUTOMATION FUNNELS =====

  async listAutomations(params: any = {}) {
    const response = await this.apiClient.get('/funnels', { params });
    return response.data;
  }

  async getAutomation(funnelId: number) {
    const response = await this.apiClient.get(`/funnels/${funnelId}`);
    return response.data;
  }

  async createAutomation(data: any) {
    const response = await this.apiClient.post('/funnels', data);
    return response.data;
  }

  async updateAutomation(funnelId: number, data: any) {
    const response = await this.apiClient.put(`/funnels/${funnelId}`, data);
    return response.data;
  }

  async deleteAutomation(funnelId: number) {
    const response = await this.apiClient.delete(`/funnels/${funnelId}`);
    return response.data;
  }

  // ===== WEBHOOKS =====

  async listWebhooks(params: any = {}) {
    const response = await this.apiClient.get('/webhooks', { params });
    return response.data;
  }

  async createWebhook(data: {
    name: string;
    status: 'pending' | 'subscribed';
    url: string;
    tags?: number[];
    lists?: number[];
  }) {
    const response = await this.apiClient.post('/webhook', data);
    return response.data;
  }

  async updateWebhook(webhookId: number, data: any) {
    const response = await this.apiClient.put(`/webhook/${webhookId}`, data);
    return response.data;
  }

  async deleteWebhook(webhookId: number) {
    const response = await this.apiClient.delete(`/webhook/${webhookId}`);
    return response.data;
  }

  // ===== CUSTOM FIELDS =====

  async listCustomFields() {
    const response = await this.apiClient.get('/custom-fields');
    return response.data;
  }

  // ===== SMART LINKS =====
  // Note: FluentCRM doesn't have native REST API for Smart Links yet
  // These methods prepare for future API or work with existing endpoints

  async listSmartLinks(params: any = {}) {
    // Try to get smart links - this might not work until FluentCRM adds the endpoint
    try {
      const response = await this.apiClient.get('/smart-links', { params });
      return response.data;
    } catch (error: any) {
      // If endpoint doesn't exist, return helpful message
      if (error.response?.status === 404) {
        return {
          success: false,
          message: "Smart Links API endpoint not available yet in FluentCRM",
          suggestion: "Use FluentCRM admin panel to manage Smart Links manually",
          available_endpoints: [
            "FluentCRM → Smart Links (admin panel)",
            "Custom WordPress hooks for Smart Links"
          ]
        };
      }
      throw error;
    }
  }

  async getSmartLink(smartLinkId: number) {
    try {
      const response = await this.apiClient.get(`/smart-links/${smartLinkId}`);
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 404) {
        return {
          success: false,
          message: "Smart Links API endpoint not available yet in FluentCRM",
          suggestion: "Use FluentCRM admin panel to view Smart Link details"
        };
      }
      throw error;
    }
  }

  async createSmartLink(data: {
    title: string;
    slug?: string;
    target_url: string;
    apply_tags?: number[];
    apply_lists?: number[];
    remove_tags?: number[];
    remove_lists?: number[];
    auto_login?: boolean;
  }) {
    try {
      const response = await this.apiClient.post('/smart-links', data);
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 404) {
        return {
          success: false,
          message: "Smart Links API endpoint not available yet in FluentCRM",
          suggestion: "Create Smart Link manually in FluentCRM admin panel",
          recommended_data: data
        };
      }
      throw error;
    }
  }

  async updateSmartLink(smartLinkId: number, data: any) {
    try {
      const response = await this.apiClient.put(`/smart-links/${smartLinkId}`, data);
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 404) {
        return {
          success: false,
          message: "Smart Links API endpoint not available yet in FluentCRM",
          suggestion: "Update Smart Link manually in FluentCRM admin panel"
        };
      }
      throw error;
    }
  }

  async deleteSmartLink(smartLinkId: number) {
    try {
      const response = await this.apiClient.delete(`/smart-links/${smartLinkId}`);
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 404) {
        return {
          success: false,
          message: "Smart Links API endpoint not available yet in FluentCRM",
          suggestion: "Delete Smart Link manually in FluentCRM admin panel"
        };
      }
      throw error;
    }
  }

  // Helper method to generate Smart Link shortcode
  generateSmartLinkShortcode(slug: string, linkText?: string): string {
    if (linkText) {
      return `<a href="{{fc_smart_link slug='${slug}'}}">${linkText}</a>`;
    }
    return `{{fc_smart_link slug='${slug}'}}`;
  }

  // Helper method to validate Smart Link data
  validateSmartLinkData(data: any): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (!data.title || typeof data.title !== 'string') {
      errors.push('Title is required and must be a string');
    }
    
    if (!data.target_url || typeof data.target_url !== 'string') {
      errors.push('Target URL is required and must be a string');
    }
    
    if (data.target_url && !data.target_url.startsWith('http')) {
      errors.push('Target URL must start with http:// or https://');
    }
    
    if (data.slug && !/^[a-z0-9-]+$/.test(data.slug)) {
      errors.push('Slug must contain only lowercase letters, numbers, and hyphens');
    }
    
    return {
      valid: errors.length === 0,
      errors
    };
  }

  // ===== REPORTS =====

  async getDashboardStats() {
    const response = await this.apiClient.get('/reports/dashboard-stats');
    return response.data;
  }

  async getSubscribersGrowthRate(params: any = {}) {
    const response = await this.apiClient.get('/reports/subscribers-growth-rate', { params });
    return response.data;
  }
}

// ===== MCP SERVER SETUP =====

const server = new Server(
  {
    name: 'fluentcrm-mcp',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

const client = new FluentCRMClient(
  FLUENTCRM_API_URL,
  FLUENTCRM_API_USERNAME,
  FLUENTCRM_API_PASSWORD
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      // ===== KONTAKTY =====
      {
        name: 'fluentcrm_list_contacts',
        description: 'Pobiera listę wszystkich kontaktów z FluentCRM',
        inputSchema: {
          type: 'object',
          properties: {
            page: { type: 'number', description: 'Numer strony (default: 1)' },
            per_page: { type: 'number', description: 'Ilość rekordów na stronę (default: 10)' },
            search: { type: 'string', description: 'Szukaj po emailu/imieniu' },
          },
        },
      },
      {
        name: 'fluentcrm_get_contact',
        description: 'Pobiera szczegóły konkretnego kontaktu',
        inputSchema: {
          type: 'object',
          properties: {
            subscriberId: { type: 'number', description: 'ID kontaktu' },
          },
          required: ['subscriberId'],
        },
      },
      {
        name: 'fluentcrm_find_contact_by_email',
        description: 'Wyszukuje kontakt po adresie email',
        inputSchema: {
          type: 'object',
          properties: {
            email: { type: 'string', description: 'Adres email' },
          },
          required: ['email'],
        },
      },
      {
        name: 'fluentcrm_create_contact',
        description: 'Tworzy nowy kontakt w FluentCRM',
        inputSchema: {
          type: 'object',
          properties: {
            email: { type: 'string', description: 'Email kontaktu' },
            first_name: { type: 'string', description: 'Imię' },
            last_name: { type: 'string', description: 'Nazwisko' },
            phone: { type: 'string', description: 'Numer telefonu' },
            address_line_1: { type: 'string', description: 'Adres' },
            city: { type: 'string', description: 'Miasto' },
            country: { type: 'string', description: 'Kraj' },
          },
          required: ['email'],
        },
      },
      {
        name: 'fluentcrm_update_contact',
        description: 'Aktualizuje dane kontaktu',
        inputSchema: {
          type: 'object',
          properties: {
            subscriberId: { type: 'number', description: 'ID kontaktu' },
            first_name: { type: 'string' },
            last_name: { type: 'string' },
            phone: { type: 'string' },
          },
          required: ['subscriberId'],
        },
      },
      {
        name: 'fluentcrm_delete_contact',
        description: 'Usuwa kontakt z FluentCRM',
        inputSchema: {
          type: 'object',
          properties: {
            subscriberId: { type: 'number', description: 'ID kontaktu do usunięcia' },
          },
          required: ['subscriberId'],
        },
      },

      // ===== TAGI =====
      {
        name: 'fluentcrm_list_tags',
        description: 'Pobiera wszystkie tagi z FluentCRM',
        inputSchema: {
          type: 'object',
          properties: {
            page: { type: 'number', description: 'Numer strony' },
            search: { type: 'string', description: 'Szukaj tagu' },
          },
        },
      },
      {
        name: 'fluentcrm_create_tag',
        description: 'Tworzy nowy tag w FluentCRM',
        inputSchema: {
          type: 'object',
          properties: {
            title: { type: 'string', description: 'Nazwa tagu (np. "AW-progress-75")' },
            slug: { type: 'string', description: 'Slug tagu (np. "aw-progress-75")' },
            description: { type: 'string', description: 'Opis tagu' },
          },
          required: ['title'],
        },
      },
      {
        name: 'fluentcrm_delete_tag',
        description: 'Usuwa tag z FluentCRM',
        inputSchema: {
          type: 'object',
          properties: {
            tagId: { type: 'number', description: 'ID tagu' },
          },
          required: ['tagId'],
        },
      },
      {
        name: 'fluentcrm_attach_tag_to_contact',
        description: 'Przypisuje tag do kontaktu',
        inputSchema: {
          type: 'object',
          properties: {
            subscriberId: { type: 'number', description: 'ID kontaktu' },
            tagIds: { type: 'array', items: { type: 'number' }, description: 'Lista ID tagów' },
          },
          required: ['subscriberId', 'tagIds'],
        },
      },
      {
        name: 'fluentcrm_detach_tag_from_contact',
        description: 'Usuwa tag z kontaktu',
        inputSchema: {
          type: 'object',
          properties: {
            subscriberId: { type: 'number', description: 'ID kontaktu' },
            tagIds: { type: 'array', items: { type: 'number' }, description: 'Lista ID tagów' },
          },
          required: ['subscriberId', 'tagIds'],
        },
      },

      // ===== LISTY =====
      {
        name: 'fluentcrm_list_lists',
        description: 'Pobiera wszystkie listy z FluentCRM',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'fluentcrm_create_list',
        description: 'Tworzy nową listę w FluentCRM',
        inputSchema: {
          type: 'object',
          properties: {
            title: { type: 'string', description: 'Nazwa listy' },
            slug: { type: 'string', description: 'Slug listy' },
            description: { type: 'string', description: 'Opis listy' },
          },
          required: ['title'],
        },
      },
      {
        name: 'fluentcrm_delete_list',
        description: 'Usuwa listę z FluentCRM',
        inputSchema: {
          type: 'object',
          properties: {
            listId: { type: 'number', description: 'ID listy' },
          },
          required: ['listId'],
        },
      },
      {
        name: 'fluentcrm_attach_contact_to_list',
        description: 'Przypisuje kontakt do listy',
        inputSchema: {
          type: 'object',
          properties: {
            subscriberId: { type: 'number', description: 'ID kontaktu' },
            listIds: { type: 'array', items: { type: 'number' }, description: 'Lista ID list' },
          },
          required: ['subscriberId', 'listIds'],
        },
      },
      {
        name: 'fluentcrm_detach_contact_from_list',
        description: 'Usuwa kontakt z listy',
        inputSchema: {
          type: 'object',
          properties: {
            subscriberId: { type: 'number', description: 'ID kontaktu' },
            listIds: { type: 'array', items: { type: 'number' }, description: 'Lista ID list' },
          },
          required: ['subscriberId', 'listIds'],
        },
      },

      // ===== KAMPANIE =====
      {
        name: 'fluentcrm_list_campaigns',
        description: 'Pobiera listę kampanii email',
        inputSchema: {
          type: 'object',
          properties: {
            page: { type: 'number' },
            search: { type: 'string' },
          },
        },
      },
      {
        name: 'fluentcrm_create_campaign',
        description: 'Tworzy nową kampanię email',
        inputSchema: {
          type: 'object',
          properties: {
            title: { type: 'string', description: 'Tytuł kampanii' },
            subject: { type: 'string', description: 'Temat emaila' },
            template_id: { type: 'number', description: 'ID szablonu' },
            recipient_list: { type: 'array', items: { type: 'number' }, description: 'ID list' },
          },
          required: ['title', 'subject'],
        },
      },
      {
        name: 'fluentcrm_pause_campaign',
        description: 'Wstrzymuje kampanię',
        inputSchema: {
          type: 'object',
          properties: {
            campaignId: { type: 'number', description: 'ID kampanii' },
          },
          required: ['campaignId'],
        },
      },
      {
        name: 'fluentcrm_resume_campaign',
        description: 'Wznawia kampanię',
        inputSchema: {
          type: 'object',
          properties: {
            campaignId: { type: 'number', description: 'ID kampanii' },
          },
          required: ['campaignId'],
        },
      },
      {
        name: 'fluentcrm_delete_campaign',
        description: 'Usuwa kampanię',
        inputSchema: {
          type: 'object',
          properties: {
            campaignId: { type: 'number', description: 'ID kampanii' },
          },
          required: ['campaignId'],
        },
      },

      // ===== EMAIL TEMPLATES =====
      {
        name: 'fluentcrm_list_email_templates',
        description: 'Pobiera szablony email',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'fluentcrm_create_email_template',
        description: 'Tworzy nowy szablon email',
        inputSchema: {
          type: 'object',
          properties: {
            title: { type: 'string', description: 'Nazwa szablonu' },
            subject: { type: 'string', description: 'Temat' },
            body: { type: 'string', description: 'Treść HTML' },
          },
          required: ['title', 'subject', 'body'],
        },
      },

      // ===== AUTOMATYZACJE =====
      {
        name: 'fluentcrm_list_automations',
        description: 'Pobiera automatyzacje (funnels)',
        inputSchema: {
          type: 'object',
          properties: {
            page: { type: 'number' },
            search: { type: 'string' },
          },
        },
      },
      {
        name: 'fluentcrm_create_automation',
        description: 'Tworzy nową automatyzację',
        inputSchema: {
          type: 'object',
          properties: {
            title: { type: 'string', description: 'Nazwa automatyzacji' },
            description: { type: 'string' },
            trigger: { type: 'string', description: 'Typ triggera' },
          },
          required: ['title', 'trigger'],
        },
      },

      // ===== WEBHOOKS =====
      {
        name: 'fluentcrm_list_webhooks',
        description: 'Pobiera webhooks',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'fluentcrm_create_webhook',
        description: 'Tworzy nowy webhook',
        inputSchema: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Nazwa webhook' },
            url: { type: 'string', description: 'URL webhook' },
            status: { type: 'string', enum: ['pending', 'subscribed'] },
            tags: { type: 'array', items: { type: 'number' } },
            lists: { type: 'array', items: { type: 'number' } },
          },
          required: ['name', 'url', 'status'],
        },
      },

      // ===== SMART LINKS =====
      {
        name: 'fluentcrm_list_smart_links',
        description: 'Pobiera listę Smart Links z FluentCRM (może nie być dostępne w obecnej wersji)',
        inputSchema: {
          type: 'object',
          properties: {
            page: { type: 'number', description: 'Numer strony' },
            search: { type: 'string', description: 'Szukaj Smart Link' },
          },
        },
      },
      {
        name: 'fluentcrm_get_smart_link',
        description: 'Pobiera szczegóły konkretnego Smart Link',
        inputSchema: {
          type: 'object',
          properties: {
            smartLinkId: { type: 'number', description: 'ID Smart Link' },
          },
          required: ['smartLinkId'],
        },
      },
      {
        name: 'fluentcrm_create_smart_link',
        description: 'Tworzy nowy Smart Link (może nie być dostępne w obecnej wersji)',
        inputSchema: {
          type: 'object',
          properties: {
            title: { type: 'string', description: 'Nazwa Smart Link (np. "AW-Link-Webinar-Mail")' },
            slug: { type: 'string', description: 'Slug (np. "aw-link-webinar-mail")' },
            target_url: { type: 'string', description: 'Docelowy URL' },
            apply_tags: { type: 'array', items: { type: 'number' }, description: 'ID tagów do dodania po kliknięciu' },
            apply_lists: { type: 'array', items: { type: 'number' }, description: 'ID list do dodania po kliknięciu' },
            remove_tags: { type: 'array', items: { type: 'number' }, description: 'ID tagów do usunięcia po kliknięciu' },
            remove_lists: { type: 'array', items: { type: 'number' }, description: 'ID list do usunięcia po kliknięciu' },
            auto_login: { type: 'boolean', description: 'Czy automatycznie logować użytkownika' },
          },
          required: ['title', 'target_url'],
        },
      },
      {
        name: 'fluentcrm_update_smart_link',
        description: 'Aktualizuje Smart Link (może nie być dostępne w obecnej wersji)',
        inputSchema: {
          type: 'object',
          properties: {
            smartLinkId: { type: 'number', description: 'ID Smart Link' },
            title: { type: 'string' },
            target_url: { type: 'string' },
            apply_tags: { type: 'array', items: { type: 'number' } },
            apply_lists: { type: 'array', items: { type: 'number' } },
            remove_tags: { type: 'array', items: { type: 'number' } },
            remove_lists: { type: 'array', items: { type: 'number' } },
            auto_login: { type: 'boolean' },
          },
          required: ['smartLinkId'],
        },
      },
      {
        name: 'fluentcrm_delete_smart_link',
        description: 'Usuwa Smart Link (może nie być dostępne w obecnej wersji)',
        inputSchema: {
          type: 'object',
          properties: {
            smartLinkId: { type: 'number', description: 'ID Smart Link do usunięcia' },
          },
          required: ['smartLinkId'],
        },
      },
      {
        name: 'fluentcrm_generate_smart_link_shortcode',
        description: 'Generuje shortcode dla Smart Link',
        inputSchema: {
          type: 'object',
          properties: {
            slug: { type: 'string', description: 'Slug Smart Link' },
            linkText: { type: 'string', description: 'Tekst linku (opcjonalny)' },
          },
          required: ['slug'],
        },
      },
      {
        name: 'fluentcrm_validate_smart_link_data',
        description: 'Waliduje dane Smart Link przed utworzeniem',
        inputSchema: {
          type: 'object',
          properties: {
            title: { type: 'string', description: 'Nazwa Smart Link' },
            slug: { type: 'string', description: 'Slug' },
            target_url: { type: 'string', description: 'Docelowy URL' },
            apply_tags: { type: 'array', items: { type: 'number' } },
            apply_lists: { type: 'array', items: { type: 'number' } },
            remove_tags: { type: 'array', items: { type: 'number' } },
            remove_lists: { type: 'array', items: { type: 'number' } },
            auto_login: { type: 'boolean' },
          },
          required: ['title', 'target_url'],
        },
      },

      // ===== RAPORTY =====
      {
        name: 'fluentcrm_dashboard_stats',
        description: 'Pobiera statystyki dashboarda',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'fluentcrm_custom_fields',
        description: 'Pobiera pola niestandardowe',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case 'fluentcrm_list_contacts':
        return { content: [{ type: 'text', text: JSON.stringify(await client.listContacts(args || {}), null, 2) }] };
      case 'fluentcrm_get_contact':
        return { content: [{ type: 'text', text: JSON.stringify(await client.getContact((args as any)?.subscriberId), null, 2) }] };
      case 'fluentcrm_find_contact_by_email':
        return { content: [{ type: 'text', text: JSON.stringify(await client.findContactByEmail((args as any)?.email), null, 2) }] };
      case 'fluentcrm_create_contact':
        return { content: [{ type: 'text', text: JSON.stringify(await client.createContact(args as any), null, 2) }] };
      case 'fluentcrm_update_contact':
        return { content: [{ type: 'text', text: JSON.stringify(await client.updateContact((args as any)?.subscriberId, args as any), null, 2) }] };
      case 'fluentcrm_delete_contact':
        return { content: [{ type: 'text', text: JSON.stringify(await client.deleteContact((args as any)?.subscriberId), null, 2) }] };
      case 'fluentcrm_list_tags':
        return { content: [{ type: 'text', text: JSON.stringify(await client.listTags(args || {}), null, 2) }] };
      case 'fluentcrm_create_tag':
        return { content: [{ type: 'text', text: JSON.stringify(await client.createTag(args as any), null, 2) }] };
      case 'fluentcrm_delete_tag':
        return { content: [{ type: 'text', text: JSON.stringify(await client.deleteTag((args as any)?.tagId), null, 2) }] };
      case 'fluentcrm_attach_tag_to_contact':
        return { content: [{ type: 'text', text: JSON.stringify(await client.attachTagToContact((args as any)?.subscriberId, (args as any)?.tagIds), null, 2) }] };
      case 'fluentcrm_detach_tag_from_contact':
        return { content: [{ type: 'text', text: JSON.stringify(await client.detachTagFromContact((args as any)?.subscriberId, (args as any)?.tagIds), null, 2) }] };
      case 'fluentcrm_list_lists':
        return { content: [{ type: 'text', text: JSON.stringify(await client.listLists(), null, 2) }] };
      case 'fluentcrm_create_list':
        return { content: [{ type: 'text', text: JSON.stringify(await client.createList(args as any), null, 2) }] };
      case 'fluentcrm_delete_list':
        return { content: [{ type: 'text', text: JSON.stringify(await client.deleteList((args as any)?.listId), null, 2) }] };
      case 'fluentcrm_attach_contact_to_list':
        return { content: [{ type: 'text', text: JSON.stringify(await client.attachContactToList((args as any)?.subscriberId, (args as any)?.listIds), null, 2) }] };
      case 'fluentcrm_detach_contact_from_list':
        return { content: [{ type: 'text', text: JSON.stringify(await client.detachContactFromList((args as any)?.subscriberId, (args as any)?.listIds), null, 2) }] };
      case 'fluentcrm_list_campaigns':
        return { content: [{ type: 'text', text: JSON.stringify(await client.listCampaigns(args || {}), null, 2) }] };
      case 'fluentcrm_create_campaign':
        return { content: [{ type: 'text', text: JSON.stringify(await client.createCampaign(args as any), null, 2) }] };
      case 'fluentcrm_pause_campaign':
        return { content: [{ type: 'text', text: JSON.stringify(await client.pauseCampaign((args as any)?.campaignId), null, 2) }] };
      case 'fluentcrm_resume_campaign':
        return { content: [{ type: 'text', text: JSON.stringify(await client.resumeCampaign((args as any)?.campaignId), null, 2) }] };
      case 'fluentcrm_delete_campaign':
        return { content: [{ type: 'text', text: JSON.stringify(await client.deleteCampaign((args as any)?.campaignId), null, 2) }] };
      case 'fluentcrm_list_email_templates':
        return { content: [{ type: 'text', text: JSON.stringify(await client.listEmailTemplates(), null, 2) }] };
      case 'fluentcrm_create_email_template':
        return { content: [{ type: 'text', text: JSON.stringify(await client.createEmailTemplate(args as any), null, 2) }] };
      case 'fluentcrm_list_automations':
        return { content: [{ type: 'text', text: JSON.stringify(await client.listAutomations(args || {}), null, 2) }] };
      case 'fluentcrm_create_automation':
        return { content: [{ type: 'text', text: JSON.stringify(await client.createAutomation(args as any), null, 2) }] };
      case 'fluentcrm_list_webhooks':
        return { content: [{ type: 'text', text: JSON.stringify(await client.listWebhooks(), null, 2) }] };
      case 'fluentcrm_create_webhook':
        return { content: [{ type: 'text', text: JSON.stringify(await client.createWebhook(args as any), null, 2) }] };
      case 'fluentcrm_dashboard_stats':
        return { content: [{ type: 'text', text: JSON.stringify(await client.getDashboardStats(), null, 2) }] };
      case 'fluentcrm_custom_fields':
        return { content: [{ type: 'text', text: JSON.stringify(await client.listCustomFields(), null, 2) }] };
      
      // ===== SMART LINKS =====
      case 'fluentcrm_list_smart_links':
        return { content: [{ type: 'text', text: JSON.stringify(await client.listSmartLinks(args || {}), null, 2) }] };
      case 'fluentcrm_get_smart_link':
        return { content: [{ type: 'text', text: JSON.stringify(await client.getSmartLink((args as any)?.smartLinkId), null, 2) }] };
      case 'fluentcrm_create_smart_link':
        return { content: [{ type: 'text', text: JSON.stringify(await client.createSmartLink(args as any), null, 2) }] };
      case 'fluentcrm_update_smart_link':
        return { content: [{ type: 'text', text: JSON.stringify(await client.updateSmartLink((args as any)?.smartLinkId, args as any), null, 2) }] };
      case 'fluentcrm_delete_smart_link':
        return { content: [{ type: 'text', text: JSON.stringify(await client.deleteSmartLink((args as any)?.smartLinkId), null, 2) }] };
      case 'fluentcrm_generate_smart_link_shortcode':
        return { content: [{ type: 'text', text: JSON.stringify({ shortcode: client.generateSmartLinkShortcode((args as any)?.slug, (args as any)?.linkText) }, null, 2) }] };
      case 'fluentcrm_validate_smart_link_data':
        return { content: [{ type: 'text', text: JSON.stringify(client.validateSmartLinkData(args as any), null, 2) }] };
      
      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error: any) {
    return {
      content: [{ type: 'text', text: `❌ Error: ${error.message}` }],
      isError: true,
    };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('🚀 FluentCRM MCP Server running on stdio');
  console.error(`📡 API URL: ${FLUENTCRM_API_URL}`);
  console.error(`👤 Username: ${FLUENTCRM_API_USERNAME}`);
}

main().catch((error) => {
  console.error('❌ Server error:', error);
  process.exit(1);
});
