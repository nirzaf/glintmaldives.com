/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASEROW_API_TOKEN: string
  // Add other env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
