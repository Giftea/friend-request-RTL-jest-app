const mockResponse = {
    data: {
      results: [
        {
          name: {
            first: "gift",
            last: "ele",
          },
          picture: {
            large: "https://ip.jpg",
          },
          login: {
            username: "ji",
          },
        },
      ],
    },
  };
  
  export default {
    get: jest.fn().mockResolvedValue(mockResponse),
  };
  