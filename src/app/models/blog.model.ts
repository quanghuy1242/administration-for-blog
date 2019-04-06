import { Timestamp } from "@firebase/firestore-types";

export interface Blog {
  id?: string
  title: string;
  day: Timestamp;
  content: string;
  isRichContent?: boolean;
  previewMardown?: string;
  category?: string;
  tags?: string[];
  firstPublish?: Timestamp;
  image?: string;
}