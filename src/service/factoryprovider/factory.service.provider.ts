import { RootClassProviderServiceService, ClassProviderServiceService } from '../classprovider/class-provider-service.service';

//팩토리 함수
const serviceFactory
 = (isDev: boolean) => isDev ? new RootClassProviderServiceService() : new ClassProviderServiceService();

//팩토리 프로바이더
export const ServiceProvider = {
   provide: ClassProviderServiceService,
   useFactory: serviceFactory,
   deps: ['isDev']
 };

export const IsDevProvider = {
   provide: 'isDev',
   useValue: false
 };

