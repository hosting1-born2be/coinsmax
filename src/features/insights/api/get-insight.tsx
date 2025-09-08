'use server';

import { SERVER_URL } from '@/shared/config/env';

import type { Insight } from '../model/types';

export const getInsight = async (params: {
  slug: string;
  locale: string;
}): Promise<{ data: Insight }> => {
  const res = await fetch(
    `${SERVER_URL}/api/insights?where[slug][equals]=${params.slug}&locale=${params.locale}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const data = await res.json();
  const article = data.docs[0];
  return {
    data: { ...article, imgUrl: `${SERVER_URL}${article.image.url}` },
  };
};
