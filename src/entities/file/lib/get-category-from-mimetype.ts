export const getCategoryFromMimeType = (mimeType: string): string => {
  const [type, subtype] = mimeType.split('/');

  const categories = {
    image: 'images',
    audio: 'audios',
    video: 'videos',
    application: 'documents',
    other: 'other',
  };

  const mainCategory = categories[type] || categories.other;

  if (type === 'application') {
    if (
      subtype.includes('word') ||
      subtype.includes('excel') ||
      subtype.includes('powerpoint') ||
      subtype.includes('pdf')
    ) {
      return 'documents';
    }
    if (
      subtype.includes('zip') ||
      subtype.includes('rar') ||
      subtype.includes('tar') ||
      subtype.includes('7z')
    ) {
      return 'archives';
    }
    if (
      subtype.includes('javascript') ||
      subtype.includes('json') ||
      subtype.includes('xml')
    ) {
      return 'other';
    }
  }

  return mainCategory;
};
