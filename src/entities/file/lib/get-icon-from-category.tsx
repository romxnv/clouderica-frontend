import { FaArchive, FaFileArchive, FaVideo } from 'react-icons/fa';
import { IoDocumentText, IoImage, IoMusicalNotes } from 'react-icons/io5';

export const getIconFromCategory = (category: string) => {
  switch (category) {
    case 'images':
      return <IoImage className="text-sky h-9 w-9" />;
    case 'documents':
      return <IoDocumentText className="text-cyan h-9 w-9" />;
    case 'audios':
      return <IoMusicalNotes className="text-violet h-9 w-9" />;
    case 'videos':
      return <FaVideo className="text-rose h-9 w-9" />;
    case 'archives':
      return <FaFileArchive className="text-amber h-9 w-9" />;
    default:
      return <FaArchive className="text-gray h-9 w-9" />;
  }
};
