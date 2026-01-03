import {inputView} from "./view/inputView.js";
import {getEachNumber} from "./utils/getEachNumber.js";
import {outputView} from "./view/outputView.js";

class App {
  async run() {
    const input = await inputView();
    const sum = await getEachNumber(input);
    await outputView(sum);
  }
}

export default App;
