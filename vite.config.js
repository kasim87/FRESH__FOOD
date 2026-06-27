export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: () => "bundle.js",
      },
    },
  },
};
