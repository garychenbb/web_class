import Mock from "mockjs";
import testApi from "./mockData/test";

// 模擬的假api接口
Mock.mock("/test/getData", testApi.getTestData);
