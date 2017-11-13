import { browser, element, by } from 'protractor';

export class JediAcademyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('jad-root h1')).getText();
  }
}
