'use server';

import { SERVER_URL } from '@/shared/config/env';

import type { InsightPreview } from '../model/types';

export const getInsights = async ({
  locale = 'en',
}: {
  locale?: string;
}): Promise<{ data: InsightPreview[] }> => {
  const res = await fetch(`${SERVER_URL}/api/insights?locale=${locale}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  return {
    data: data.docs.map((item: { image: { url: string } }) => ({
      ...item,
      imgUrl: `${SERVER_URL}${item.image.url}`,
    })),
  };
};
