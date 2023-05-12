class farmHouse extends AdventureScene {
    constructor() {
        super("farmHouse", "Farmhouse");
    }

    onEnter() {

        let note = this.add.text(this.w * 0.3, this.w * 0.3, "Note📝")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Farmer's Note:\n\nHey thank you for taking care of ma farm for a day son!\n\nThe only task you need to do is feed the cows. \n\nBe sure to have all three colors of grass for the cows before feeding them!\n\nP.S: Don't let my neighbors sheeps eat my grass too! Go grab them quick!  ~Farmer 牛牛", true))
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
                if (this.hasItem("🫙Watering Can")){
                    this.loseItem("🫙Watering Can");
                    this.gainItem("🚿Full Watering can")
                    this.showMessage("splash* splash*");
                }
                else{
                    this.showMessage("I have nothing to put water into!");
                    this.tweens.add({
                        targets: waterFaucet,
                        x: '+=' + this.s,
                        repeat: 2,
                        yoyo: true,
                        ease: 'Sine.inOut',
                        duration: 100
                    });
                }
                
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
            .on('pointerdown', () => {
                if (this.hasItem('🌱Grass') && (this.hasItem('🌹Red Grass')) && (this.hasItem('🔵Blue Grass')) ){
                    this.gotoScene('goodEnding')
                }
                else{    
                    this.gotoScene('badEnding')
            }
        });
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

        let field2Gate = this.add.text(this.w * 0.02, this.w * 0.3, "🚪 Gate to Red Field")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                    this.showMessage("Gate to the red grass field.");  
            })
            .on('pointerdown', () => {
                    this.showMessage("*squeak*");
                    this.gotoScene('field2');
                
            })
        let sheeps = this.add.text(800, this.w * 0.2, '🐑Sheep')
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("~Bleaaaaaat");

            })
            this.tweens.add({
                targets: sheeps,
                x: -5,
                ease: 'Linear',
                duration: 5000,
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
                this.showMessage("Green grass. I should grab it before it gets eaten!");

            })
            .on('pointerdown', () => {
                this.gainItem('🌱Grass');
                this.tweens.add({
                    targets: greenGrass,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => greenGrass.destroy()
                });
            })
            



    }
}


class field2 extends AdventureScene {
    constructor() {
        super("field2", "Red grass covers the field.");
    }
    onEnter() {
        this.add.text(this.w * 0.45, this.w * 0.3, "🚪 Gate to Green Field")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Go back to the farmhouse.");
            })
            .on('pointerdown', () => {
                this.gotoScene('field1');
            });

        let field3Gate = this.add.text(this.w * 0.02, this.w * 0.3, "🚪 Gate to Blue Field")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                    this.showMessage("Gate to the blue grass field.");  
            })
            .on('pointerdown', () => {
                    this.showMessage("*squeak*");
                    this.gotoScene('field3');
                
            })
        let waterCan = this.add.text(200, 900, '🫙Watering Can')
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Empty watering can");

            })
            .on('pointerdown', () => {
                this.gainItem('🫙Watering Can');
                this.tweens.add({
                    targets: waterCan,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => waterCan.destroy()
                });
            })
            
            
         
            
        let redGrass = this.add.text(900, 300, 'Red Grass seedling🌹')
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Its not fully grown. \nMaybe it needs something to help it grow….",true);

            })
            .on('pointerdown', () => {
                if (this.hasItem('🌹🛍️Red Fertilizer')){
                    this.loseItem('🌹🛍️Red Fertilizer');
                    this.showMessage('Red grass grew!');
                    redGrass.setText('🌹Red Grass');
                    this.gainItem('🌹Red Grass');
                    this.tweens.add({
                        targets: redGrass,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => redGrass.destroy()
                    });
                    
                }
                else{    
                this.showMessage("It's not grown!");
                this.tweens.add({
                    targets: redGrass,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            }
        });



    }
}

class field3 extends AdventureScene {
    constructor() {
        super("field3", "Blue grass everywhere!");
    }
    onEnter() {
        this.add.text(this.w * 0.5, this.w * 0.3, "🚪 Gate to Red Field")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Go back to the farmhouse.");
            })
            .on('pointerdown', () => {
                this.gotoScene('field2');
            });

        let blueGrass = this.add.text(300, 900, '🔵Dried Blue Grass')
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Dried blue grass. \n I think I need to hydrate it...");

            })
            .on('pointerdown', () => {

                if (this.hasItem("🚿Full Watering can")){
                    this.loseItem("🚿Full Watering can");
                    this.showMessage("The blue grass got hydrated!");
                    blueGrass.setText("🔵Blue Grass");
                    this.gainItem('🔵Blue Grass');
                    this.tweens.add({
                        targets: blueGrass,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => blueGrass.destroy()
                    });
                    
                }
                else{
                this.showMessage("It's dry!");
                this.tweens.add({
                    targets: blueGrass,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            }
            });

            
         
            
        let redFertilizer = this.add.text(200, this.w * 0.2, '🌹🛍️Red Fertilizer')
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Fertilizer for red grass.");

            })
            .on('pointerdown', () => {
                this.gainItem('🌹🛍️Red Fertilizer');
                this.tweens.add({
                    targets: redFertilizer,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => redFertilizer.destroy()
                });
            })
            



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

class goodEnding extends Phaser.Scene {
    constructor() {
        super('goodEnding');
    }
    create() {
        this.add.text(50, 50, "Moooo!\n(Thank you! Now I'm full,\nI can head to the slaughterhouse and see my parents!)").setFontSize(50);
        this.add.text(50, 800, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}

class badEnding extends Phaser.Scene {
    constructor() {
        super('badEnding');
    }
    create() {
        this.add.text(50, 50, "Moooo….\n(Aw, if I'm not fed enough,\nI can't see my parents now. \nI'll have no choice but to go out to the wild now….)").setFontSize(50);
        this.add.text(50, 800, "Click anywhere to restart.").setFontSize(20);
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
    scene: [Intro, farmHouse, barn, field1, field2, field3, goodEnding, badEnding],
    title: "Adventure Game",
});

