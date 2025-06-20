export const getFileExtensionFromMimeType = (mimeType: string): string => {
  const mimeToExt = {
    // Images
    'image/png': 'PNG',
    'image/jpeg': 'JPG',
    'image/gif': 'GIF',
    'image/svg+xml': 'SVG',
    'image/webp': 'WEBP',
    'image/tiff': 'TIFF',
    'image/bmp': 'BMP',

    // Documents
    'application/pdf': 'PDF',
    'application/msword': 'DOC',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      'DOCX',
    'application/vnd.ms-excel': 'XLS',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'XLSX',
    'application/vnd.ms-powerpoint': 'PPT',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      'PPTX',

    // Text
    'text/plain': 'TXT',
    'text/csv': 'CSV',
    'text/html': 'HTML',
    'text/css': 'CSS',
    'text/javascript': 'JS',
    'text/xml': 'XML',

    // Archives
    'application/zip': 'ZIP',
    'application/x-rar-compressed': 'RAR',
    'application/x-7z-compressed': '7Z',
    'application/x-tar': 'TAR',
    'application/x-gzip': 'GZ',

    // Audio
    'audio/mpeg': 'MP3',
    'audio/wav': 'WAV',
    'audio/ogg': 'OGG',
    'audio/aac': 'AAC',

    // Video
    'video/mp4': 'MP4',
    'video/x-msvideo': 'AVI',
    'video/x-ms-wmv': 'WMV',
    'video/quicktime': 'MOV',
    'video/x-matroska': 'MKV',
    'video/webm': 'WEBM',

    // Executables
    'application/octet-stream': 'BIN',
    'application/x-shockwave-flash': 'SWF',
    'application/x-msdownload': 'EXE',
    'application/vnd.android.package-archive': 'APK',
    'application/x-apple-diskimage': 'DMG',

    // Code
    'application/javascript': 'JS',
    'application/json': 'JSON',
    'application/xml': 'XML',

    // Other
    'application/x-www-form-urlencoded': 'FORM',
    'multipart/form-data': 'MULTIPART',
    'font/ttf': 'TTF',
    'font/otf': 'OTF',
    'application/vnd.ms-fontobject': 'EOT',
    'application/font-woff': 'WOFF',
    'application/font-woff2': 'WOFF2',
  };

  return mimeToExt[mimeType] || 'OTHER';
};
