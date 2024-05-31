interface BlueprintImage {
  catalogPreview: 'Hover Feature'[];
  /** To get the URL this src needs to be added in this URL as: `https://printify.com/cdn-cgi/image/width=320,quality=100,format=avif/https://images.printify.com/api/catalog/${src}.jpg` */
  src: string;
}

interface Blueprint {
  blueprintId: number;
  created_at: string;
  tags: string[];
  images: BlueprintImage[];
  name: string;
  printProviderName: string;
  brandname: string;
  targetMarkets: string[];
}

/** The API endpoint response type for blueprint list */
export type Blueprints = Blueprint[];

/** The API endpoint resonse type when requesting a single blueprint */
export interface SingleBlueprint {
  blueprintId: number;
  description: string;
  details: string[];
  features: { name: string; description: string }[];
  media: (
    | {
        /** ID that needs to be placed in an url as follows: `https://printify.com/cdn-cgi/image/width=520,quality=100,format=avif/https://images.printify.com/api/catalog/${src}` */
        src: string;
      }
    | {
        /** HTML element that should be mounted */
        video: string;
      }
  )[];
  name: string;
  tags: string;
}
