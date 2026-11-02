import { MongoClient } from "mongodb";

// 개발 모드의 핫 리로드에서도 커넥션을 하나만 유지하도록 전역에 캐시한다.
const globalForMongo = globalThis as unknown as {
  mongoClientPromise?: Promise<MongoClient>;
};

function getClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI 환경변수가 설정되지 않았습니다. (.env.local 확인)");
  }

  if (!globalForMongo.mongoClientPromise) {
    globalForMongo.mongoClientPromise = new MongoClient(uri)
      .connect()
      .catch((error: unknown) => {
        // 연결 실패를 캐시하지 않도록 초기화한 뒤 에러를 다시 던진다.
        globalForMongo.mongoClientPromise = undefined;
        throw error;
      });
  }
  return globalForMongo.mongoClientPromise;
}

export async function getDb() {
  const client = await getClientPromise();
  return client.db();
}
