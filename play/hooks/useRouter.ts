import { useRouter as vueUseRouter } from 'vue-router';

export const useRouter = () => {
  const router = vueUseRouter();
  function routerPush(path: string) {
    router.push(path);
  }
  return {
    routerPush
  };
};
