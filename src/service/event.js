
const sleep = async (mills) => {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      resolve();
    }, mills);
  })
}

export const getEvents = async () => {
  await sleep(1000);
  return [
    {
      id: '1',
      startAt: '2022-05-24T13:00:00Z',
      endAt: '2022-05-24T12:00:00Z',
      summary: 'TEST EVENT 1'
    },
    {
      id: '2',
      startAt: '2022-05-26T13:00:00Z',
      endAt: '2022-05-26T12:00:00Z',
      summary: 'TEST EVENT 2'
    },
    {
      id: '3',
      startAt: '2022-05-03T13:00:00Z',
      endAt: '2022-05-03T12:00:00Z',
      summary: 'TEST EVENT 3'
    }
  ];
};