import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.client.properties.findMany({
      where: { is_active: true },
      include: {
        units: {
          where: { status: 'OCCUPIED' }
        }
      },
      orderBy: { created_at: 'desc' }
    });
  }
}
