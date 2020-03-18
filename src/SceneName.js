class SceneName extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneName' });
  }

  preload() {
    this.load.html('nameForm', 'content/nameForm.html');
  }

  create() {
    const div = document.createElement('div');
    div.innerHTML = `
      <input type="text" name="nameField" placeholder="Enter your name" style="font-size: 15px"><br>
      <input type="button" name="playButton" value="Let's Play" style="font-size: 15px">
    `;


    var element = this.add.dom(400, 300, div);

    element.addListener('click');

    element.on('click', function (event) {

        if (event.target.name === 'playButton')
        {
            var inputText = this.getChildByName('nameField');

            //  Have they entered anything?
            if (inputText.value !== '')
            {
                //  Turn off the click events
                this.removeListener('click');

                //  Hide the login element
                this.setVisible(false);

                //  Populate the text with whatever they typed in
                text.setText('Welcome ' + inputText.value);
            }
            else
            {
                //  Flash the prompt
                this.scene.tweens.add({
                    targets: text,
                    alpha: 0.2,
                    duration: 250,
                    ease: 'Power3',
                    yoyo: true
                });
                        }
        }

    });

  }
}

export default SceneName;