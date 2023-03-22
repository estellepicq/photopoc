import { Component } from '@angular/core';
import { Clipboard } from '@capacitor/clipboard';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  text = 'Hello world!';

  async copy() {
    await Clipboard.write({
      string: this.text
    });
  };
  
  async displayClipboard() {
    const { type, value } = await Clipboard.read();
  
    alert(`Got ${type} from clipboard: ${value}`);
  };

}
