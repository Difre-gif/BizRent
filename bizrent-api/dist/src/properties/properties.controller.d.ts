import { PropertiesService } from './properties.service';
export declare class PropertiesController {
    private readonly propertiesService;
    constructor(propertiesService: PropertiesService);
    findAll(): Promise<any>;
}
