const { Service } = require("@ruiyun/fastapi");

class DogService extends Service {
  async add({ name, age, color }) {
    const id = Math.round(Math.random() * 10000000);
    if (id % 3 === 2) {
      // 随机报错
      throw new Error("生成dogId失败");
    }
    return {
      name,
      age,
      color,
      id
    };
  }
}

module.exports = DogService;
