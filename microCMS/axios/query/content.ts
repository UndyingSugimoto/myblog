import axios from '../client';
import { Content } from '../../types/content';
import { CMSResponse } from '../../types/common/response';

export const getContents = () =>
  axios
    .get<CMSResponse<Array<Content>>>('/contents')
    .then(function (response) {
      return response.data.contents;
    })
    .catch(function (error) {
      console.log(error);
      return [] as Content[];
    });

export const getContent = (contentId: string) =>
  axios
    .get<Content>(`/contents/${contentId}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return {} as Content;
    });
