const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Symbol {
  constructor(x, y, fontSize, canvasHeight) {
    this.characters =
      'ッツヅミテデトドナぁあぃいぅうぇえぉおかがきぎけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖゝゞゟァアィイカガキギクグケゲコゴサザシジスズセゼソゾタダチヂニヌネハバパヒビピフブプヘベペホボポマムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺヾくぐゥウェエォオ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = '';
    this.canvasHeight = canvas.height;
  }
  draw(context) {
    this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
    context.fillStyle = 'rgb(22, 89, 177)';
    context.fillStyle(this.text, this.x * this.fontSize, this.y * this.fontSize);
    if (this.y * this.fontSize > this.canvasHeight) {
      this.y = 0;
    } else {
      this.y += 1;
    }
  }
}

class Effect {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 25;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
  }
  #initialize() {
    for (let i = 0; i < this.columns.length; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
    }
  }
}

const effect = new Effect(canvas.width, canvas.height);

function animate() {
  ctx.font = effect.fontSize + 'px monospace';
}
