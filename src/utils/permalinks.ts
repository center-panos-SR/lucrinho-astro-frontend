import slugify from 'limax';
import { getAppBlog } from './config';

const trim = (str = '', ch?: string) => {
  let start = 0,
    end = str.length || 0;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};

const trimSlash = (s: string) => trim(trim(s, '/'));
const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths + (paths ? '/' : '');
};

const BASE_PATHNAME = '/';

const cleanSlug = (text = '') =>
  trimSlash(text)
    .split('/')
    .map((slug) => slugify(slug))
    .join('/');

const BLOG_BASE = cleanSlug(getAppBlog()?.list?.pathname);
const POST_PERMALINK_PATTERN = trimSlash(getAppBlog()?.post?.permalink || '/%slug%');
const CATEGORY_BASE = cleanSlug(getAppBlog()?.category?.pathname || 'category');
const TAG_BASE = cleanSlug(getAppBlog()?.tag?.pathname || 'tag');

export const getCanonical = (path = ''): string | URL => {
  const url = String(new URL(path, import.meta.env.SITE));
  return url;
};

export const getPermalink = (slug = '', type = 'page'): string => {
  let permalink: string;

  switch (type) {
    case 'category':
      permalink = createPath(BLOG_BASE, CATEGORY_BASE, slug);
      break;

    case 'tag':
      permalink = createPath(BLOG_BASE, TAG_BASE, slug);
      break;

    case 'post':
      permalink = createPath(BLOG_BASE, POST_PERMALINK_PATTERN.replace('%slug%', slug));
      break;

    case 'page':
    default:
      permalink = createPath(slug);
      break;
  }

  return definitivePermalink(permalink);
};

export const getHomePermalink = (): string => getPermalink('/');

export const getBlogPermalink = (): string => getPermalink(BLOG_BASE);

export const getAsset = (path: string): string =>
  '/' +
  [BASE_PATHNAME, path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');

const definitivePermalink = (permalink: string): string => createPath(BASE_PATHNAME, permalink);


