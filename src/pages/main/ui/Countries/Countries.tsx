import { COUNTRIES } from '@/shared/consts/constants';
import { Button, Flex, Typography } from 'antd';
import { type ReactNode } from 'react';

interface CountriesProps {
  selected?: string;
  onClick: (category: string) => void;
}

export const Countries = ({ selected, onClick }: CountriesProps) => {
  const content: ReactNode = (
    <>
      <Typography.Text>
        Find sources that display news in a specific country:{' '}
      </Typography.Text>
      <div
        style={{
          overflowX: 'auto',
          paddingBottom: 8,
        }}
      >
        <Flex wrap="nowrap" gap={8}>
          {COUNTRIES.map((country, idx) => (
            <Button
              key={`${country}-${idx}`}
              shape="round"
              variant="solid"
              color={country === selected ? 'purple' : 'default'}
              style={{
                fontFamily:
                  'Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji, sans-serif',
              }}
              onClick={() => onClick(country)}
            >
              <img
                src={`https://flagcdn.com/w40/${country}.png`}
                alt={`${country} flag`}
                width="24"
                height="18"
              />{' '}
              {country}
            </Button>
          ))}
        </Flex>
      </div>
    </>
  );

  return <>{content}</>;
};
