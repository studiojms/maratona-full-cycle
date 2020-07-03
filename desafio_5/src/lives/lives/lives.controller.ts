import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Live } from '../live.entity';
import { LivesService } from './lives.service';

@Controller('maratona')
export class LivesController {
  constructor(private livesService: LivesService) {}

  @Get()
  index(): Promise<Live[]> {
    return this.livesService.findAll();
  }

  @Post()
  async create(@Body() liveData: Live): Promise<any> {
    return this.livesService.create(liveData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() liveData: Live): Promise<any> {
    liveData.id = Number(id);
    return this.livesService.update(liveData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    return this.livesService.delete(id);
  }
}
