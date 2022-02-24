import { lazyImport } from '@/utils/lazyImport';

const { Configurator } = lazyImport(() => import('@/features/configurator'), 'Configurator');

export const routes = [{ path: '/', element: <Configurator /> }];
