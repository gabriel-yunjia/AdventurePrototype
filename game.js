class farmHouse extends AdventureScene {
    constructor() {
        super("farmHouse", "Farmhouse");
    }

    onEnter() {

        let note = this.add.text(this.w * 0.3, this.w * 0.3, "Note📝")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Farmer's Note:\n\nHey thank you for taking care of ma farm for a day son!\n\nThe only task you need to do is feed the cows. \n\nBe sure to have all three colors of grass for the cows before feeding them!\n\n P.S: Don't let my neighbors sheeps eat my grass too! Go grab them quick!  ~Farmer 牛牛", true))
            .on('pointerdown', () => {
                this.showMessage("Stuck to the board. maybe I'll come back if I forget.");
                this.tweens.add({
                    targets: note,
                    x: '+=' + this.s,                                                                          
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("key for the gate.", false)
            })
            .on('pointerdown', () => {
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })
        let waterFaucet = this.add.text(this.w * 0.5, this.w * 0.5, "🚰Water Faucet")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("I can get water from here, but how?", false)
            })
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: key1,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key1.destroy()
                });
            })    


        let field1Gate = this.add.text(this.w * 0.02, this.w * 0.3, "🚪 Gate to Fields")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("Maybe I can open this");
                } else {
                    this.showMessage("Locked.");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    field1Gate.setText("🚪 unlocked gate");
                    this.gotoScene('field1');
                }
            })
        let cowBarn = this.add.text(this.w * 0.5, this.w * 0.3, "🚪 Gate to Barn")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                    this.showMessage("I can faintly hear some cows mooing from here.");  
            })
            .on('pointerdown', () => {
                    this.showMessage("*squeak*");
                    this.gotoScene('barn');
                
            })

    }
}

class barn extends AdventureScene {
    constructor() {
        super("barn", "Barn");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "🚪 Gate to Farmhouse")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Gate back to the farmhouse");
            })
            .on('pointerdown', () => {
                this.gotoScene('farmHouse');
            });

        let cow = this.add.text(this.w * 0.6, this.w * 0.2, 'Cows🐄')
            
            .setFontSize(this.s * 3)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('MOOOOO~');
                this.tweens.add({
                    targets: cow,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}



class field1 extends AdventureScene {
    constructor() {
        super("field1", "Green grass covers the field here.");
    }
    onEnter() {
        this.add.text(this.w * 0.5, this.w * 0.3, "🚪 Gate to Farmhoue")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Go back to the farmhouse.");
            })
            .on('pointerdown', () => {
                this.gotoScene('farmHouse');
            });

        let sheeps = this.add.text(800, this.w * 0.2, '🐑Sheep')
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage(Math.round(sheeps.x));

            })
            .on('pointerdown', () => this.gotoScene('outro'));
            



            this.tweens.add({
                targets: sheeps,
                x: -5,
                ease: 'Linear',
                duration: 1000,
                onUpdate: function(tween, target){
                    if(target.x <= 200){
                        tween.stop();
                        greenGrass.destroy()
                    }
                }
            })
            
         
            
        let greenGrass = this.add.text(200, this.w * 0.2, '🌱Grass')
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage(greenGrass.x);

            })
            .on('pointerdown', () => this.gotoScene('outro'));
            



    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('farmHouse'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, farmHouse, barn, field1, Outro],
    title: "Adventure Game",
});

