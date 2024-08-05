"use client"
import React from 'react';
import s from './style.module.css';
import { shuffleArray } from '@/utils/shuffleArray';
import data from '@/data/info.json';
import Link from 'next/link';


type Brand = 'givral' | 'brodard';

export default function RelatedCombo({ slug }: { slug: Brand }) {
  const list_brand: Record<Brand, { id: number; name: string; brand: string; slug: string; price: number; body: string; }[]> = {
    'givral': data.givral.combo,
    'brodard': data.brodard.combo,
  };

  const shuffledArray = shuffleArray([...list_brand[slug]]);
  const data_c = shuffledArray.slice(0, 6);

  return (
    <section className={s.relatedcombo_section}>
      <div className='container'>
        <div className={s.title}>
          
          <h2>Combo 2024</h2>
          <Link href={`/combo/${slug}`}>Xem thêm</Link>
        </div>
      </div>
    </section>
  );
}
