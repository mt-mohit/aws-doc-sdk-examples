const mockReceiveMessagesLP = jest.fn();
jest.mock("@aws-sdk/client-sqs/commands/ReceiveMessageCommand", () => ({
  SQS: function SQS() {
    this.ReceiveMessageCommand = mockReceiveMessagesLP;
  },
}));
const { run } = require("../../sqs/src/sqs_longpolling_receivemessage.js");

test("has to mock SQS#longpolling_receivemessage", async (done) => {
  await run();
  expect(mockReceiveMessagesLP).toHaveBeenCalled;
  done();
});
