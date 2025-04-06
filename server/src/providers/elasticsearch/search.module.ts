import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import {
  ELASTICSEARCH_NODE,
  ELASTICSEARCH_USERNAME,
  ELASTICSEARCH_PASSWORD,
} from '../../config';

console.log('ELASTICSEARCH_NODE:', ELASTICSEARCH_NODE);
console.log('ELASTICSEARCH_USERNAME:', ELASTICSEARCH_USERNAME);
console.log('ELASTICSEARCH_PASSWORD:', ELASTICSEARCH_PASSWORD);


@Module({
  imports: [
    ElasticsearchModule.register({
      node: ELASTICSEARCH_NODE,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      auth: {
        username: ELASTICSEARCH_USERNAME,
        password: ELASTICSEARCH_PASSWORD,
      },
    }),
  ],
  exports: [ElasticsearchModule],
})
export class SearchModule {}
