export default defineNuxtPlugin((app) => {
  return {
    provide: {
      blurWords: () => {
        return 'test blur';
      },
    },
  };
});
