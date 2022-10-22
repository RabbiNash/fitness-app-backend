
import { customAlphabet } from "nanoid";

export class IdGenerator {
  /**
   * function to generate user id
   * formart
   * N{1233333}
   */

  public static async generateUserId(): Promise<string> {
    const nanoid = customAlphabet("1234567890", 10);
    return "USR" + nanoid(5);
  }
}
