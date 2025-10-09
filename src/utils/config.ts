import yaml from 'js-yaml';
import merge from 'lodash.merge';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const configPath = join(__dirname, '../config.yaml');
let config: any;

try {
  const fileContents = fs.readFileSync(configPath, 'utf8');
  config = yaml.load(fileContents) as any;
} catch (e) {
  console.error('Error loading config.yaml:', e);
  config = {};
}

const DEFAULT_SITE_NAME = 'Website';

const getSite = () => {
  const _default = import.meta.env.SITE;
  const siteUrl = config?.site?.site || _default;
  return siteUrl;
};

const getMetadata = () => {
  return merge(
    {},
    {
      title: {
        default: DEFAULT_SITE_NAME,
        template: '%s',
      },
      description: '',
      robots: {
        index: false,
        follow: false,
      },
      openGraph: {
        type: 'website',
      },
    },
    config?.metadata ?? {}
  );
};

const getI18N = () => {
  return config?.i18n || {
    language: 'pt-BR',
    textDirection: 'ltr',
  };
};

const getAppBlog = () => {
  return config?.apps?.blog || {};
};

const getUI = () => {
  return config?.ui || {
    theme: 'system',
  };
};

export { getSite, getMetadata, getI18N, getAppBlog, getUI };


