// @refresh reload
import { Body, FileRoutes, Head, Html, Link, Meta, Scripts, Title } from 'solid-start'
import { ErrorBoundary } from 'solid-start/error-boundary'
import { Routes } from '@solidjs/router'
import { Suspense } from 'solid-js'
import { Toaster } from 'solid-toast'

import './assets/global.css'
import { ThemeProvider } from '@context/theme'
import { Provider as LocaleProvider } from '@locales'
import { HealthProvider } from '@context/health'
import Providers from '@context/providers'

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="manifest" href="/manifest.webmanifest" />
        <Meta name="description" content="train your hoa" />
        <Link rel="icon" href="/favicon.ico" type="image/png" sizes="16x16" />
        <Link rel="apple-touch-icon" href="/pwa-192x192.png" sizes="192x192" />
        <Meta name="theme-color" content="#F6F7F8" />
        <Title>hoa</Title>
      </Head>
      <Body>
        <ErrorBoundary>
          <Suspense>
            <Providers>
              <Routes>
                <FileRoutes />
              </Routes>
              <Toaster
                position="top-right"
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                  className: 'bg-white text-gray-400',
                  duration: 5000,
                }}
              />
            </Providers>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  )
}
