import { JSX } from 'react';
import {
  NextImage as ContentSdkImage,
  Link as ContentSdkLink,
  RichText as ContentSdkRichText,
  ImageField,
  LinkField,
  Field,
  Text,
} from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';

interface Fields {
  title: Field<string>;
  description: Field<string>;
  bkImage: ImageField;
  cta: LinkField;
}
type HeroBannerProps = ComponentProps & {
  fields: Fields;
};

const HeroBanner = (props: HeroBannerProps): JSX.Element => {
  const { fields } = props;
  return (
    <section className="hero-banner relative text-white">
      <div className="absolute inset-0">
        <ContentSdkImage field={fields.bkImage} className="w-full h-full object-cover" />
      </div>

      <div className="relative container mx-auto py-24 text-center">
        <Text tag="h1" field={fields.title} className="text-4xl font-bold" />
        <ContentSdkRichText field={fields.description} className="mt-6" />

        {fields.cta && (
          <ContentSdkLink field={fields.cta} className="mt-8 inline-block bg-blue-600 px-6 py-3 rounded" />
        )}
      </div>
    </section>
  );
};

export default HeroBanner;