export const getVariantClassName = (variant) => {
    switch (variant) {
      case 'bank':
        return 'bg-gradient-to-tr from-banklightblue to-bankdarkblue text-white';
      case 'airlines':
        return 'bg-gradient-airline-buttons text-white';
      case 'market':
        return 'bg-gradient-experimentation text-white ';
      default:
        return '';
    }
  };