'use client'
import { useRef } from 'react';
import Filter from './Filter';
import { Button } from './ui/Button';
import { TopGradients } from './ui/Gradients';
import { Heading } from './ui/Hero/Heading';
import { SubHeading } from './ui/Hero/SubHeading';
import { FilterBoxProvider } from './../contexts/filterBox';
import JobCard from './JobCard';
import { JobCards } from './JobCards';

export default function Hero() {
  const dropDown1 = useRef(null);
  const search1 = useRef(null);
  const dropDown2 = useRef(null);
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <TopGradients />
        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56]]]">
          <div className="text-center">
            <Heading>Get Your First Job</Heading>
            <SubHeading>
              Empower your career with a dynamic and collaborative work
              environment.
            </SubHeading>
            <FilterBoxProvider>
              <Filter
                align={1}
                components={{
                  search: [
                    {
                      name: 'job_name',
                      placeholder: 'Job Name',
                      ref: search1,
                    },
                  ],
                  dropDown: [
                    {
                      name: 'Country',
                      ref: dropDown1,
                      options: [
                        {
                          value: 'next.js',
                          label: 'Next.js',
                        },
                        {
                          value: 'sveltekit',
                          label: 'SvelteKit',
                        },
                        {
                          value: 'nuxt.js',
                          label: 'Nuxt.js',
                        },
                        {
                          value: 'remix',
                          label: 'Remix',
                        },
                        {
                          value: 'astro',
                          label: 'Astro',
                        },
                      ],
                    },
                    {
                      name: 'Location',
                      ref: dropDown1,
                      options: [
                        {
                          value: 'next.js',
                          label: 'Next.js',
                        },
                        {
                          value: 'sveltekit',
                          label: 'SvelteKit',
                        },
                        {
                          value: 'nuxt.js',
                          label: 'Nuxt.js',
                        },
                        {
                          value: 'remix',
                          label: 'Remix',
                        },
                        {
                          value: 'astro',
                          label: 'Astro',
                        },
                      ],
                    },
                    {
                      name: 'Role',
                      ref: dropDown2,
                      options: [
                        {
                          value: 'next.js',
                          label: 'Next.js',
                        },
                        {
                          value: 'sveltekit',
                          label: 'SvelteKit',
                        },
                        {
                          value: 'nuxt.js',
                          label: 'Nuxt.js',
                        },
                        {
                          value: 'remix',
                          label: 'Remix',
                        },
                        {
                          value: 'astro',
                          label: 'Astro',
                        },
                      ],
                    },
                  ],
                }}
              />
            <JobCards />
            </FilterBoxProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
