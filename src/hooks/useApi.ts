// Custom hooks for API calls - prepared for Java backend integration

import { useState, useEffect } from 'react';
import { Campaign, User, Donation } from '@/types';

// Base API configuration - update with your Java backend URL
const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:8080/api';

// HTTP client with JWT support
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private getHeaders(): HeadersInit {
    const token = localStorage.getItem('jwt_token');
    return {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
  }

  private getFormHeaders(): HeadersInit {
    const token = localStorage.getItem('jwt_token');
    return {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
  }

  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'GET',
      headers: this.getHeaders(),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    const isFormData = data instanceof FormData;
    
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: isFormData ? this.getFormHeaders() : this.getHeaders(),
      body: isFormData ? data : JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  }

  async put<T>(endpoint: string, data: any): Promise<T> {
    const isFormData = data instanceof FormData;
    
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'PUT',
      headers: isFormData ? this.getFormHeaders() : this.getHeaders(),
      body: isFormData ? data : JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  }

  async delete(endpoint: string): Promise<void> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'DELETE',
      headers: this.getHeaders(),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }
}

export const apiClient = new ApiClient(API_BASE_URL);

// Custom hooks for data fetching
export const useCampaigns = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        // TODO: Replace with actual API call
        // const data = await apiClient.get<Campaign[]>('/campaigns');
        // setCampaigns(data);
        
        // Mock data for now
        setCampaigns([]);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  return { campaigns, loading, error };
};

export const useCampaign = (slug: string) => {
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        // TODO: Replace with actual API call
        // const data = await apiClient.get<Campaign>(`/campaigns/${slug}`);
        // setCampaign(data);
        
        // Mock for now
        setCampaign(null);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    if (slug) {
      fetchCampaign();
    }
  }, [slug]);

  return { campaign, loading, error };
};

export const useDonations = (campaignId: string) => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        // TODO: Replace with actual API call
        // const data = await apiClient.get<Donation[]>(`/campaigns/${campaignId}/donations`);
        // setDonations(data);
        
        // Mock for now
        setDonations([]);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    if (campaignId) {
      fetchDonations();
    }
  }, [campaignId]);

  return { donations, loading, error };
};

// API functions for mutations
export const createCampaign = async (data: FormData): Promise<Campaign> => {
  // TODO: Replace with actual API call
  // return apiClient.post<Campaign>('/campaigns', data);
  
  // Mock for now
  console.log('Creating campaign:', data);
  throw new Error('API not connected yet');
};

export const createDonation = async (data: FormData): Promise<Donation> => {
  // TODO: Replace with actual API call
  // return apiClient.post<Donation>('/donations', data);
  
  // Mock for now
  console.log('Creating donation:', data);
  throw new Error('API not connected yet');
};

export const confirmDonation = async (donationId: string): Promise<void> => {
  // TODO: Replace with actual API call
  // return apiClient.put(`/donations/${donationId}/confirm`, {});
  
  // Mock for now
  console.log('Confirming donation:', donationId);
  throw new Error('API not connected yet');
};

export const updateCampaign = async (campaignId: string, data: FormData): Promise<Campaign> => {
  // TODO: Replace with actual API call
  // return apiClient.put<Campaign>(`/campaigns/${campaignId}`, data);
  
  // Mock for now
  console.log('Updating campaign:', campaignId, data);
  throw new Error('API not connected yet');
};