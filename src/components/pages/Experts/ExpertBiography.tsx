'use client';

import React, { FC } from 'react';
import { IExpertBio } from '@/types/interfaces';
import Job from '@/components/pages/Experts/bio/job/Job';
import Bio from '@/components/pages/Experts/bio/bio/Bio';
import Award from '@/components/pages/Experts/bio/award/Award';
import Education from '@/components/pages/Experts/bio/education/Education';
import Affiliation from '@/components/pages/Experts/bio/affilation/Affilation';
import Publication from '@/components/pages/Experts/bio/publication/Publication';
import ExpertDetailsSection from '@/components/pages/Experts/bio/ExpertDetailsSection';
import ExpertProfileSection from '@/components/pages/Experts/bio/ExpertProfileSection';
import ExpertViewFooter from '@/components/pages/Experts/ExpertViewFooter';

type ExpertViewProps = {
  expert: IExpertBio;
};

const EXPERT_BIO_ITEMS_COUNT: number =
  Number(process.env.EXPERT_BIO_ITEMS_COUNT) || 5;
const EXPERT_BIO_CHARACTER_COUNT: number =
  Number(process.env.EXPERT_BIO_CHARACTER_COUNT) || 500;

const ExpertBiography: FC<ExpertViewProps> = ({ expert }) => {
  return (
    <>
      <ExpertProfileSection expert={expert} />

      <ExpertDetailsSection expert={expert} />

      {expert.jobs.length > 0 && (
        <Job jobs={expert.jobs} itemLimitation={EXPERT_BIO_ITEMS_COUNT} />
      )}
      {expert.educations.length > 0 && (
        <Education
          educations={expert.educations}
          itemLimitation={EXPERT_BIO_ITEMS_COUNT}
        />
      )}
      {expert.bio && (
        <Bio
          bio={expert.bio}
          characterLimitation={EXPERT_BIO_CHARACTER_COUNT}
        />
      )}
      {expert.affiliations.length > 0 && (
        <Affiliation
          affiliations={expert.affiliations}
          itemLimitation={EXPERT_BIO_ITEMS_COUNT}
        />
      )}
      {expert.awards.length > 0 && (
        <Award awards={expert.awards} itemLimitation={EXPERT_BIO_ITEMS_COUNT} />
      )}
      {expert.publications.length > 0 && (
        <Publication
          publications={expert.publications}
          publication_description={expert.publication_description}
          itemLimitation={EXPERT_BIO_ITEMS_COUNT}
        />
      )}

      <ExpertViewFooter expert={expert} />
    </>
  );
};

export default ExpertBiography;
