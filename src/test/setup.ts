/**
 * ここでは index.tsでする予定である
 * テスト用のDBの接続やモックなど
 * を作成する箇所。
 *
 * テストを実行する前(beforeAll)
 * に接続処理などを行い、
 * テストを実行した後(afterAll)
 * で切断をなどを行う。
 */

beforeAll(async () => {
  console.log('TEST START');
});

afterEach(async () => {
  // テスト毎に実行される
  // DBの削除などを行う。
});

afterAll(async () => {
  console.log('TEST END');
});
