'use client';

import React, { FC, useCallback, useEffect, useState } from 'react';
import {
  ICountry,
  IDisease,
  IExpert,
  ISpecialty,
  ISubspecialty,
} from '@/types/interfaces';
import { Col, Row } from 'antd';
import ExpertsListItem from '@/components/pages/Experts/ExpertsListItem';
import CountryFilter from '@/components/pages/Experts/filters/CountryFilter';
import { useSearchParams } from 'next/navigation';
import SpecialtyFilter from '@/components/pages/Experts/filters/SpecialtyFilter';
import AppPagination from '@/components/common/AppPagination';
import { Analytics } from '@/libs/GoogleAnalytics';

interface ExpertsListProps {
  experts: IExpert[];
  filters: {
    specialties: ISpecialty[];
    countries: ICountry[];
  };
}

interface IFilterParams {
  country: string | null;
  specialties: string | null;
  subspecialties: string | null;
  diseases: string | null;
}

const ExpertsList: FC<ExpertsListProps> = ({ experts, filters }) => {
  const searchParams = useSearchParams();
  const [filteredExperts, setFilteredExperts] = useState(experts);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const params = new URLSearchParams(searchParams.toString());
  const queryParams = params.toString();

  const filterExperts = useCallback(
    (filterParams: IFilterParams) => {
      const newFilteredExperts = experts.filter((expert: IExpert) => {
        if (
          filterParams.country &&
          expert.country.id !== Number(filterParams.country)
        ) {
          return false;
        }
        if (
          filterParams.specialties &&
          !expert.specialties.some(
            (s: ISpecialty) => s.id === Number(filterParams.specialties),
          )
        ) {
          return false;
        }
        if (
          filterParams.subspecialties &&
          !expert.subspecialties.some(
            (ss: ISubspecialty) =>
              ss.id === Number(filterParams.subspecialties),
          )
        ) {
          return false;
        }
        if (
          filterParams.diseases &&
          !expert.diseases.some(
            (d: IDisease) => d.id === Number(filterParams.diseases),
          )
        ) {
          return false;
        }
        return true;
      });
      setFilteredExperts(newFilteredExperts);
    },
    [experts],
  );

  useEffect(() => {
    Analytics.sendMedicalExpertsListViewEventToGA();
  }, []);

  useEffect(() => {
    const filterParams = {
      country: params.get('country'),
      specialties: params.get('specialty'),
      subspecialties: params.get('subspecialty'),
      diseases: params.get('disease'),
    };

    setCurrentPage(1);
    filterExperts(filterParams);
  }, [queryParams, filterExperts]);

  const currentExperts = filteredExperts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const onPageChange = (page: any, pageSize: any) => {
    setCurrentPage(page);
    if (pageSize) setItemsPerPage(pageSize);
  };

  return (
    <>
      <Row gutter={[12, 12]} className={'mb-6'}>
        <Col xs={24} md={6}>
          <CountryFilter countries={filters.countries} />
        </Col>
        <Col xs={24} md={10}>
          <SpecialtyFilter specialties={filters.specialties} />
        </Col>
        {/*<Col xs={24} md={8}>*/}
        {/*  <SearchFilter />*/}
        {/*</Col>*/}
      </Row>
      <Row gutter={[{ xs: 0, md: 24 }, 24]}>
        {currentExperts.map((expert: IExpert) => {
          return (
            <Col xs={24} md={8} key={expert.slug}>
              <ExpertsListItem expert={expert} />
            </Col>
          );
        })}
      </Row>
      {filteredExperts.length > 0}
      <Row className={'mt-6 mb-4'}>
        <Col
          xs={24}
          className={'flex justify-center text-center pagination-wrapper'}
        >
          <AppPagination
            hideOnSinglePage={true}
            onChange={onPageChange}
            pageSize={itemsPerPage}
            current={currentPage}
            total={filteredExperts.length}
            responsive={true}
            showSizeChanger={false}
          />
        </Col>
      </Row>
    </>
  );
};

export default ExpertsList;
