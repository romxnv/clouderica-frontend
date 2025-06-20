type StyleType = 'bg' | 'text';

const categoryToColorMap: Record<string, string> = {
  images: 'sky',
  documents: 'cyan',
  audios: 'violet',
  videos: 'rose',
  archives: 'amber',
  other: 'gray',
};

const colorClasses: Record<StyleType, Record<string, string>> = {
  bg: {
    sky: 'bg-sky',
    cyan: 'bg-cyan',
    violet: 'bg-violet',
    rose: 'bg-rose',
    amber: 'bg-amber',
    gray: 'bg-gray',
  },
  text: {
    sky: 'text-sky',
    cyan: 'text-cyan',
    violet: 'text-violet',
    rose: 'text-rose',
    amber: 'text-amber',
    gray: 'text-gray',
  },
};

export const getStyleFromCategory = (
  category: string,
  style: StyleType,
): string => colorClasses[style][categoryToColorMap[category]] || 'gray';
