export default function robots() {
  const origin = 'https://argentina-al-horno.vercel.app';
  return { rules: { userAgent: '*', allow: '/' }, sitemap: origin + '/sitemap.xml' };
}
