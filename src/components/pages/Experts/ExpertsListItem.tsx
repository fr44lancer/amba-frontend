'use client';

import React from 'react';
import { Card } from 'antd';
import { IExpert, ISpecialty } from '@/types/interfaces';
import Link from 'next/link';
import MainImage from '@/components/common/Image/MainImage';
import { FlagIcon } from 'react-flag-kit';
import AppTitle from '@/components/common/Typography/AppTitle';
import { calculateExpertExperience } from '@/utils/helper';
import ShowBiography from '@/components/pages/Experts/ShowBiography';
import styled from 'styled-components';
import MainParagraph from '@/components/common/Typography/Paragraphs/MainParagraph';

type ExpertPros = {
  expert: IExpert;
};

const StyledExpertCard = styled(Card)`
  overflow: hidden;
  border: 8px;
  height: 100%;

  &&.ant-card-bordered {
    border: 1px solid #dfdfe2;
  }

  &&.ant-card-hoverable:hover {
    border: 1px solid var(--primaryGreen);
    box-shadow: none;

    .view-biography {
      opacity: 1;
    }
  }

  .ant-card-cover {
    position: relative;
  }

  .ant-card-body {
    padding: 16px;
    text-align: center;
  }
`;

const concatSpecialties = (specialties: ISpecialty[]) => {
  return specialties.map((specialty, index) => {
    return specialty.name + (index === specialties.length - 1 ? '' : ', ');
  });
};

const ExpertsListItem: React.FC<ExpertPros> = ({ expert }) => {
  const expertFullName = expert.name + ' ' + expert.surname;
  const expertBioPageUrl = '/dashboard/experts/' + expert.slug;
  const expertExperience = calculateExpertExperience(expert.experience_since);

  return (
    <Link href={expertBioPageUrl}>
      <StyledExpertCard
        hoverable
        cover={
          <>
            <div className="absolute z-10 h-6 w-9 inset-y-0 right-0">
              <FlagIcon
                code={expert.country.country_code}
                width={'100%'}
                className={'rounded-none rounded-tr-lg'}
              />
            </div>
            <MainImage
              src={expert.avatar}
              alt={expert.name + ' ' + expert.surname}
              className={'rounded-t-md'}
              priority={true}
            />
            <ShowBiography />
          </>
        }
      >
        <AppTitle level={2} className={'mb-4'}>
          {expertFullName}
        </AppTitle>
        <MainParagraph className={'mb-4'}>
          {concatSpecialties(expert.specialties)}
        </MainParagraph>
        <MainParagraph className={'mb-1'}>{expert.country.name}</MainParagraph>
        <MainParagraph className={'mb-0'}>
          {expertExperience} years of experience
        </MainParagraph>
      </StyledExpertCard>
    </Link>
  );
};

export default ExpertsListItem;
