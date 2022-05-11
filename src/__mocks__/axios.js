import { mockData } from "../mockData";

export default {
    get: jest.fn().mockResolvedValue(mockData),
  };