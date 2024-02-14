import { countryType } from '../types/room';

export const getCountryImage = (country: countryType) => {
  switch (country) {
    case 'BR':
      return '/images/flagIcons/br.png';
    case 'AR':
      return '/images/flagIcons/ar.png';
    case 'PT':
      return '/images/flagIcons/pt.png';
    case 'US':
      return '/images/flagIcons/us.png';
    default:
      return '/images/flagIcons/br.png';
  }
};
