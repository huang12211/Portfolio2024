import { fileURLToPath } from 'node:url';

import withBundleAnalyzer from '@next/bundle-analyzer';
import { withSentryConfig } from '@sentry/nextjs';
import createJiti from 'jiti';
import withNextIntl from 'next-intl/plugin';
// import path from 'node:path';//Added for PDFWindow
// import CopyWebpackPlugin from 'copy-webpack-plugin';

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti('./src/libs/Env');

const withNextIntlConfig = withNextIntl('./src/libs/i18n.ts');

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// //Added for PDFWindow
// const pdfjsDistDir = path.dirname("pdfjs-dist/package.json");
// const cMapsDir = path.join(pdfjsDistDir, "cmaps");
// const standardFontsDir = path.join(pdfjsDistDir, "standard_fonts");
// const pdfWorkerPath = path.join(pdfjsDistDir, "build", "pdf.worker.min.mjs");
// //Added for PDFWindow

/** @type {import('next').NextConfig} */
export default withSentryConfig(
  bundleAnalyzer(
    withNextIntlConfig({
      eslint: {
        dirs: ['.'],
      },
      poweredByHeader: false,
      reactStrictMode: true,
      experimental: {
        serverComponentsExternalPackages: ['@electric-sql/pglite'],
        // serverActions: true, //Added for PDFWindow
      },
      // webpack: (config) => { //Added for PDFWindow
      //   config.resolve.alias.canvas = false;

      //   config.plugins.push(
      //       new CopyWebpackPlugin({
      //           patterns: [
      //               { from: cMapsDir, to: "static/chunks/pdfjs/cmaps/" },
      //           ],
      //       })
      //   );

      //   config.plugins.push(
      //       new CopyWebpackPlugin({
      //           patterns: [
      //               {
      //                   from: standardFontsDir,
      //                   to: "static/chunks/pdfjs/standard_fonts/",
      //               },
      //           ],
      //       })
      //   );

      //   config.plugins.push(
      //       new CopyWebpackPlugin({
      //           patterns: [
      //               {
      //                   from: pdfWorkerPath,
      //                   to: "static/chunks/pdfjs/build/pdf.worker.min.js",
      //               },
      //           ],
      //       })
      //   );

      //   return config;
      // },//Added for PDFWindow
    }),
  ),
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options
    // FIXME: Add your Sentry organization and project names
    org: 'nextjs-boilerplate-org',
    project: 'nextjs-boilerplate',

    // Only print logs for uploading source maps in CI
    silent: !process.env.CI,

    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    tunnelRoute: '/monitoring',

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,

    // Disable Sentry telemetry
    telemetry: false,
  },
);
