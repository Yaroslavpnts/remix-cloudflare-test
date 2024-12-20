export const getAllItems = async (api: any, entity: string, params?: any) => {
  let hasMore = true;
  let page = 1;
  const acc = [];

  while (hasMore) {
    let url = `/${entity}`;
    const res = await api.get(url, {
      params: {
        ...params,
        pagination: {
          pageSize: 100,
          page,
        },
      },
    });
    if (res.error) {
      throw res.error;
    }
    page++;

    const pagination = res.meta.pagination;

    if (pagination.page >= pagination.pageCount) {
      hasMore = false;
    }

    acc.push(...res.data);
  }

  return acc;
};

export const normalizeUrl = (str: string) => {
  if (str === "index") {
    return "";
  }
  return str;
};
