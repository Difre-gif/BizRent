import { PrismaService } from '../prisma/prisma.service';
export declare class PropertiesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<any>;
}
