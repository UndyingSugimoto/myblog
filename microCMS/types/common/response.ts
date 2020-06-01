export type CMSResponse<T> = {
  contents: T;
  totalCount: number;
  offset: number;
  limit: number;
};
