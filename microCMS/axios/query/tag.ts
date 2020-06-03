import axios from '../client';
import { Tag } from '../../types/tag';
import { CMSResponse } from '../../types/common/response';

export const getTags = () =>
  axios
    .get<CMSResponse<Array<Tag>>>('/tags')
    .then(function (response) {
      return response.data.contents;
    })
    .catch(function (error) {
      console.log(error);
      return [] as Tag[];
    });

export const getTag = (contentId: string) =>
  axios
    .get<Tag>(`/tags/${contentId}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return {} as Tag;
    });
