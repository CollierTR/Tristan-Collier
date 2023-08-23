

    async function init() {
      const node = document.querySelector("#type-text");

      await sleep(4000);
      node.innerText = "";
      await node.type('');

      while (true) {
        await node.type('Web Developer');
        await sleep(2000);
        await node.delete('Web Developer');
        await node.type('UI Designer');
        await sleep(2000);
        await node.delete('UI Designer');
        await node.type('JavaScript Developer');
        await sleep(2000);
        await node.delete('JavaScript Developer');
        await node.type('OSINT Investigator');
        await sleep(2000);
        await node.delete('OSINT Investigator');
      }
    }

    const sleep = time => new Promise(resolve => setTimeout(resolve, time));

    class TypeAsync extends HTMLSpanElement {
      get typeInterval() {
        const randomMs = 100 * Math.random();
        return randomMs < 50 ? 10 : randomMs;
      }

      async type(text) {
        for (let i = 0; i < text.length; i++) {
          const character = text[i];
          if (character === ' ') {
            this.innerHTML += '&nbsp;'; // Add a non-breaking space
          } else {
            this.innerText += character;
          }
          await sleep(this.typeInterval);
        }
      }

      async delete(text) {
        for (let i = text.length - 1; i >= 0; i--) {
          const character = text[i];
          if (character === ' ') {
            this.innerHTML = this.innerHTML.slice(0, -6); // Remove the non-breaking space
          } else {
            this.innerText = this.innerText.slice(0, -1);
          }
          await sleep(this.typeInterval);
        }
      }
    }

    customElements.define('type-async', TypeAsync, {
      extends: 'span'
    });

    init();
